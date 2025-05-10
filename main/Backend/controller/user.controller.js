import User from "../models/user.model.js";
import mongoose from "mongoose";

const generateAccessandRefreshToken = async () => {
  try {
    const user = await User.findById(User._id);
    const accesstoken = user.generateAccessToken();
    const refreshtoken = user.generateRefreshToken();

    user.refreshtoken = refreshtoken;
    await user.save({ validateBeforeSave: false });

    return { accesstoken, refreshtoken };
  } catch (error) {
    console.log(error, "Something went worng while generating tokens.");
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existedUser = await User.findOne({
      $or: [{ username, email }],
    });

    if (existedUser) {
      return res.status(400).json({ error: "User already exist" });
    }

    // create a new instance of User
    const newUser = await User.create({
      username,
      email,
      password,
    });

    const createdUser = await User.findById(newUser._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res
        .status(400)
        .json({ error: "Something went wrong while creating user." });
    }

    return res.status(200).json(createdUser, "User registered successfully!");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}; // wroking fine :)

const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username && !email) {
      return res.status(400).json({ error: "Username or email is required." });
    }
    if (!password) {
      return res.status(400).json({ error: "Password is required." });
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password." });
    }

    const { accessToken, refreshToken } =
      await generateAccessandRefreshToken(user._id);

    // Return tokens and user data
    return res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};


export { 
    registerUser,
    loginUser
 };
