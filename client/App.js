// ************* backend calls to the database, handling authentication and login ************
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(express.json())
const cors = require("cors");
app.use(cors());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));

var nodemailer = require("nodemailer");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "fhihfiuehfiuhi3hiuuhuih43iu4i34i3niuuhufei394y3";

//connect to the MongoDB database
const mongoUrl= "mongodb+srv://rlzayas:slug@user.ib9dc8m.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser: true
}).then(()=>{console.log("connected to db");})
.catch(e=>console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

// REgister api 
app.post("/register", async(req,res)=>{
    const {fname, lname, email, password} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldUser= await User.findOne({ email });
        if(oldUser){
            return res.send({ error: "User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({status:"ok"}); 
    } catch (error) {
        res.send({status:"error"});
    }
});

// Login a user api
app.post("/login", async(req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) {
        return res.json({ error: "User Not Found"});
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({email:user.email }, JWT_SECRET,{
            expiresIn: "5m", //token will expire after 15 minutes

        });

        // 201 meens accepted
        if(res.status(201)){
            return res.json({ status: "ok", data: token});
        } 
        else{
            return res.json({ error: "error"});
        }
    }
    res.json({status:"error", error: "Invalid Login"});
});

// fetch data for user from api
app.post("/userDetails", async(req,res)=>{
    const {token} = req.body;
    try{
        // Checks login token of user and timesout after expiration
        const user = jwt.verify(token, JWT_SECRET, (err,res)=> {
            if(err) {
                return "token expired";
            }
            return res;
        });
        
        if(user=="token expired") { //check expiration of token
            return res.send({ status: "error", data: "token expired"});
           

        }

        const useremail = user.email;
        User.findOne({ email: useremail})
        .then((data) => {
            res.send({ status: "ok", data: data});
        })
        .catch((error) => {
            res.send({ status: "error", data: data});
        });

    }catch(error){

    }
});

app.listen(8000,() =>{
    console.log("Server Started");
});


// forgot password api
app.post("/forgot-password", async(req,res)=>{
    const{email}=req.body;

    try{
        // check if the user exists or not
        const oldUser = await User.findOne({ email });
        if(!oldUser) {
            return res.json({status: "User Does Not Exist"});
        }

        const secret = JWT_SECRET + oldUser.password;
        const token = jwt.sign({ email: oldUser.email, id:oldUser._id},secret, {
            expiresIn: "5m",
        });
        const link = `http://localhost:8000/reset-password/${oldUser._id}/${token}`;

        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "slugeventstest@gmail.com",
              pass: "fezbaqvicdfkltqw",
            },
          });
      
          var mailOptions = {
            from: "youremail@gmail.com",
            to: email,
            subject: "Slug Events Password Reset",
            text: "Click Link to Reset Password: " + link,
          };
      
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

        console.log(link);
        res.send({status:"success", data:data});
    }catch (error){

    }
});

// api to check if id and token are proper
app.get('/reset-password/:id/:token', async(req,res) => {
    const {id, token} = req.params;
    console.log(req.params);
    // check if the user exists or not
    const oldUser = await User.findOne({ _id:id });
    if(!oldUser) {
        return res.json({status: "User Does Not Exist"});
    }
    const secret = JWT_SECRET + oldUser.password;
    // Verify user who has link has same token
    try {
        const verify = jwt.verify(token, secret);
        res.render("index", { email: verify.email, status:"Not Verified"}); //access email that was verified in jwt token
        // res.send("verified");

    }catch (error) {
        console.log(error)
        res.send("Not Verified");

    }

});

// 
app.post('/reset-password/:id/:token', async(req,res) => {
    const {id, token} = req.params;
    const { password } = req.body;
    // check if the user exists or not
    const oldUser = await User.findOne({ _id:id });
    if(!oldUser) {
        return res.json({status: "User Does Not Exist"});
    }
    const secret = JWT_SECRET + oldUser.password;
    // Verify user who has link has same token
    try {
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne(
            {
                _id:id,
            },
            {
                $set: {
                    password: encryptedPassword,
                }
            }
        );
        
        // res.json({status: "Password Updated" });
        res.render("index", { email: verify.email, status: "verified"});

    }catch (error) {
        console.log(error)
        res.json({status: "Something Went Wrong"});

    }

});

// api call to server and get response
// app.post("/post", async(req,res)=>{
//     console.log(req.body);
//     const {data}=req.body;

//     try{
//         if (data=="rlzayas") {
//             res.send({status:"ok"});
//         }
//         else {
//             res.send({status:"user not found"});
//         }
//     } catch (error) {
//         res.send({status:"Something went wrong, try again"});
//     }
    
// });



