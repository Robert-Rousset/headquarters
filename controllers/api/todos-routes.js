const withAuth = require("../../utils/auth");
const router = require("express").Router();
const { User, Todo, Item } = require("../../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const todos = (await user.getTodos()).map(todo => todo.dataValues);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  const user = await User.findByPk(req.session.userId);
  if (todo.UserId !== user.id) {
    res.status(403).end();
    return;
  }
  res.status(200).json(todo);
});

router.get("/:id/items", withAuth, async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    const user = await User.findByPk(req.session.userId);
    if (todo.UserId !== user.id) {
      res.status(403).end();
      return;
    }
    const items = (await todo.getItems()).map(item => item.dataValues);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Create item
router.post("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    const user = await User.findByPk(req.session.userId);
    const newItem = await Item.create({
      content: req.body.content,
    });
    await newItem.setTodo(todo);
    console.log("newitem", newItem);
    const items = (await todo.getItems()).map(item => item.dataValues);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Delete Todo
router.delete("/delete-todo/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      res.status(404).end();
      return;
    }
    const user = await User.findByPk(req.session.userId);
    if (todo.UserId !== user.id) {
      res.status(403).end();
      return;
    }
    await todo.destroy();
    const todos = (await user.getTodos()).map(todo => todo.dataValues);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
