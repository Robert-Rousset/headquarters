const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Todo } = require("../models");

router.get("/", withAuth, (req, res) => {
  res.render("hq");
});

router.get("/todo", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const todos = (await user.getTodos()).map((todo) => todo.dataValues);
    res.render("todo", { todos });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
