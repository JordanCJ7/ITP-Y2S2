const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require ("multer");
const path = require("path")
const cors = require ("cors");

app.use(express.json());
app.use(cors());

//Databaseconnection
mongoose.connect("mongodb+srv://testsalon:dami1234@testsalon.uwzfg.mongodb.net/SalonPabaluITP");

app.listen(port,(error) =>{
    if(!error){
        console.log("Server Running on port" , port)

    }else{
        console.log("error:" + error)
    }
})