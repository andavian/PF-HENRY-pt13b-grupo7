//aquí irán las rutas generales, con route.use

const { Router } = require("express");

//Index Routes
const categoriesRoutes = require("./routes-categories");
const clientsRoutes = require("./routes-clients");
const optionsRoutes = require("./routes-options.js")
const productsRoutes = require("./routes-product.js")
const salesRoutes = require("./routes-sales")

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/clients", clientsRoutes);
router.use("/options", optionsRoutes);
router.use("/products", productsRoutes);
router.use("/sales", salesRoutes);

module.exports = router;