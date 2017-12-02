var configData = require("./config");

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configData.username}:${configData.password}@ds123695.mlab.com:23695/todo-list`;
    }
}