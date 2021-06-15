const withAuth = require("../../utils/auth");
const router = require("express").Router();
const { User, Todo } = require("../../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const todos = (await user.getTodos()).map((todo) => todo.dataValues);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  const user = await User.findByPk(req.session.userId);
  const todo = await Todo.findByPk(req.params.id);
  if (todo.UserId !== user.id) {
    res.status(403).end();
    return;
  }
  res.status(200).json(todo);
});

module.exports = router;
