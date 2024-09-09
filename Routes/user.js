const express = require("express");
const { handelPostData, handleGetJsonData } = require("../Controllers/user.js");

const router = express.Router();

// This route is now accessible at http://localhost:3001/contact
router.post("/dealerships", handelPostData);
router.get("/api", handleGetJsonData);

module.exports = router;
