const router = require("express").Router();
const userRoutes = require("./users-routes");
const todosRoutes = require("./todos-routes");
const itemsRoutes = require("./items-routes");

router.use("/users", userRoutes);
router.use("/todos", todosRoutes);
router.use("/items", itemsRoutes);

module.exports = router;
