const router = require("express").Router();
const { User, Todo, Item } = require("../../models");

router.put("/update-item/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    const todo = await item.getTodo();
    const user = await todo.getUser();
    if (todo.UserId !== user.id) {
      res.status(403).end();
      return;
    }
    item.content = req.body.content;
    await item.save();
    const items = (await todo.getItems()).map((item) => item.dataValues);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
