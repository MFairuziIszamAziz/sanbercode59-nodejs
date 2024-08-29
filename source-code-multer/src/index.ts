import express, { Request, Response } from "express";
import { singleUpload, multipleUpload } from "./middlewares/upload.middleware";
import cloudinary from "./utils/cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import path from "path";

const PORT = 3000;

function init() {
  const app = express();

  app.use(express.static(path.join(__dirname, "uploads"))); // Serve static files from 'uploads' folder

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // Rute untuk upload file satuan
  app.post("/upload/single", singleUpload, (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ status: 400, message: "No file uploaded" });
    }
    res.status(200).json({
      status: 200,
      message: "File uploaded successfully",
      file: req.file,
    });
  });

  // Rute untuk upload beberapa file
  app.post(
    "/upload/multiple",
    multipleUpload,
    (req: Request, res: Response) => {
      if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
        return res
          .status(400)
          .json({ status: 400, message: "No files uploaded" });
      }
      res.status(200).json({
        status: 200,
        message: "Files uploaded successfully",
        files: req.files,
      });
    }
  );

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
