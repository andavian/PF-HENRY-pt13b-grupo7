//Post Categorias
const { Categories } = require("../db");

const postCategories = async ({
 name,
}) => {

if (!name) throw Error("Faltan datos");

const checkExistCategory = await Categories.findAll({
    where: {
        name: name.toUpperCase(),
    },
});
if (checkExistCategory>0) throw Error("Ya existe la categoria");

const newCategory = await Categories.create({
    name,
});
return newCategory;

};

module.exports = postCategories;