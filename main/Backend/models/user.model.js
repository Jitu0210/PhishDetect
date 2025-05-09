import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User",userSchema)

export default User