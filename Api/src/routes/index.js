const { Router } = require("express");

//Index Routes
const productRoutes = require("./productRoutes");
const usersRoutes = require("./usersRoutes");

const router = Router();

router.use("/product", productRoutes);
router.use("/users", usersRoutes);

module.exports = router;