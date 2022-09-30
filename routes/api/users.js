const express = require("express");
const { hlps } = require("../../helpers");
const { users: ctrl } = require("../../controllers");
const { auth, validation, upload } = require("../../middlewares");
const { userJoiSchema } = require("../../schemas");

const router = express.Router();

router.get("/current", auth, hlps.ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  validation(userJoiSchema.subscriptionSchema),
  auth,
  hlps.ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  hlps.ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", hlps.ctrlWrapper(ctrl.verify));

module.exports = router;
