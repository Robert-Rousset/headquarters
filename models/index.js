const User = require("./User");
const Todo = require("./Todo");
const Item = require("./Item");

User.hasMany(Todo);
Todo.belongsTo(User);
Todo.hasMany(Item);
Item.belongsTo(Todo);

module.exports = { User, Todo, Item };
