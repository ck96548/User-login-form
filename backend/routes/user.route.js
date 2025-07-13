const express = require("express");
const UserRouter = express.Router();

const {userSignup,getAllUsers} = require("../controllers/user.controller");


UserRouter.post("/users", userSignup);
UserRouter.get("/users", getAllUsers); // Assuming you have a function to get all users

module.exports = UserRouter;