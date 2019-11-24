const fs = require("fs");

module.exports = {

    createFile(path, content = "") {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, content, (error) => {
                if (error) reject(error);
                resolve();
            })  
        });
    },

    createDirectory(path) {
        return new Promise((resolve, reject) => {
            fs.mkdir(path, (error) => {
                if (error) reject(error);
                resolve();
            });
        });
    }
}