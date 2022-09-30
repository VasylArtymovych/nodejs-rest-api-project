const express = require("express");
const { hlps } = require("../../helpers");
const { auth: ctrl } = require("../../controllers");
const { auth, validation } = require("../../middlewares");
const { userJoiSchema } = require("../../schemas");

const router = express.Router();

router.post(
  "/register",
  validation(userJoiSchema.userSchema),
  hlps.ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validation(userJoiSchema.userSchema),
  hlps.ctrlWrapper(ctrl.login)
);

router.post("/logout", auth, hlps.ctrlWrapper(ctrl.logout));

module.exports = router;
