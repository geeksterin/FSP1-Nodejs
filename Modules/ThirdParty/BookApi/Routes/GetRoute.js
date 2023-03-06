const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Book.find()
    .then((data) => {
      console.log(data);
      res.status(200).send({ books: data });
    })
    .catch((err) => {
      res.status(500).send({ mesage: "failed to get all the books" });
    });
});

router.get("/morethanonecount", (req, res) => {
  Book.find({ count: { $gte: 1 } })
    .then((data) => {
      res.status(200).send({ books: data });
    })
    .catch((err) => {
      res.status(500).send({ mesage: "failed to get all the books" });
    });
});

router.get("/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  console.log(isbn);
  Book.find({ isbn })
    .then((data) => {
      console.log(data);
      res.status(200).send({ book: data });
    })
    .catch((error) => {
      res.status(500).send({ mesage: "failed to get all the books" });
    });
});

router.get("/deletebooks", (req, res) => {
  const { isbn, count } = req.body;
  console.log(isbn, count);
  Book.findOne({ isbn })
    .then((data) => {
      console.log(data);
      if (!data) {
        res
          .status(404)
          .send({ message: "this book is not present in database" });
      } else {
        data.count = Math.max(0, data.count - count);
        /**
         * book = {isbn,name,authors,count:3}
         * book.count -=count;
         * if(book.count<0)
         * {
         * book.count = 0;
         * }
         *
         *
         */

        data.save().then(() => {
          res.status(200).send({ message: "count decremented" });
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "did not performed" });
    });
});

router.get("/author/:author", (req, res) => {
  const author = req.params.author;
  Book.find().then((data) => {
    const books = [];
    for (let book of data) {
      const authors = book.authors;
      for (let authorOfThidBook of authors) {
        if (author === authorOfThidBook) {
          books.push(book);
        }
      }
    }

    res.status(200).send({ books });
  });
});

module.exports = router;
