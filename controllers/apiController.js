var ToDoModel = require("../models/todoModel");
var bodyParser = require("body-parser");

var updateTodo = function(reqBody, res){
    ToDoModel.findByIdAndUpdate(reqBody.id, {
        action: reqBody.action,
        isDone: reqBody.isDone,
        hasAttachment: reqBody.hasAttachment
    }, function(err, data){
        if (err) throw err;

        res.send("Successfully updated");
    });
}

var addTodo = function(reqBody, res){
    var newToDo = new ToDoModel({
        username: reqBody.username,
        action: reqBody.action,
        isDone: reqBody.isDone,
        hasAttachment: reqBody.hasAttachment      
    });

    newToDo.save(function (err, data) {
        if (err) throw err;

        res.send("Successfully created");
    });
}

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get("/api/todos/:username", function(req, res){
        ToDoModel.find({ username: req.params.username }, function (err, data) {
            if (err) throw err;

            res.send(data);
        });
    });

    app.get("/api/todo/:id", function(req, res){
        ToDoModel.findById(req.params.id, function(err, data){
            if (err) throw err;

            res.send(data);
        });
    });

    app.post("/api/todo/", function(req, res){
        if(req.body.id) {
            updateTodo(req.body, res);
        } else {
            addTodo(req.body, res);
        }
    });

    app.delete("/api/todo/", function(req, res){
        ToDoModel.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;

            res.send("Successfully deleted");
        });
    });
}