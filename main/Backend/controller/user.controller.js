import User from "../models/user.model.js"
import mongoose from "mongoose"


const registerUser = async () => {
    const {email,username,password} = req.body

    const existedUser = await User.findById({
        $or:[{username,email}]
    })

    if (existedUser) {
        return res.status(400).json({error:"User already exist"})
    }

    const newUser = await User.create({
        username,
        email,
        password
    })

    const createdUser = await User.findById(User._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        return res.status(400).json({error:"Something went wrong while creating user."})
    }

    return res.status(200).json(createdUser,"User registered successfully!")
}

const loginUser = async (req,res) => {
    const {username,email} = req.body

    if(!(username || email)){
        return res.status(400).json({error:"Some data are missing."})
    }

    const user = await User.findOne({
        $or:[{username,email}]
    })
}

export default {
    registerUser,
    loginUser
}