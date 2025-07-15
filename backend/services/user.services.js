const User = require("../models/user.model");

const createUser = async (body) => {
    try {
        const newUser = {
             fullName: body.fullName, // <-- use fullName
            email: body.email,
            mobile: body.mobile,
            dateOfBirth: body.dateOfBirth,
            idNumber: body.idNumber
        }
        const createdUser = await User.create(newUser);
        return createdUser;
    } catch (err) {
        console.error("Error during user signup:", err);
        throw err; // Throw error to controller for proper handling
    }
}

const returnAllusers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.error("Error fetching users:", err);
    }
}

const deleteByid = async (userId) => {
    try {
        const user = await User.findOneAndDelete({ _id: userId });
        if (!user) {
            throw new Error("User not found");
        }       
        return user;
    } catch (err) {     
        console.error("Error deleting user:", err);
        throw err; // Throw error to controller for proper handling
    }
}

const returnUserByid = async (userId) => {
    try {
       const user = await User.findById(userId); // Pass only the ID
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }catch (err) {
        console.error("Error fetching user by ID:", err);
        throw err; // Throw error to controller for proper handling
    }
}

const updateUsers = async (userId, updateData) => {
    try{
        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            throw new Error("User not found");
        }
        return user;

    }catch (err) {
        console.error("Error updating user:", err);
        throw err; // Throw error to controller for proper handling
    }
}

module.exports = {
    createUser,
    returnAllusers,
    deleteByid,
    returnUserByid,
    updateUsers
}