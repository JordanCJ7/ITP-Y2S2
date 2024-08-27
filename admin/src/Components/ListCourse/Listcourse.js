import React, { useState , useEffect } from 'react'
import '../ListCourse/Listcourse.css'
import cross_icon from '../../Assets/cross-button.png'
import edit_icon from '../../Assets/edit_icon.png'
import { Link } from 'react-router-dom'


const Listcourse = () => {


    const [allcourses , setAllcourses] = useState([]);

    const fetchInfo = async() =>{
        await fetch('http://localhost:5000/allcourses')
        .then((res) =>res.json())
        .then((data) =>{setAllcourses(data)});

    }


    useEffect(() =>{
        fetchInfo();
    },[])

    const remove_course = async(id) =>{
        await fetch('http://localhost:5000/removecourse',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

  return (
    <div className='list-course'>
        <h1>All Course List</h1>
        <div className="listcourse-format-main">
            <p>Course </p>
            <p>Course Name</p>
            <p>New Price {" (Rs)"}</p>
            <p>Duration {"(Months)"}</p>
            <p>Rating</p>
            <p>Update</p>
            <p>Remove</p>
        </div>
        <div className="listcourse-allcourse">
            <hr />
            {allcourses.map((course,index) =>{
                return <><div key={index} className='listcourse-format-main listcourse-format'>
                    <img src={course.image} alt=""  className='listcourse-course-icon'/>
                    <p>{course.name}</p>
                    <p>{course.newprice}</p>
                    <p>{course.duration}</p>
                    <p>5</p>
                    <Link to={`/updatecourses/`+ course._id}><img  className = 'listcourse-remove-icon' src={edit_icon} alt=""/></Link>
                    <img onClick={() =>{remove_course(course.id)}} className = 'listcourse-remove-icon' src={cross_icon} alt=""/>
                </div>
                <hr/>
                </>
            })}
        </div>

    </div>
  )
}

export default Listcourse