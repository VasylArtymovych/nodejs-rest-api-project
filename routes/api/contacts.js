const express = require("express");
const { hlps } = require("../../helpers");
const { contacts: ctrl } = require("../../controllers");
const { validateBody, auth, isValidId } = require("../../middlewares");
const { contactJoiSchema } = require("../../schemas");

const router = express.Router();

router.use(auth);

router.post(
  "/",
  validateBody(contactJoiSchema.contact),
  hlps.ctrlWrapper(ctrl.add)
);

router.get("/", hlps.ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, hlps.ctrlWrapper(ctrl.getById));

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactJoiSchema.contact),
  hlps.ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactJoiSchema.status),
  hlps.ctrlWrapper(ctrl.updateStatusById)
);

router.delete("/:contactId", isValidId, hlps.ctrlWrapper(ctrl.deleteById));

module.exports = router;
