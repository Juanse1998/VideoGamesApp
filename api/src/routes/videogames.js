const { Router } = require('express');
const router = Router();
const { conn } = require('../db.js');
const { videogamesfilt, addGame, viewAllGames, videogamedetails, detailsGameDb } = require('../controllers/videogames.controller');


router.get('/videogames', viewAllGames);
router.get('/videogames/:name', videogamesfilt);
router.post('/addGame', addGame);
router.get('/videogame/:id', videogamedetails);
router.get('/detailGames', detailsGameDb);



module.exports = router;