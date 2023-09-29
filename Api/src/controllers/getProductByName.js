//Get Products By Name
const { Op } = require("sequelize");
const { Products, Categories } = require("../db");

const getProductByName = async (name) => {
  const product = await Products.findAll({
    where: {
      //name: name,
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Categories,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (product.length === 0) {
    return res.status(400).send("No existe producto con ese nombre");
  }

  return product;
};

module.exports = getProductByName;
