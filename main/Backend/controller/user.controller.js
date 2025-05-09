import User from "../models/user.model.js"
import mongoose from "mongoose"

const generateAccessandRefreshToken = async () =>{
    
}

const registerUser = async (req,res) => {
    try {
        const {email,username,password} = req.body
    
        const existedUser = await User.findOne({
            $or:[{username,email}]
        })
    
        if (existedUser) {
            return res.status(400).json({error:"User already exist"})
        }
    
        // create a new instance of User
        const newUser = await User.create({
            username,
            email,
            password
        })
    
        const createdUser = await User.findById(newUser._id).select(
            "-password -refreshToken"
        )
    
        if (!createdUser) {
            return res.status(400).json({error:"Something went wrong while creating user."})
        }
    
        return res.status(200).json(createdUser,"User registered successfully!")
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
} // wroking fine :)

const loginUser = async (req,res) => {
    const {username,email} = req.body

    if(!(username || email)){
        return res.status(400).json({error:"Some data are missing."})
    }

    const user = await User.findOne({
        $or:[{username},{email}]
    })

    if (!user) {
        return res.status(400).json({error:"User not found"})
    }

    
}

export {
    registerUser,
    loginUser
}