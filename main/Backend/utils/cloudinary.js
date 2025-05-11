import { v2 as cloudinary } from "cloudinary";

const cloudinaryuplaod = (async function () {
  cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret, 
  });

  const uploadFile = async (filepath) => {
    try {
    const uploadResult = await cloudinary.uploader.upload(filepath)
  } catch (error) {
    console.log(error)
    return res.status(500).json({error:"Internal serve error while uploading image"})
  }
  }

  console.log(uploadResult);
});


export default cloudinaryuplaod