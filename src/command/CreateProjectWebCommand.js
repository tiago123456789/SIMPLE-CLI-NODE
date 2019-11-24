const Command = require("./Command");
const file = require("./../File");
const path = require("path");
const process = require("child_process");
const indexTemplate = require("../template/Index");

class CreateProjectApiCommand extends Command {

    async execute(args) {
        console.log("--------------------- INIT CREATION PROJECT -----------------------");
        const pathProject = path.resolve(args.path, args.projectName);
        await file.createDirectory(pathProject);
        console.log("--------------------- CREATE BASE DIRECTORY PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src"));
        console.log("--------------------- CREATE DIRECTORY src PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "config"));
        console.log("--------------------- CREATE DIRECTORY src/config PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "routes"));
        console.log("--------------------- CREATE DIRECTORY src/routes PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "controllers"));
        console.log("--------------------- CREATE DIRECTORY src/controllers PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "exceptions"));
        console.log("--------------------- CREATE DIRECTORY src/exceptions PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "repositories"));
        console.log("--------------------- CREATE DIRECTORY src/repositories PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "services"));
        console.log("--------------------- CREATE DIRECTORY src/services PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "middlewares"));
        console.log("--------------------- CREATE DIRECTORY src/middlewares PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "src", "views"));
        console.log("--------------------- CREATE DIRECTORY src/views PROJECT -----------------------");
        await file.createDirectory(path.resolve(pathProject, "public"));
        console.log("--------------------- CREATE DIRECTORY public PROJECT -----------------------");
        await file.createFile(path.resolve(pathProject, "src", "index.js"), indexTemplate.web);
        console.log("--------------------- CREATE FILE src/index.js PROJECT -----------------------");

        let commandShell = `cd ${pathProject} && npm init -y && npm i -P express body-parser ejs dotenv `
        process.exec(commandShell, (error) => {
            if (error) console.log(error);
            console.log("--------------------- FINISHED CREATION PROJECT -----------------------");
        });
    }
}

module.exports = CreateProjectApiCommand;