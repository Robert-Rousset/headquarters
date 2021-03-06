const router = require("express").Router();
const homeRoutes = require("./home-routes");
const loginRoutes = require("./login-routes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/api", apiRoutes);

module.exports = router;
