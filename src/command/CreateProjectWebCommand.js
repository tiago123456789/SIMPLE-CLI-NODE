const Command = require("./Command");
const file = require("./../File");
const path = require("path");
const process = require("child_process");
const indexTemplate = require("../template/main");

class CreateProjectApiCommand extends Command {

    async execute(args) {
        console.log("--------------------- INIT CREATION PROJECT -----------------------");
        const pathProject = path.resolve(args.path, args.projectName);
        await file.createDirectory(pathProject);
        await file.createDirectory(path.resolve(pathProject, "src"));
        console.log("* src");
        await file.createDirectory(path.resolve(pathProject, "src", "config"));
        console.log("* src/config");
        await file.createDirectory(path.resolve(pathProject, "src", "routes"));
        console.log("* src/routes");
        await file.createDirectory(path.resolve(pathProject, "src", "controllers"));
        console.log("* src/controllers");
        await file.createDirectory(path.resolve(pathProject, "src", "exceptions"));
        console.log("* src/exceptions");
        await file.createDirectory(path.resolve(pathProject, "src", "repositories"));
        console.log("* src/repositories");
        await file.createDirectory(path.resolve(pathProject, "src", "services"));
        console.log("* src/services");
        await file.createDirectory(path.resolve(pathProject, "src", "middlewares"));
        console.log("* src/middlewares");
        await file.createDirectory(path.resolve(pathProject, "src", "views"));
        console.log("* src/views");
        await file.createDirectory(path.resolve(pathProject, "public"));
        console.log("* public");
        await file.createFile(path.resolve(pathProject, "src", "index.js"), indexTemplate.web);
        console.log("--------------------- CREATE FILE src/index.js PROJECT -----------------------");

        let commandShell = `cd ${pathProject} && npm init -y && npm i -P express body-parser ejs dotenv mongoose `
        process.exec(commandShell, (error, output) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(output);
            console.log("--------------------- FINISHED CREATION PROJECT -----------------------");
        });
    }
}

module.exports = CreateProjectApiCommand;