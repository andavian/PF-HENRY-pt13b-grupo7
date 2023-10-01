//Post Products
const { Product } = require("../db");
const categoryId = require("../utils/categoryId");

const postProducts = async ({
  title,
  price,
  description,
  primaryimage,
  categoryName,
}) => {
  if (!title || !price || !description || !primaryimage || !categoryName)
    throw Error("Faltan datos");

  const checkExistProduct = await Product.findAll({
    where: {
      title: title.toUpperCase(),
    },
  });
  if (checkExistProduct.length > 0) throw Error("Ya existe el producto");

  const newProduct = await Product.create({
    title,
    price,
    description,
    primaryimage,
    categoryId: await categoryId(categoryName),
  });

  return newProduct;
};

module.exports = postProducts;
