const express = require("express");
const router = express.Router();

const PostBookController = require("../Controller/PostBookController");

router.post("/",PostBookController.postASingleBook);
  
router.post("/addbooks",PostBookController.postMultipleBooks);
  

module.exports = router;