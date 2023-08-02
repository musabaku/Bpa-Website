const express = require('express');
const {
  getAllProperty,
  createProperty,
  getPropertyDetails,
  updateProperty,
  deleteProperty,
} = require('../controllers/propertyController.js');
const  isAuthenticated  = require('../middlewares/auth');

const router = express.Router();

router.route('/property').get(getAllProperty);
// router.route('/admin/property/new').post(isAuthenticated, createProperty);

router.route('/property/new').post(createProperty);
router
  .route('/property/:id')
  .put( updateProperty)
  .delete(deleteProperty);
// router
//   .route('/admin/property/:id')
//   .put(isAuthenticated, updateProperty)
//   .delete(isAuthenticated, deleteProperty);
router.route('/property/:id').get(getPropertyDetails);
module.exports = router;
