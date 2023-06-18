const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/assignmentbackend',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, ()=>{
    console.log("connected");
});

//Routes
 app.post('/login',(req,res)=>{
    const {email,password } = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password)
            {
                res.send({mssg:"Login successful",user:user})
            }
            else{
                res.send({mssg:"Password didn't match"})
            }
        }
        else{
            res.send({mssg:"user not registered"})
        }
    })
 })

 app.post('/register',(req,res)=>{
    const {fname,lname, email,password } = req.body;
    User.findOne({email:email}, (err, user)=>{
        if(user){
            res.send({mssg:"user already registered"})
        }
        else{
            const user = new User({
                fname,
                lname,
                email,
                password
            })
            user.save( err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({ mssg:"Successfully Registered" })
                }
         })
        }
    })


 })

 const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String
 })

 const User = new mongoose.model("User", userSchema)
 

 app.listen(9002, ()=>{
    console.log("port starting");
 })
