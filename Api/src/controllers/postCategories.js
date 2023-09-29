//Post Categorias
const { Category } = require("../db");

const postCategories = async ({
 name,
 thumbnail
}) => {

if (!name || !thumbnail) throw Error("Faltan datos");

const checkExistCategory = await Category.findAll({
    where: {
        name: name.toUpperCase(),
    },
});
if (checkExistCategory>0) throw Error("Ya existe la categoria");

const newCategory = await Category.create({
    name,
    thumbnail
});
return newCategory;

};

module.exports = postCategories;