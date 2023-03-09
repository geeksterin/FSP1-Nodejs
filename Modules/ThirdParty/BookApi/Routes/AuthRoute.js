const router = require("express").Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/UserModel");


router.post("/signup",(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password) res.status(400).send({"message":"all fields are required"});
    UserModel.findOne({email}).then((user)=>{
        if(user)
        {
            res.status(400).send({"message":"email is already signedup"})
        }
        else
        {
            UserModel.create({name,email,password}).then(()=>{
                res.status(200).send({"message":"signed up"});
            })
        }
    }).catch((error)=>{
        res.status(500).send({"message":"try again"});
    })

})

router.post("/signin",(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) res.status(400).send({"message":"all fields are required"});
    UserModel.findOne({email}).then((user)=>{
        if(user)
        {
            if(user.password===password)
            {
                //1) create the accessToken,using jwt
                //2) store this thing into a cookie,
                //3) send the cookie to frontend.
                const accessToken = jwt.sign({
                    _id:user._id
                },"salt",{
                    expiresIn:"24h"
                });

                // console.log(accessToken);
                res.cookie("accessToken",accessToken,{
                    httpOnly:true,
                    maxAge:60*60*1000

                })
                res.status(200).send({"message":"sign in succesfull",user});

            }
            else
            {
                res.status(400).send({"message":"email or password is not matching"});
            }
            
        }
        else
        {
            res.status(400).send({"message":"email or password is not matching"});
        }
        
    }).catch((error)=>{
        res.status(500).send({"message":"try again"});
    })


})


module.exports = router;