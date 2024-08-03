require("dotenv").config();
const express = require("express");
const { storage } = require("./storage");
const multer = require("multer");
const path = require("path");
const upload = multer({ storage });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/upload", upload.single("image"), (req, res) => {
  const { image } = req.file;
  console.log(image);
  res.send("done");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
