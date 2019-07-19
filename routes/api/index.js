const router = require("express").Router();
const recipeRoutes = require("./recipes");
const orderRoutes = require("./orders");

// Individual API routes
router.use("/recipes", recipeRoutes);
router.use("/orders", orderRoutes);


module.exports = router;
