import React from 'react'
import '../AddCourse/Addcourse.css'
import uploadIcon from '../../Assets/uploadicon.png'
import { useState } from 'react'

const Addcourse = () => {

    const [image,setImage] = useState(false);
    const [CourseDetails, setCourseDetails] = useState({
        name:"",
        image:"",
        newprice:"",
        oldprice:"",
        duration:"",
        shortdescription:"",
        fulldescription:""
    })


    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) => {
        const { name, value } = e.target; 
        setCourseDetails({...CourseDetails,[e.target.name]:e.target.value});          
    };



    const Add_course = async() =>{
        console.log(CourseDetails);
        let responseData;
        let course = CourseDetails;

        let formData = new FormData();
        formData.append('course',image);

        await fetch('http://localhost:5000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json'
            },
            body:formData,
        })  .then((resp) => resp.json()).then((data) =>{responseData = data});

        if(responseData.success){
            course.image = responseData.image_url;
            console.log(course);
            await fetch('http://localhost:5000/addcourse',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(course),
            }).then((resp) =>resp.json()).then((data)=>{
                data.success?alert("Course Added"):alert("failed")
            })
        }

    }

  return (

    <div className='add-course'>
        <div className='add-course-itemfields'>
            <p>Course Name</p>
            <input value={CourseDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type The Course Name' />
        </div>

        <div className="course-price">
        <div className='add-course-itemfields'>
            <p>Price</p>
            <input value={CourseDetails.oldprice} onChange={changeHandler}  type="text" name='oldprice' placeholder='Type The Old Price' />
        </div>

        <div className='add-course-itemfields'>
            <p>Offer Price</p>
            <input value={CourseDetails.newprice} onChange={changeHandler} type="text" name='newprice' placeholder='Type The Offer Price' />
        </div>

        </div>

        <div className='add-course-itemfields'>
            <p>Course Duration</p>
            <input value={CourseDetails.duration} onChange={changeHandler} type="text" name='duration' placeholder='Type The Course Duration' />
        </div>

        <div className='add-course-itemfields'>
            <p>Short Description</p>
            <textarea value={CourseDetails.shortdescription} onChange={changeHandler} className='textarea1' type="text" name='shortdescription' placeholder='Type The Short Description' />
        </div>

        <div className='add-course-itemfields'>
            <p>Full Description</p>
            <textarea value={CourseDetails.fulldescription} onChange={changeHandler} className='textarea2' type="text" name='fulldescription' placeholder='Type The Full Description' />
        </div>

        <div className='add-course-itemfields'>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):uploadIcon} className='addcourse-image' alt="upload area"/>
            </label>    
                <input onChange={imageHandler} type="file" name="image" id='file-input' hidden/>       
        </div>
        <button onClick={()=>{Add_course()}}  className="add-course-button">Add</button>

    </div>
  )
}

export default Addcourse