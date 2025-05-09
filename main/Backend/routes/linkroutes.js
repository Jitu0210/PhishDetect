import express from "express";
import Link from "../models/link.model.js";

const router = express.Router();

// Check for url enterd oe not 
router.post("/check-link", async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "Url is required" });
    }

    try {
        let link = await Link.findOne({ url });

        if (link) {
            // If link exists in DB
            return res.status(200).json({ url, result: link.result, checkedAt: link.checkedAt });
        }

        // If link does not exist, analyze it with ML model
        const analyzedResult = "Analysis result from ML model"; // Replace with actual ML logic

        // Save new link to DB
        link = new Link({ url, result: analyzedResult, checkedAt: new Date() });
        await link.save();

        return res.status(201).json({ url, result: analyzedResult, checkedAt: link.checkedAt });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
