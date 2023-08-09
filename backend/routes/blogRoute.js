const express = require('express');
const {
  getAllBlog,
  createBlog,
  getBlogDetails,
  updateBlog,
  deleteBlog,
  getAdminBlog,
} = require('../controllers/blogController.js');
const  isAuthenticated  = require("../middlewares/auth");

const router = express.Router();

router.route("/blog").get(getAllBlog)
router.route("/admin/blog/new").post(isAuthenticated,createBlog)
// router.route("/blog/new").post(createBlog)
router.route('/admin/blog').get(isAuthenticated, getAdminBlog);

router.route("/admin/blog/:id").put(isAuthenticated,updateBlog).delete(isAuthenticated,deleteBlog)

router.route("/blog/:id").get(getBlogDetails)

module.exports = router;
