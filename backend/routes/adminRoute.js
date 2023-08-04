const express = require('express');
const {
  adminLogin
} = require('../controllers/AdminController.js');
const router = express.Router();


router.route("/login").post(adminLogin)

module.exports = router;
