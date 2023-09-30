//Post Products
const { Product } = require("../db");

const postProducts = async ({
  title,
  price,
  description,
  primaryimage,
  categoryId,
}) => {
  if (!title || !price || !description || !primaryimage)
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
    categoryID: categoryId,
  });

  return newProduct;
};

module.exports = postProducts;
