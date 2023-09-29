//Get All Products 
const { Categories } = require("../db");

const getCategories = async () => {
    const allCategories = await Categories.findAll();
    return allCategories;
};

module.exports = getCategories;