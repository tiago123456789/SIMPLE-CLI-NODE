module.exports = {
    api: `
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express();
    const db = require("./Database");
    const routesApp = require("../routes");

    // Setting middleware make parse datas to json.
    app.use(bodyParser.json());

    // Setting routes application.
    routesApp(app);
        
    module.exports = app;
    `,
    web: `
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express();
    const db = require("./Database");
    const routesApp = require("../routes");
    
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
    
    // Setting routes application.
    routesApp(app);
        
    module.exports = app;
    `
}