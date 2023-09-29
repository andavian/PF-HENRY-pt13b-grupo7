//Post Products
const { Products, Categories } = require("../db");

const postProducts = async ({
    title,
    price,
    summary,
    dimension,
    description,
    primaryimage,
    secondimage,
    category,
    size,
    dateofcreation,
    stock,
    rating,
    //categoryId,
}) => {

if (!title || !price || !summary || !description || !primaryimage) throw Error("Faltan datos");

const checkExistProduct = await Products.findAll({
    where: {
        title: title.toUpperCase(),
    },
});
if (checkExistProduct.length>0) throw Error("Ya existe el producto");

const newProducts = await Products.create({
    title,
    price,
    summary,
    dimension,
    description,
    primaryimage,
    secondimage,
    category,
    size,
    dateofcreation,
    stock,
    rating,
});
//if (categoryId) await newProducts.addCategories(categoryId);
return newProducts;

};

module.exports = postProducts;