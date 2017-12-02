var ToDoModel = require("../models/todoModel");

module.exports = function(app) {

    app.get("/api/setupTodos", function(req, res){
        var starterData = [
            {
                username: "vaultdweller",
                action: "Play Styx",
                isDone: true,
                hasAttachment: false
            }, {
                username: "vaultdweller",
                action: "Play Thief 2 FMs",
                isDone: true,
                hasAttachment: false
            }, {
                username: "vaultdweller",
                action: "Play Dark Souls 3",
                isDone: false,
                hasAttachment: false
            }, {
                username: "john_doe",
                action: "Play Gwent",
                isDone: false,
                hasAttachment: false
            }
        ];

        ToDoModel.create(starterData, function (err, result) {
            if (err) return handleError(err);
            
            res.send(result);
        });
    });
};