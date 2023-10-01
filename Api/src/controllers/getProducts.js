//Get All Products 
const { Product, Category } = require("../db");

const getProducts = async () => {
    const allProducts = await Product.findAll();
    return allProducts;
};

module.exports = getProducts;

/*Hay que corregir para traer el name de Category. El sig. codigo es para buscar nombre en la relacion con la tabla Category

{
        include: {
            model: Category,
            attributes:["name"],
            through: {
                attributes: [],
            },
        }
    }
*/