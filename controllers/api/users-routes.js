const router = require("express").Router();
const { User, Todo } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = user.id;
      res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = user.id;

      res.status(200).json({ user: user, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//Create todo
router.post("/create-todo", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const newTodo = await Todo.create({
      title: req.body.title,
      colour: req.body.colour,
    });
    await newTodo.setUser(user);
    const todos = (await user.getTodos()).map((todo) => todo.dataValues);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Update todo
router.put("/update-todo/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    await Todo.update(
      {
        title: req.body.title,
        colour: req.body.colour,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const todos = (await user.getTodos()).map((todo) => todo.dataValues);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
