const { conn, Gender } = require('../db.js');
const fetch = require('node-fetch');



// Mostrar todos los generos
const viewAllGenders = async (req, res) => {
    const generos = await Gender.findAll();
    res.status(200).send(generos);
}

// Agregar un nuevo genero
const addGender = async (req, res) => {
    if (!req.body.name) {
        res.status(404).send({msg: 'No ingreso el nombre de la categoria'});
    } else {
        const genero = req.body.name;
        const gender =  await Gender.create({
            name: genero
        });
        res.status(200).send('ok');
    }
}

module.exports = {
    viewAllGenders,
    addGender
}