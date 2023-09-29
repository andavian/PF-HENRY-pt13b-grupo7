//aqui van las rutas get/post/put/delete correspondientes
const { Router } = require("express");
const categoriesRoutes = Router();

const getCategories = require("../controllers/getCategories");
const getCategoriesById = require("../controllers/getCategoriesById");
const postCategories = require("../controllers/postCategories");

categoriesRoutes.get("/", async (req, res) => {
  try {
    const allCategories = await getCategories();
    return res.status(200).json(allCategories);
  } catch (error) {
    res.status(400).json({ message: "No hay categorias para mostrar" });
  }
});

categoriesRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categoryById = await getCategoriesById(id);
    res.status(200).json(categoryById);
  } catch (error) {
    res.status(400).json({ error: `No existe categoria con el id: ${id}` });
  }
});

categoriesRoutes.post("/", async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    const categoryPost = await postCategories(response);
    res.status(201).json(categoryPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = categoriesRoutes;
