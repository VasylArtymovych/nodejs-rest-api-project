const express = require("express");
const { hlps } = require("../../helpers");
const { auth: ctrl } = require("../../controllers");
const { auth, validateBody } = require("../../middlewares");
const { userJoiSchema } = require("../../schemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(userJoiSchema.userSchema),
  hlps.ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(userJoiSchema.userSchema),
  hlps.ctrlWrapper(ctrl.login)
);

router.post("/logout", auth, hlps.ctrlWrapper(ctrl.logout));

router.post(
  "/verify",
  validateBody(userJoiSchema.verifySchema),
  hlps.ctrlWrapper(ctrl.resendVerify)
);

router.get("/verify/:verificationToken", hlps.ctrlWrapper(ctrl.verify));

module.exports = router;
