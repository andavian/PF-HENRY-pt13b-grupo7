//Get Products By Name
const { Op } = require("sequelize");
const { Product, Category } = require("../db");

const getProductByName = async (title) => {
  const product = await Product.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },

  });
  return product;
};

module.exports = getProductByName;

/* Hay que corregir para traer el name de Category. El sig. codigo es para buscar nombre en la relacion con la tabla Category - Ver si se puede implementar o usar otra forma

    include: {
      model: Category,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
*/