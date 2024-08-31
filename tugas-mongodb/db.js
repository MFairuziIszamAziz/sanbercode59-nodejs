import mongoose from "mongoose";

// Ganti dengan URL MongoDB Anda
const url = "";

const connectDB = async () => {
  try {
    await mongoose.connect(url); // Opsi sudah tidak diperlukan
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;
