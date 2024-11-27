const express = require("express");
const { handelPostData, handleGetJsonData } = require("../Controllers/user.js");
const {
  dealerRegisterationHandeler,
  logindealers,
} = require("../Controllers/dealer.js");
// const {
//   registrationSchema,
//   loginSchema,
// } = require("../validators/dealervalidate.js");
// const validate = require("../Middleware/dealervalidates.js");

const router = express.Router();

router.post("/dealerships", handelPostData);
router.get("/api", handleGetJsonData);
router.post("/dealerregistration", dealerRegisterationHandeler);
router.post("/dealerlogin", logindealers);

// router.post(
//   "/dealerregistration",
//   validate(registrationSchema),
//   dealerRegisterationHandeler
// );
// router.post("/dealerlogin", validate(loginSchema), logindealers);

module.exports = router;
