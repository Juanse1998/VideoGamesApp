//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Videogame, Gender } = require('../api/src/db') 
const fetch = require('node-fetch');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    const generos = [];
    fetch(`https://api.rawg.io/api/genres?key=35262ecf9f654a0cb7c4de60a2742b9b`)
        .then(r => r.json()) //r.json())
        .then((recurso) => {
            recurso.results.forEach(element => {
                generos.push(element.name);
            });
            generos.forEach(element =>  {
              Gender.create({
                name: element
              })
            });
          });
        });
        
        
      });
      
    //   const game =  await Videogame.create({
    //     name: 'Pes 06',
    //     descripcion: 'futbol',
    //     plataformas: 'pc'
    //   });

    //   const gender =  await Gender.create({
    //     name: 'sport'
    //   });
    //  await game.addGender(gender);
      // const gender =  await Gender.create({
      //   id: 1,
      //   name: 'accion'
      // });
      // const gender2 =  await Gender.create({
      //   id: 2,
      //   name: 'sport'
      // });
      // const gender3 =  await Gender.create({
      //   id: 3,
      //   name: 'adventure'
      // });
     
    // await game.setGenders([gender, gender2, gender3, gender4])