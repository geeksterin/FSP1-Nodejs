const express = require("express");
const app = express();
app.use(express.json());
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Upload");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({
  storage,
}).any();

// const storage1 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "Upload/image");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.fieldname}-${Math.random()}.jpg`);
//   },
// });

// const upload1 = multer({
//   storage1,
// }).single("file");

// const storage2 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "Upload/gifs");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.fieldname}-${Math.random()}.gif`);
//   },
// });

// const upload2 = multer({
//   storage2,
// }).single("file");

app.post("/jpg", upload, (req, res) => {
  console.log(req.file);
  res.status(200).send({ message: "File uploaded" });
});
// app.post("/gif", upload2, (req, res) => {
//   res.status(200).send({ message: "File uploaded" });
// });

app.listen(3500, () => {
  console.log(`server is up on http://localhost:3500`);
});
