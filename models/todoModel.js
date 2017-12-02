var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var ToDoModel = mongoose.model("ToDo", todoSchema);

model.exports = ToDoModel;