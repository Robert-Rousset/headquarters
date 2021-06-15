const router = require("express").Router();
const userRoutes = require("./users-routes");
const todosRoutes = require("./todos-routes");

router.use("/users", userRoutes);
router.use("/todos", todosRoutes);

module.exports = router;
