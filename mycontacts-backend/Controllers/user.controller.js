const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();
const User = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc register users
// @route POST /api/users/register
// @access public

const registerUsers = async(req, res) =>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400).json({ message: "All fields are required"});
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400).json({message:"User already registered"});
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // create user
    const newUser = await User.create({
        username,
        email,
        password:hashedPassword
    });
    console.log(`User created ${newUser}`);
    if(newUser){
        res.status(201).json({_id: newUser.id , email: newUser.email});
    }else{
        res.status(400).json({ message: "User data is not valid" });
    }
};

// @desc login users
// @route POST /api/users/login
// @access public
const loginUser = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({ message: "All fields are required" });
    }
    
    // check if the user is already in the database
    const user = await User.findOne({ email });

    // compare password provided in login with password provided during signup
    if(user && (await bcrypt.compare(password, user.password))){
        // generate jwt 
        const token = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m"});
        res.status(200).json({token: token})
    }else{
        res.status(401).json({message: "Email or password is not valid"});
    }
};

// @desc current users info
// @route POST /api/users/current
// @access public
const currentUserInfo = async(req, res) => {
    await res.status(200).json({ message: "Current user information" })
};
 
module.exports = {registerUsers, loginUser, currentUserInfo};