const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Admin = require('./models/adminModel'); 

async function createAdmin() {
  try {
    const plainPassword = 'musabadmin1234'; // Set the plain password for the admin here
    // const saltRounds = 10;

    // const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    const adminUser = new Admin({
      email: 'musabadmin1@gmail.com', 
      password: plainPassword,
    });

    const savedAdmin = await adminUser.save();
    console.log('Admin user created:', savedAdmin);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
}

const connectDataBase = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to MongoDB successfully`);
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = connectDataBase;
