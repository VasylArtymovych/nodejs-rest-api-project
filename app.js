const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { unknownRouterHandler, errorHandler } = require("./helpers/apiHelpers");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use(unknownRouterHandler);

app.use(errorHandler);

module.exports = app;
