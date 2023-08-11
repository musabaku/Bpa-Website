const express = require('express');
const {
  adminLogin,logout
} = require('../controllers/AdminController.js');
const router = express.Router();


router.route("/login").post(adminLogin)
router.route("/logout").get(logout)

module.exports = router;
