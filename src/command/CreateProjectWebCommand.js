const CreatedProjectCommand = require("./CreateProjectCommand");
const file = require("./../File");
const path = require("path");
const process = require("child_process");
const template = require("../template/");

class CreateProjectWebCommand extends CreatedProjectCommand {

    constructor() {
        super();
        this._shellCommand;
    }

    async execute(args) {
        console.log("--------------------- INIT CREATION PROJECT -----------------------");
        const pathProject = path.resolve(args.path, args.projectName);
        await file.createDirectory(pathProject);
        await file.createDirectory(path.resolve(pathProject, "src"));
        console.log("* src");

        await file.createDirectory(path.resolve(pathProject, "src", "config"));
        console.log("* src/config");

        await file.createFile(path.resolve(pathProject, "src", "config", "Server.js"), 
        template.configs.server.web);
        console.log("-----> Server.js");

        await file.createFile(path.resolve(pathProject, "src", "config", "Database.js"),
         template.configs.database.web);
        console.log("-----> Database.js");

        await file.createFile(
            path.resolve(pathProject, "src", "config", "LoadEnvironmentVariable.js"),
            template.configs.loadEnvironmentVariable.web
        );
        console.log("-----> LoadEnvironmentVariable.js");

        await file.createDirectory(path.resolve(pathProject, "src", "routes"));
        console.log("* src/routes");

        await file.createFile(
            path.resolve(pathProject, "src", "routes", "index.js"),
            template.routes.app.web
        );
        console.log("-----> index.js");

        await file.createDirectory(path.resolve(pathProject, "src", "controllers"));
        console.log("* src/controllers");

        await file.createDirectory(path.resolve(pathProject, "src", "exceptions"));
        console.log("* src/exceptions");

        await file.createDirectory(path.resolve(pathProject, "src", "repositories"));
        console.log("* src/repositories");

        await file.createFile(
            path.resolve(pathProject, "src", "repositories", "Repository.js"),
            template.repositories.repository.web
        );
        console.log("-----> Repository.js");

        await file.createDirectory(path.resolve(pathProject, "src", "services"));
        console.log("* src/services");

        await file.createDirectory(path.resolve(pathProject, "src", "middlewares"));
        console.log("* src/middlewares");

        await file.createFile(
            path.resolve(pathProject, "src", "middlewares", "HandlerExceptionsMiddleware.js"),
            template.middlewares.handlerException.web
        );
        console.log("-----> HandlerExceptionsMiddleware.js");

        await file.createDirectory(path.resolve(pathProject, "src", "views"));
        console.log("* src/views");

        await file.createDirectory(path.resolve(pathProject, "public"));
        console.log("* public");

        await file.createFile(path.resolve(pathProject, "src", "index.js"), template.index.web);
        console.log("---> src/index.js");

        this._shellCommand = `cd ${pathProject} && npm init -y && npm i -P express body-parser ejs dotenv mongoose `
        this.executedShellCommand(() => {
            console.log("--------------------- FINISHED CREATION PROJECT -----------------------");
        });
    }

    getShellCommand() {
        return this._shellCommand;
    }
}

module.exports = CreateProjectWebCommand;