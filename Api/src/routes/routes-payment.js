//aqui van las rutas get/post/put/delete correspondientes
const { Router } = require("express");
const {
  createOrder,
  cancelOrder,
  captureOrder,
} = require("../controllers/paymentControllers");

const paymentRoutes = Router();

paymentRoutes.get("/create-order", createOrder);

paymentRoutes.get("/capture-order", captureOrder);

paymentRoutes.get("/cancel-order", cancelOrder);

module.exports = paymentRoutes;