import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL
        , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected with mongodb Atlas successfully...");
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
