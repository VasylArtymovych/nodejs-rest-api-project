const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { hlps } = require("./helpers");
const { contactsRouter, userRouter, authRouter } = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.use(hlps.unknownRouteHandler);
app.use(hlps.errorHandler);

module.exports = app;
