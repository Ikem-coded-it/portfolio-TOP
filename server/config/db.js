require('dotenv').config();
const mongoose = require('mongoose');

module.exports = connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message)
  }
}