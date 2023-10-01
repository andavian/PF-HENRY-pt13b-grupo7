const { Category } = require("../db");

const categoryId = async (categoryName) => {
  try {
    const category = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    if (category) {
      return category.id;
    } else {
      throw new Error("Categoría no encontrada");
    }
  } catch (error) {
    throw new Error("Error al buscar la categoría: " + error.message);
  }
};

module.exports = categoryId;
