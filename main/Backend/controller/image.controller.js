import Image from "../models/image.model.js"
import cloudinaryuplaod from "../utils/cloudinary.js"
import upload from "../middlewares/multer.js"

const imageUpload = async (req,res) => {
    
    if(!req.filepath){
        return res.status(400).json({error:"No file uploaded"})
    }

    return res.status(200).json({
        message:"File uploaded successfully.",
        fileUrl:req.filepath
    })
}

export default imageUpload