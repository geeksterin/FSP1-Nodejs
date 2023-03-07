const Book = require("../Model/BookModel");
class PostBookController
{
    postASingleBook(req,res)
    {
        const {isbn,name,authors,count} = req.body; 
        Book.findOne({isbn})
        .then((data)=>{
          if(!data)
          {
            Book.create({isbn,name,authors,count})
            .then((book)=>{
              res.status(200).send({"message":"Books added",book});
            })
            
          }
          else
          {
            data.count+=count;
            data.save().then((book)=>{
              res.status(200).send({"message":"Books added",book})
            })
          }
        }).catch((error)=>{
          res.status(500).send({"message":"Try again latter"});
        })
    }
    postMultipleBooks(req,res)
    {
        const {books} = req.body;
  
      try {
        for(let book of books)
        {
          Book.findOne({isbn:book.isbn})
          .then((data)=>{
            if(!data)
            {
              Book.create({isbn:book.isbn,name:book.name,authors:book.authors,count:book.count})
              .then((newCreatedBook)=>{
                ///
              })
            }
            else
            { 
              data.count+=book.count;
              data.save().then((b)=>{
              })
            }
          })
        }
        res.status(200).send({"message":"Books added",books});
      } catch (error) {
        res.status(500).send({"message":"Try again latter"});
      }
  
    }


}

module.exports = new PostBookController();