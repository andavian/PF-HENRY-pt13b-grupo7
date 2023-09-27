//Get All Products 
const { Products, Categories } = require("../db");

const getProducts = async () => {
    const allProducts = await Products.findAll({
        include: {
            model: Categories,
            attributes:["name"],
            through: {
                attributes: [],
            },
        }
    });
    return allProducts;
};

module.exports = getProducts;