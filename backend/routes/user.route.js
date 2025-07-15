const express = require("express");
const UserRouter = express.Router();

const {userSignup,getAllUsers,deleteUser, getUserByid,updateUserByid} = require("../controllers/user.controller");


UserRouter.post("/user", userSignup);
UserRouter.get("/user", getAllUsers);
UserRouter.delete("/user",deleteUser)
//UserRouter.get("/userByid",getUserByid) // Assuming you have a function to get all users
UserRouter.put("/user", updateUserByid); // Assuming you have a function to update user by ID

module.exports = UserRouter;