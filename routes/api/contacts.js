const express = require("express");
const { hlps } = require("../../helpers");
const { contacts: ctrl } = require("../../controllers");
const { validation, auth } = require("../../middlewares");
const { contactJoiSchema } = require("../../schemas");

const router = express.Router();

router.use(auth);

router.get("/", hlps.ctrlWrapper(ctrl.getAll));

router.get("/:contactId", hlps.ctrlWrapper(ctrl.getById));

router.post(
  "/",
  validation(contactJoiSchema.contact),
  hlps.ctrlWrapper(ctrl.add)
);

router.delete("/:contactId", hlps.ctrlWrapper(ctrl.deleteById));

router.put(
  "/:contactId",
  validation(contactJoiSchema.contact),
  hlps.ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  validation(contactJoiSchema.status),
  hlps.ctrlWrapper(ctrl.updateStatusById)
);

module.exports = router;
