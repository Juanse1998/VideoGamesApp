const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get('/', function(req, res, next) {
    res.json("hola")
  });
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
