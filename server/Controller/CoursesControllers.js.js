// this is controller


const Course = require('../Model/coursesModel'); // Adjust the path if necessary

// Fetch all courses
const getAllCourses = async (req, res) => {
    try {
        let courses = await Course.find({});
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Fetch a single course by ID
const getCourseById = async (req, res) => {
    try {
        let course = await Course.findById(req.body.id);
        res.status(200).send(course);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Add a new course
const addCourse = async (req, res) => {
    try {
        let courses = await Course.find({});
        let id;
        if (courses.length > 0) {
            let last_course_array = courses.slice(-1);
            let last_course = last_course_array[0];
            id = last_course.id + 1;
        } else {
            id = 1;
        }
        const course = new Course({
            id: id,
            name: req.body.name,
            image: req.body.image,
            oldprice: req.body.oldprice,
            newprice: req.body.newprice,
            duration: req.body.duration,
            shortdescription: req.body.shortdescription,
            fulldescription: req.body.fulldescription
        });
        await course.save();
        res.json({ success: true, name: req.body.name });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Update a course by ID
const updateCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const updatedData = {
            name: req.body.name,
            image: req.body.image,
            oldprice: req.body.oldprice,
            newprice: req.body.newprice,
            duration: req.body.duration,
            shortdescription: req.body.shortdescription,
            fulldescription: req.body.fulldescription,
        };

        const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });

        if (updatedCourse) {
            res.json({ success: true, course: updatedCourse });
        } else {
            res.status(404).json({ success: false, message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Remove a course by ID
const removeCourse = async (req, res) => {
    try {
        await Course.findOneAndDelete({ id: req.body.id });
        res.json({ success: true, message: "Course removed" });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    removeCourse
};
