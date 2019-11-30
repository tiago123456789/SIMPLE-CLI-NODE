module.exports = {
    api: `
        const handlerException = require("../middlewares/HandlerExceptionMiddleware");
        module.exports = (app) => {
        
            // Handler exception trigger to the application.
            app.use(handlerException);
        }
    `,
    web: `
        const handlerException = require("../middlewares/HandlerExceptionMiddleware");
        module.exports = (app) => {
        
            // Handler exception trigger to the application.
            app.use(handlerException);
        }
    `
}