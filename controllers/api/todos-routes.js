const withAuth = require("../../utils/auth");
const router = require("express").Router();
const { User } = require("../../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const todos = (await user.getTodos()).map((todo) => todo.dataValues);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
