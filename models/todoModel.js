var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    action: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var ToDoModel = mongoose.model("ToDo", todoSchema);

module.exports = ToDoModel;