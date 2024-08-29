// src/upload.middleware.ts
import multer from "multer";
import path from "path";

// Konfigurasi storage multer untuk file yang disimpan di disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Menyimpan file di folder 'uploads'
  },
  filename: (req, file, cb) => {
    // Menyimpan nama file dengan timestamp
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Inisialisasi multer dengan konfigurasi storage
const upload = multer({ storage });

// Middleware untuk upload satu file
export const singleUpload = upload.single("file");

// Middleware untuk upload beberapa file
export const multipleUpload = upload.array("files", 10); // Maksimal 10 file
