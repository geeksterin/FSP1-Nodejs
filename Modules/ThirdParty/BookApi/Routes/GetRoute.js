const express = require("express");
const router = express.Router();
const BookFinderController = require("../Controller/BookFinderController");


router.get("/",BookFinderController.getAllBooks);

router.get("/morethanonecount",BookFinderController.getAllBooksWithCountgreaterThanOne);

router.get("/isbn/:isbn",BookFinderController.getBookUsingIsbn);

router.get("/deletebooks",BookFinderController.reduceBookCount);

router.get("/author/:author",BookFinderController.getAllBooksWrittenByAuthor);

module.exports = router;

// url/get /
// url/get /morethanonecount