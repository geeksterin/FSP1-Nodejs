const Book = require("../Model/BookModel");

class BookFinder
{
   async getAllBooks(req,res)
    {
        try {
            const books = await Book.find();
            console.log(books);
            res.status(200).send({books});
            
        } catch (error) {
            res.status(500).send({ mesage: "failed to get all the books" })
        }

    }

   async getAllBooksWithCountgreaterThanOne(req,res)
    {
        try {

            const books = await Book.find({ count: { $gte: 1 } });
            res.status(200).send({ books });
            
        } catch (error) {
            res.status(500).send({ mesage: "failed to get all the books" });
        }
        
    }

    async getBookUsingIsbn(req,res)
    {
        const isbn = req.params.isbn;
        console.log(isbn);
        try {
            const books = await Book.find({ isbn });
            res.status(200).send({ books});
        } catch (error) {
            res.status(500).send({ mesage: "failed to get all the books" });
        }
        
    }

    async reduceBookCount(req,res)
    {
        const { isbn, count } = req.body;
        console.log(isbn, count);
        try {

            const data = await Book.findOne({ isbn });
            if(!data)
            {
                if (!data) {
                    res
                      .status(404)
                      .send({ message: "this book is not present in database" });
                  } else {
                    data.count = Math.max(0, data.count - count);
                    await data.save();
                  }
            }
            
        } catch (error) {
            res.status(500).send({ message: "did not performed" });
        }
        
    }

   async getAllBooksWrittenByAuthor(req,res)
    {
        try {
            const author = req.params.author;
            const data = await Book.find();
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
        } catch (error) {
            res.status(500).send({ message: "did not performed" });
        }
       
        
    }


}

module.exports = new BookFinder();