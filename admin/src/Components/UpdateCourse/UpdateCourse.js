import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  
import '../AddCourse/Addcourse.css';
import uploadIcon from '../../Assets/uploadicon.png';

const Updatecourses = () => {
    const { id } = useParams(); 

    console.log(id)


    const [image, setImage] = useState(false);
    const [CourseDetails, setCourseDetails] = useState({
        name: "",
        image: "",
        newprice: "",
        oldprice: "",
        duration: "",
        shortdescription: "",
        fulldescription: ""
    });

    useEffect(() => {

        const fetchCourseDetails = async () => {
            const response = await fetch(`http://localhost:5000/course`, {
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({id:id})
            });

            const data = await response.json();
            if (response.status === 200) {
                setCourseDetails(data);
            } else {
                alert('Failed to fetch course details');
            }

        };

        fetchCourseDetails();
    }, [id]); // Ensure courseId is included in dependency array


    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        const { name, value } = e.target; 
        setCourseDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value 
        }));
    };

    const update_courses = async () => {
        console.log(CourseDetails);
        let responseData;
        let course = {...CourseDetails};

        if (image) {
            let formData = new FormData();
            formData.append('course', image);

            await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData,
            }).then((resp) => resp.json()).then((data) => { responseData = data });

            if (responseData.success) {
                course.image = responseData.image_url;
            } else {
                alert('Image upload failed');
                return;
            }
        }

        await fetch(`http://localhost:5000/updatecourse/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        }).then((resp) => resp.json()).then((data) => {
            console.log(data)
            if (data.success) {
                alert("Course Updated");
            } else {
                alert("Update failed");
            }
        });
    };

    return (
        <div className='add-course'>
            <div className='add-course-itemfields'>
                <p>Course Name</p>
                <input value={CourseDetails.name} onChange={changeHandler} type="text" name='name' />
            </div>

            <div className="course-price">
                <div className='add-course-itemfields'>
                    <p>Price</p>
                    <input value={CourseDetails.oldprice} onChange={changeHandler} type="text" name='oldprice' />
                </div>

                <div className='add-course-itemfields'>
                    <p>Offer Price</p>
                    <input value={CourseDetails.newprice} onChange={changeHandler} type="text" name='newprice' />
                </div>
            </div>

            <div className='add-course-itemfields'>
                <p>Course Duration</p>
                <input value={CourseDetails.duration} onChange={changeHandler} type="text" name='duration' />
            </div>

            <div className='add-course-itemfields'>
                <p>Short Description</p>
                <textarea value={CourseDetails.shortdescription} onChange={changeHandler} className='textarea1' name='shortdescription' />
            </div>

            <div className='add-course-itemfields'>
                <p>Full Description</p>
                <textarea value={CourseDetails.fulldescription} onChange={changeHandler} className='textarea2' name='fulldescription' />
            </div>

            <div className='add-course-itemfields'>
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : uploadIcon} className='addcourse-image' alt="upload area" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id='file-input' hidden />
            </div>
            <button type='button' onClick={update_courses} className="add-course-button">Update</button> 
        </div>
    );
};

export default Updatecourses;
