//Get Product Por ID
const { Product, Category } = require("../db");

const getProductsById = async (id) => {
    const productIdBD = await Product.findOne({
        where: { id },
        include: {
            model: Category,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          }
    });
    return productIdBD;
};

module.exports = getProductsById;