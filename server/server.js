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
mongoose.connect("mongodb+srv://pabalu:pabalu1234@itpproject.dt2ej.mongodb.net/pabalu");


const {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    removeCourse
} = require("./Controller/CoursesControllers.js"); // Adjust the path if necessary

app.get("/", (req, res) => {
    res.send("Express App Is Running");
});

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// Create upload endpoint for images
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('course'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// API Routes
app.get('/allcourses', getAllCourses);
app.post('/course', getCourseById);
app.post('/addcourse', addCourse);
app.put('/updatecourse/:id', updateCourse);
app.post('/removecourse', removeCourse);



app.listen(port,(error) =>{
    if(!error){
        console.log("Server Running on port" , port)

    }else{
        console.log("error:" + error)
    }
})