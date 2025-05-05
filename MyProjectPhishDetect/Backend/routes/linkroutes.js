import express from "express"
import Link from "../models/link.model"

const router = express.Router()

// WORK FLOW

// Check url entered or not
// if not entered then show error(currently not usinf apieroor file)
// if url entered and exist in db thenn show result
// if url enterd is not in db then we will analyze wil ml model and then save in db

router.post("/check-link", async(req,res)=>{
    if(!url){
        return res.status(400).json({error:"Url is required"})
    }
    try {
        let link = await Link.findOne({url})
        if (link) {
            return res.status(200).json({url,result:link.result,checkedAt:link.checkedAt})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
})

export default router