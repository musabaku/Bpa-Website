const jwt = require('jsonwebtoken');
const catchAsyncError = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const Admin = require('../models/adminModel');

const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
console.log(token)
  if (!token) {
    return next(new ErrorHandler('Login to access this page', 400));
  }

  const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Admin.findById(decodedPayload.id);

  next();
});

module.exports = isAuthenticated;
