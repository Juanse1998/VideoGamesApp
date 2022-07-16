const { conn } = require('../db.js');
const fetch = require('node-fetch');
const { Videogame, Gender} = require('../db');

var id = 2000000;
// Busco los detalles de un juego
const videogamedetails = (req, res) => {
    const id = req.params.id
    console.log('aaaaaa', id)
    const genres = [];
    const juegos = [];
    const platforms = [];
    //const juego = await Videogame.findAll();
  fetch(`https://api.rawg.io/api/games/${id}`)
    .then(r => r.json()) //r.json())
    .then((recurso) =>  {
      console.log('recursooo', recurso);
        recurso.genres.forEach(element => {
                genres.push(element.name);
        });
        recurso.platforms.forEach(element => {
            platforms.push(element.platform.name);
        });
        const detalles = {
            id: recurso.id,
            name: recurso.name,
            rating: recurso.rating,
            released: recurso.released,
            description: recurso.description,
            genres: genres,
            platforms: platforms
        }
        console.log('detalles', detalles);
        juegos.push(detalles)
        res.status(200).send(juegos);
    });
}

// Filtro juegos por la palabra que ingresa por parametros
const videogamesfilt = async (req, res) => {
    const juego = await Videogame.findAll()
    const nombre = req.params.name;
    var resultado = [];
    const platforms = [];
    if (!nombre) {
        res.status(404).send({msg: 'Juego no encontrado'});
    } else {
        // Busco en la api si el parametro name coincide con algun juego
      fetch(`https://api.rawg.io/api/games?key=df9bdfd7f78f4e30862fd02a6dba39ed`)
        .then(r => r.json()) //r.json())
        .then((recurso) =>  {
            recurso.results.forEach(element => {
                if (element.name.includes(nombre)) {
                    element.platforms.forEach(element => {
                        platforms.push(element.platform.name)
                    })
                        const juegofil = {
                            id: element.id,
                            name: element.name,
                            genres: element.genres,
                            rating: element.rating,
                            released: element.released,
                            platforms: platforms,
                            background_image: element.background_image
                        }

                    resultado.push(juegofil);
                }
                });
            // Busco en la base si el parametro name coincide con algun juego
            juego.forEach(element => {
                if (element.name.includes(nombre)) {
                    resultado.push(element);
                }
            })
            if (resultado.length < 1) {
                res.status(404).send({msg: 'Juego no encontrado'});
            } else {
                res.status(200).send(resultado)
            }
        });
    }
}

// Controlador para mostrar los juegos de la api y los de la base de datos
const viewAllGames = async (req, res) => {
    const juegos = [];
    const game = await Videogame.findAll({
        include: [{
            model: Gender
        }]
    });
    game.forEach(element => {
        const juegoAux = {
            id: element.dataValues.id,
            name: element.dataValues.name,
            released: element.dataValues.released,
            rating: element.dataValues.rating,
            platforms: element.dataValues.platforms,
            genres: element.dataValues.genders
        }
        juegos.push(juegoAux)
    });
  fetch(`https://api.rawg.io/api/games?key=df9bdfd7f78f4e30862fd02a6dba39ed`)
    .then(r => r.json()) //r.json())
    .then((recurso) =>  {
        const next = recurso.next;
        const previous = recurso.previous;
        recurso.results.forEach(element => {
            const platforms = [];
            element.platforms.forEach(element => {
                platforms.push(element.platform.name)
            })
            const juego = {
                next: recurso.next,
                previous: recurso.previous,
                id: element.id,
                name: element.name,
                genres: element.genres,
                rating: element.rating,
                released: element.released,
                platforms: platforms,
                background_image: element.background_image
            }

            juegos.push(juego);

        });
        res.status(200).send(juegos);

        // //Filtrar los primeros 15 juegos
        // const juegosTodos = [];
        // for (let i = 0; i < 15; i++) {
        //     juegosTodos.push(juegos[i]);
        // }

     });
}


// Agrego un Juego a la base de datos
const addGame = async (req, res) => {
    const idAux = id;
    id = id + 1;

    const arr = req.body.genres;
    const description = req.body.description;
    const generos = arr.split(",");
    const nombre = req.body.name;
    const released = req.body.released;
    const platforms = req.body.platforms;
    const rating = req.body.rating;


    if (!nombre ||  !platforms ) {
        res.status(400).send({ msg: 'Error algun dato no fue ingresado' });
    } else {
        const game = await Videogame.create({
            id: idAux,
            name: nombre,
            description: description,
            platforms: platforms,
            released: released,
            rating: rating
          })
        //   .then((createdInstance) => { // Funcionando perfecto hasta la 186
        //         generos.map((g) => {
        //             conn.query(`INSERT INTO video_gender VALUES (NOW(), NOW(), ${createdInstance.dataValues.id}, ${g})`);
        //         });
        //     });
        //     res.status(200).send(game);
        // };

        //   if(generos.length > 1) {
        //     const g1 = await Gender.findAll({
        //         where: {
        //             name: generos[0]
        //         }
        //     })

        //     const g2 = await Gender.findAll({
        //         where: {
        //             name: generos[1]
        //         }
        //     })
        //     await game.addGenders(g1)
        //     await game.addGenders(g2)
        //     res.status(200).send(game);
        // } else {
        //     const gg1 = await Gender.findAll({
        //         where: {
        //             name:generos[0]
        //         }
        //     })
        //     await game.addGenders(gg1)
        //     res.status(200).send(game);
        // }
        // if (generos.length > 1) {
        //     const g = await Gender.findAll({
        //         where: {
        //                 name: generos[0]
        //             }
        //         })

        //     const gen = await Gender.findAll({
        //             where: {
        //                     name: generos[1]
        //                 }
        //         })
        //     await game.addGender(g);
        //     await game.addGender(gen);
        //     res.status(200).send(game);

        // } else {
            const g1 = await Gender.findAll({
                where: {
                        name: generos[0]
                    }
                })

                await game.addGender(g1)
                res.status(200).send(game);
        // }


    }
}


const detailsGameDb = async (req, res) => {
    const game = await Videogame.findAll(   {
        include: [{
            model: Gender
        }]
    });
    if (!game) {
        res.status(400).send("No hay juego cargados")
    } else {
        res.status(200).send(game)
    }
}


module.exports = {
    videogamedetails,
    videogamesfilt,
    addGame,
    viewAllGames,
    detailsGameDb
}
