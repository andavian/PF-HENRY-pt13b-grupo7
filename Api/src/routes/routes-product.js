//aqui van las rutas get/post/put/delete correspondientes
const { Router } = require("express");
const productsRoutes = Router();

const getProducts = require("../controllers/getProducts");
const getProductByName = require("../controllers/getProductByName");
const getProductsById = require("../controllers/getProductsById");
const postProducts = require("../controllers/postProducts");

productsRoutes.get("/", async (req, res) => {
  try {
    const allProducts = await getProducts();
    return res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ message: "No hay productos para mostrar" });
  }
});

productsRoutes.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    const productByName = await getProductByName(name);
    if (productByName.length === 0) {
      return res
        .status(404)
        .json({
          message: `No se encontraron productos con el nombre: ${name}`,
        });
    }
    res.status(200).json(productByName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

productsRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productById = await getProductsById(id);
    res.status(200).json(productById);
  } catch (error) {
    res.status(400).json({ error: `No existe producto con el id: ${id}` });
  }
});

productsRoutes.post("/", async (req, res) => {
  try {
    const response = req.body;
    const productPost = await postProducts(response);
    res.status(201).json(productPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = productsRoutes;
