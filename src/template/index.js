const server =  require("./configs/Server");
const database =  require("./configs/Database");
const loadEnvironmentVariable = require("./configs/LoaderEnvironmentVariable");
const handlerException = require("./middlewares/HandlerExceptionMiddleware");
const repository = require("./repositories/Repository");
const app = require("./routes/index");
const index = require("./main");

module.exports = {
    configs: {
        server, database, loadEnvironmentVariable
    },
    middlewares: {
        handlerException
    },
    repositories: {
        repository
    },
    routes: {
        app
    },
    index
}