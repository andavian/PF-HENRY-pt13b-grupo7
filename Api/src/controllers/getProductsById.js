//Get Product Por ID
const { Products, Categories } = require("../db");

const getProductsById = async (id) => {
    const productIdBD = await Products.findOne({
        where: { id },
        include: {
            model: Categories,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          }
    });
    return productIdBD;
};

module.exports = getProductsById;