//Post Products
const { Product, Category } = require("../db");

const postProducts = async ({
  title,
  price,
  description,
  primaryimage,
  categoryName,
}) => {
  if (!title || !price || !description || !primaryimage)
    throw Error("Faltan datos");

  // const categoryId = async (categoryName) => {
  //   try {
  //     const category = await Category.findAll({
  //       where: {
  //         name: categoryName.toUpperCase(),
  //       },
  //     });

  //     console.log("category", category);
  //     if (category) {
  //       return category.id;
  //     } else {
  //       throw new Error("Categoría no encontrada");
  //     }
  //   } catch (error) {
  //     throw new Error("Error al buscar la categoría: " + error.message);
  //   }
  // };

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
    categoryId: categoryName,
  });

  return newProduct;
};

module.exports = postProducts;
