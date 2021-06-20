const User = require("./User");
const Todo = require("./Todo");
const Item = require("./Item");
const Timer = require("./Timer")

User.hasMany(Todo);
Todo.belongsTo(User);
Todo.hasMany(Item);
Item.belongsTo(Todo);
User.hasOne(Timer);
Timer.belongsTo(User);

module.exports = { User, Todo, Item, Timer };
