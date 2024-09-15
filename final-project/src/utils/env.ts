import dotenv from "dotenv";
dotenv.config();

export const CLOUDINARY_API_KEY: string =
  process.env.CLOUDINARY_API_KEY || "993381228595143";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "lH9MGJZxAe_YjIE1MBYSRD8Qoy4";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "dryvld9k0";
export const DATABASE_URL: string = "mongodb://localhost:27017/";
export const SECRET: string =
  process.env.SECRET || "457642c3f791fdfb2a33e56f85cc9c17";
