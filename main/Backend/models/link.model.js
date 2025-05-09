import mongoose from "mongoose"

const linkSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    result:{
        type:String,
        required:true
    },
    checkedAt:{
        type:Date,
        default:Date.now
    }
})

const Link = mongoose.model("Link",linkSchema)

export default Link