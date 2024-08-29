import express, { Request, Response } from "express";
import fileUpload, { UploadedFile } from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import { error } from "console";

const PORT = 3000;

function init() {
  const app = express();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

  app.post("/upload", async (req, res) => {
    try {
      if (!req.files || !req.files.photo) {
        return res
          .status(400)
          .json({ status: 400, message: "Photo is Required" });
      }
      const photo = req.files.photo as UploadedFile;

      const result = await cloudinary.uploader.upload(photo.tempFilePath, {
        public_id: new Date().getTime().toString(),
      });

      res.json({ status: 200, message: "Succes", result });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Upload Failed", error });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
