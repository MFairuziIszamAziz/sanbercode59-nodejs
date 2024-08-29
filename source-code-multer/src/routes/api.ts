import express from "express";

import { singleUpload, multipleUpload } from "../middlewares/upload.middleware";

const router = express.Router();

router.get("/upload/single", singleUpload, (req, res) => {});
router.get("/upload/multiple", multipleUpload, (req, res) => {});

export default router;
