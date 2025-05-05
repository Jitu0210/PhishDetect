import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyparser from "body-parser";
import connectDB from "./db/index.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyparser.json());

connectDB();

const PORT = process.env.PORT || 8000;

import linkroutes from './routes/linkroutes.js'
import userroutes from "./routes/userroutes.js"

app.use("/api/v1/users",userroutes)
app.use("/api/v1/link",linkroutes)

app.listen(PORT || 8000, () => {
  console.log(`server running at port : ${PORT}`);
});