const mongoose = require('mongoose');
const { Schema } = require("mongoose");


const userSchema = new Schema({
   fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  mobile: {
    type: String,
    required: true,

  },
  dateOfBirth: {
    type: Date,
  },
  // address: {
  //   line1: String,
  //   line2: String,
  //   city: String,
  //   state: String,
  //   pincode: String
  // },
  idNumber: {
    type: String,
    required: true // Aadhaar or PAN
  },
  // password: {
  //   type: String // Can be empty if using OTP-only auth
  // },
  // isEmailVerified: {
  //   type: Boolean,
  //   default: false
  // },
  // isMobileVerified: {
  //   type: Boolean,
  //   default: false
  // },
  // otp: {
  //   code: String,
  //   expiresAt: Date
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // },
  // updatedAt: Date

})

module.exports = mongoose.model("User", userSchema);
