const Command = require("./Command");
const process = require("child_process");

class CreatedProjectCommand extends Command {

    executedShellCommand(callbackSucess) {
        process.exec(this.getShellCommand(), (error, output) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(output);
            callbackSucess();
        });
    }

    getShellCommand() {
        throw new Error("Method not implemented!");
    }
}

module.exports = CreatedProjectCommand;