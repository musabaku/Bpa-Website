const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Admin = require("../models/adminModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const sendToken = require("../utils/sendToken.js");

exports.adminLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  console.log('Login request:', email, password); 
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  try {
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      return next(new ErrorHandler("Please Enter Correct Email and Password", 400));
    }

    // const isPasswordMatch = await admin.comparePassword(password);
    // console.log(isPasswordMatch)
    // if (!isPasswordMatch) {
    //   console.log("Please Enter Email and Password3");
    //   return next(new ErrorHandler("Invalid Email or Password", 400));
    // }

    sendToken(admin, 200, res);
  } catch (error) {
    console.log("Error during login:", error);
    return next(new ErrorHandler("Something went wrong during login", 500));
  }
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    return next(new ErrorHandler("Error during logout", 500));
  }
});