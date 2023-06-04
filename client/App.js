// ************* testing api calling and database calls ************
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(express.json())
const cors = require("cors");
app.use(cors());
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

// REgister a user to the db
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

// Login a user
app.post("/login", async(req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) {
        return res.json({ error: "User Not Found"});
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({email:user.email }, JWT_SECRET);

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
        const user = jwt.verify(token, JWT_SECRET);
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



