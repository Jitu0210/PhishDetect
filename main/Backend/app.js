import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


connectDB();

const PORT = process.env.PORT || 8000;

import linkroutes from "./routes/linkroutes.js"
import userroutes from "./routes/userroutes.js"
import uploadimageroutes from "./routes/uploadimageroutes.js"

app.use("/api/v1/users", userroutes);
app.use("/api/v1/link", linkroutes);
app.use("/api/v1/image", uploadimageroutes);

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
