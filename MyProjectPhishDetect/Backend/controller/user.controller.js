import User from "../models/user.model"

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

export default {
    registerUser
}