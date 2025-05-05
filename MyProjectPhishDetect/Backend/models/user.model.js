import mongoose from "mongoose";

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
},{timestamps})

const User = mongoose.model("User",userSchema)

export default userSchema