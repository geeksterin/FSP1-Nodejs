const express = require("express");
const db = require("./database");
const StudentModel = require("./student");
const app = express();
app.use(express.json());

db();

app.get("/", (req, res) => {
  res.status(200).send("<h1>hello wolrd</h1>");
});

app.post("/", (req, res) => {
  const { name, phone } = req.body;
  console.log(name, phone);
  StudentModel.create({ name, phone })
    .then((user) => {
      console.log(user);
      res.status(200).send({ message: "data is stored" });
      return;
    })
    .catch((error) => {
      res.status(500).send({ message: "failed" });
      console.log(error);
      return;
    });
});

app.listen(3500, () => {
  console.log("server is up on http://localhost:3500");
});
