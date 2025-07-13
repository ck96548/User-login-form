const User = require("../models/user.model");

const createUser = async (body) => {
    try {
        const newUser = {
             fullName: body.fullName, // <-- use fullName
            email: body.email,
            mobile: body.mobile,
            dateOfBirth: body.dateOfBirth,
            address: {
                line1: body.address?.line1,
                line2: body.address?.line2,
                city: body.address?.city,
                state: body.address?.state,
                pincode: body.address?.pincode
            },
            idNumber: body.idNumber,
            password: body.password,
            isEmailVerified: body.isEmailVerified || false,
            isMobileVerified: body.isMobileVerified || false,
            otp: body.otp || { code: null, expiresAt: null },
            createdAt: new Date(),
            updatedAt: new Date()
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
module.exports = {
    createUser,
    returnAllusers
}