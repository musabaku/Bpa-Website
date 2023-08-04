const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// adminSchema.methods.comparePassword = async function (enteredPassword) {
//   console.log('Entered Password:', enteredPassword); // Add this line for logging

//   try {
//     const isMatch = await bcrypt.compare(enteredPassword, this.password);
//     console.log('Is Match:', isMatch); // Add this line for logging
//     return isMatch;
//   } catch (error) {
//     console.log("Error during password comparison:", error); // Add this line for logging
//     return false;
//   }
// };

// adminSchema.pre('save', async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);

//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

adminSchema.methods.getJWTToken = function () {
  return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
module.exports = mongoose.model('Admin', adminSchema);
