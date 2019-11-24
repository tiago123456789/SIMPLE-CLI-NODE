module.exports = {
    api: `
        const express = require("express");
        const bodyParser = require("body-parser");
        const app = express();
        
        // Settings middleware to parse datas in json.
        app.use(bodyParser.json());
        
        app.listen(3000, () => console.log("Starting server in port: 3000"));
    `,
    web: `
        const express = require("express");
        const bodyParser = require("body-parser");
        const app = express();
        
        /**
         * @description Settings template engine and where directory views.
         */
        app.set("views", path.join(__dirname, "/views"))   
        app.set("view engine", "ejs");
        
        // Settings directory public with directory of assests.
        app.use(express.static(__dirname + '../public'));
        
        
        /**
         * @description Set middleware to parser datas form to json.
         */
        app.use(bodyParser.urlencoded({ extended: true }));
        
        app.listen(3000, () => console.log("Starting server in port: 3000"));
    `
}