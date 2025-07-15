const User = require("../models/user.model");
const {createUser,returnAllusers,deleteByid,returnUserByid,updateUsers} = require("../services/user.services");


const userSignup = async (req,res)=>{

  try{
    const response = await createUser(req.body);
    res.status(201).json({
      message: "User created successfully", 
      response: response
    })
  }catch(err){
    console.error("Error during user signup:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
  

}

const getAllUsers = async (req, res) => {
    try {
        const userId = req.query.id;
        if(userId){
            const user = await returnUserByid(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            console.log(user); // Log the user object
            return res.status(200).json({ message: "User fetched successfully", user });
        } // Get userId from query parameters
        const users = await returnAllusers(); // Await the promise
        res.status(200).json({
            users,
            customHeader: req.headers['custom-header']
        }); // Use 200 for successful GET
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUserByid = async (req, res) => {
    try {
        const userId = req.query.id; // Get userId from query parameters
        const user = await returnUserByid(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(user); // Log the user object
         // Send the user object in the response
        res.status(201).json({ message: "User fetched successfully", user });
    } catch (err) {
        console.error("Error fetching user by ID:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const deleteUser = async (req, res) => {
    try{

        // define userId from params or query
        //const userId = req.params.id;
        // If you want to use query parameters instead of params 
        const userId = req.query.id;
        const user = await deleteByid(userId);
        res.send({
            message: "User deleted successfully",
            user: user
        });
    }catch (err) {
        console.error("Error fetching user ID:", err);
        return res.status(400).json({ message: "Invalid user ID" });
    }
    
  
}

const updateUserByid = async (req, res) => {
    try{
        const userId = req.query.id;
        const updateData = req.body;
        const user = await updateUsers(userId, updateData);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        res.status(200).json({ message: "User updated successfully", user });   

    }catch(err){
        console.error("Error updating user:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// const userLogin= async(req,res)=>{
//     res.send("User signed up ", );
// }

module.exports = {
    userSignup,
    getAllUsers,
    deleteUser,
    getUserByid,
    updateUserByid
   //
}