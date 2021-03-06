const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Todo } = require("../models");

router.get("/", withAuth, async (req, res) => {
  const user = await User.findByPk(req.session.userId);
  const todos = (await user.getTodos()).map(todo => todo.dataValues);
  res.render("hq", { todos });
});

router.get("/todo", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const todos = (await user.getTodos()).map(todo => todo.dataValues);
    res.render("todo", { todos });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/todo/:id", withAuth, async (req, res) => {
  try {
    res.render("todo");
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/timer", withAuth, async (req, res) => {
  res.render("timer");
});

router.get("/inspire", withAuth, async (req, res) => {
  res.render("inspire");
});

module.exports = router;
