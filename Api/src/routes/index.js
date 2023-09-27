//aquí irán las rutas generales, con route.use

const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categoriesRouter=require('./routes-categories.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/categories",categoriesRouter);

module.exports = router;
