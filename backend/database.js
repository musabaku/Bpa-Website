const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Admin = require('./models/adminModel'); // Make sure to import the Admin model from your adminModel.js file

async function createAdmin() {
  try {
    const plainPassword = 'musabadmin1234'; // Set the plain password for the admin here
    // const saltRounds = 10;

    // const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Create the admin user object
    const adminUser = new Admin({
      email: 'musabadmin1@gmail.com', // Replace with the admin's email
      password: plainPassword,
    });

    // Save the admin user object to the database
    const savedAdmin = await adminUser.save();
    console.log('Admin user created:', savedAdmin);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    // Close the MongoDB connection after creating the admin user
    mongoose.connection.close();
  }
}

const connectDataBase = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to MongoDB successfully`);
    // createAdmin();
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = connectDataBase;
