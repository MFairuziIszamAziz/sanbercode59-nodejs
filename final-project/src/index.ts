import express from "express";
import db from "./utils/database";
import routes from "./routes";
import bodyParser from "body-parser";
import docs from "./docs/routes"; // Pastikan path ini benar

const app = express();
const PORT = 3000;

db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Swagger docs sebelum rute API
docs(app);

// Setup rute API
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
