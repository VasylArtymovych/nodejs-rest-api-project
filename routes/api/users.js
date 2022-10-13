const express = require("express");
const { hlps } = require("../../helpers");
const { users: ctrl } = require("../../controllers");
const { auth, validateBody, upload } = require("../../middlewares");
const { userJoiSchema } = require("../../schemas");

const router = express.Router();

router.post(
  "/verify",
  validateBody(userJoiSchema.verifySchema),
  hlps.ctrlWrapper(ctrl.reVerify)
);

router.get("/verify/:verificationToken", hlps.ctrlWrapper(ctrl.verify));

router.get("/current", auth, hlps.ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  validateBody(userJoiSchema.subscriptionSchema),
  auth,
  hlps.ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  hlps.ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;

// upload.single("avatar"), // single field with one file
// upload.array("avatar", 5),  // when is one field with few files
// upload.fields([{name: "avatar", maxCount: 1}, {name: "otherName", maxCount: 2}]),  // when is few fields with files
