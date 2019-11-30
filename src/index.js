#!/usr/bin/env node

const arguments = require('yargs').argv;
const inquirer = require("inquirer");
const CreateProjectApiCommand = require("./command/CreateProjectApiCommand");
const CreateProjectWebCommand = require("./command/CreateProjectWebCommand");


(async function processCommand(args) {
    const optionsCommand = {
        api: new CreateProjectApiCommand(),
        web: new CreateProjectWebCommand()
    };
    const isExistOptionCommand = optionsCommand[args.type];
    if (isExistOptionCommand) {
        const answerProjectName = await inquirer.prompt({
            name: "projectName",
            message: "What's name project?"
        });

        const answerPath = await inquirer.prompt({
            name: "path",
            message: "What's path project where go created?"
        });

        await optionsCommand[args.type].execute({
            projectName: answerProjectName.projectName, path: answerPath.path
        });
        return;
    }
    console.log(`Options:
     --type=value | The values option are api or web | Example: --type=api or --type=web
    `);
})(arguments);


