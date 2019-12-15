const dbConnector = require("./config/database");
const express = require("express");
const cookieParser = require("cookie-parser");
const { envConfig, cookieSecret } = require("./config/app-config");
const app = express();
const { clientErrorHandler } = require("./config/helpers");
const router = require("./config/routes");
const cors = require("cors");

dbConnector().then(() => {

    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true
    }))

    app.use(express.urlencoded({ extended: true }));

    app.use(cookieParser(cookieSecret));

    app.use("/", router);

    app.listen(envConfig.port, console.log(`Listening on port ${envConfig.port}...`));
}).catch(error => clientErrorHandler(res, null, error, { user: req.user }));