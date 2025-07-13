const mongoose = require("mongoose");
require('dotenv').config()
// Use the new connection string with database name and options
const DB_URL = process.env.DB_URL  // Default to Atlas if no env var

async function connectToDb() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connectToDb;
