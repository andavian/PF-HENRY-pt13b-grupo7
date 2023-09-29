//Get Categoria Por ID
const { Categories } = require("../db");

const getCategoriesById = async (id) => {
    const categoryIdBD = await Categories.findOne({
        where: { id },
    });
    return categoryIdBD;
};

module.exports = getCategoriesById;