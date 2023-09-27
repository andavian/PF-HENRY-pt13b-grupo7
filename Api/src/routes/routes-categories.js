//aqui van las rutas get/post/put/delete correspondientes

const {Router}=require ('express');

let categoriesRouter=Router();

const getCategoriesHandler=require('../handlers/categorieshandlers.js');


categoriesRouter.get('/', getCategoriesHandler);

module.exports=categoriesRouter