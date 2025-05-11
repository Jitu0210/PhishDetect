import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    file:{
        type:String,
        require:true
    }
},{timestamps:true})


const Image = mongoose.model("Image",imageSchema)

export default Image