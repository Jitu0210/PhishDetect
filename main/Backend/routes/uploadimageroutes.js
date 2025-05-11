import express from "express"
import imageUpload from "../controller/image.controller.js"

const router = express.Router()

router.route("/upload-image").post(imageUpload)

export default router