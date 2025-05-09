import express from "express";
import {checkUrl , getLinkHistory} from "../controller/link.controller.js";


const router = express.Router();

router.route("/check-link").post(checkUrl)
router.route("/link-history").get(getLinkHistory)

export default router;
