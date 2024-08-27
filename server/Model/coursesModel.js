const mongoose = require("mongoose");

const Course = mongoose.model("Course",{
    id:{
        type: Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    newprice:{
        type:String,
        required:true
    },
    oldprice:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    shortdescription:{
        type:String,
        required:true
    },
    fulldescription:{
        type:String,
        required:true
    }
})

module.exports = Course;