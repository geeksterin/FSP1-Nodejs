const express = require("express");
const router = express.Router();
const BookFinderController = require("../Controller/BookFinderController");
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/UserModel");

router.get("/",(req,res,next)=>{
    const {accessToken} = req.cookies;
    if(!accessToken) res.status(400).send({"message":"not sign in"})
    console.log(accessToken);
    let payload;
    try {
        payload = jwt.verify(accessToken,"salt");
    } catch (error) {
        res.status(400).send({"message":"sign in"})
    }
    
    const {_id} = payload;
    console.log(_id);
    UserModel.findOne({_id}).then(user=>{
        if(user)
        {
            next();
        }else{
            res.status(400).send({"message":"sign in"})
        }

        
    }).catch(error=>{
        res.status(400).send({"message":"sign in"})
    })

    

},BookFinderController.getAllBooks);

router.get("/morethanonecount",BookFinderController.getAllBooksWithCountgreaterThanOne);

router.get("/isbn/:isbn",BookFinderController.getBookUsingIsbn);

router.get("/deletebooks",BookFinderController.reduceBookCount);

router.get("/author/:author",BookFinderController.getAllBooksWrittenByAuthor);

module.exports = router;

// url/get /
// url/get /morethanonecount