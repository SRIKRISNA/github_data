//my start file
const express = require('express');
// const ejs = require('ejs');
const mongoose = require('mongoose');
const github = require('github-profile')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//ejs setup
app.set("view engine", 'ejs');

//db
// mongoose.connect("mongodb://localhost:27017/githubData").then(()=>{
//     console.log("db connected");
// });

//port connection with server
app.listen(5000, ()=> {
    console.log("server connected on 5000");
})

// github('krishna333sp@gmail.com').then((profile) => {
//     console.log(profile);
// })
app.get("/", (req,res) =>{
    res.render('index', {profile:''});
})
app.post("/getinfo", (req,res) =>{
    github(req.body.email).then((profile) => {
        console.log(profile);
        res.render('index', {profile:profile})
    })
})