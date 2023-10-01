//Post Categorias, No permite repetir nombre de categorias, indistintamente se escriban Mayus. y Minus.
const { Category } = require("../db");

const postCategories = async ({
 name,
 thumbnail
}) => {

if (!name || !thumbnail) throw Error("Faltan datos");

function nameUpperCase(name) {
   return name = name.toUpperCase();
} 

const checkExistCategory = await Category.findAll({
    where: {
        name: name.toUpperCase(),
    },
});
if (checkExistCategory.length > 0) throw Error("Ya existe la categoria");

const newCategory = await Category.create({
    name: nameUpperCase(name),
    thumbnail
});
return newCategory;

};

module.exports = postCategories;