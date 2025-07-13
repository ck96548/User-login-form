const User = require("../models/user.model");
const {createUser,returnAllusers} = require("../services/user.services");


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
        const users = await returnAllusers(); // Await the promise
        res.status(200).json(users); // Use 200 for successful GET
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// const userLogin= async(req,res)=>{
//     res.send("User signed up ", );
// }

module.exports = {
    userSignup,
    getAllUsers
   //
}