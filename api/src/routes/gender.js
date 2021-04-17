const { Router } = require('express');
const { viewAllGenders, addGender } = require('../controllers/genders.controller');



const router = Router();

router.get('/viewAllGenders', viewAllGenders);
router.post('/addGender', addGender);
module.exports = router;