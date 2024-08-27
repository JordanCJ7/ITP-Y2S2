import React, { useState , useEffect } from 'react'
import Courses from '../Course-list-page/Courses'
import '../../pages/Course-list-page/CoursePage.css'


export const CoursePage = () => {

    const [allcourses , setAllcourses] = useState([]);

    const fetchInfo = async() =>{
        await fetch('http://localhost:5000/allcourses')
        .then((res) =>res.json())
        .then((data) =>{setAllcourses(data)});

    }

    useEffect(() =>{
      fetchInfo();
    },[])

    return (
      <div className='course-container'>

            {allcourses.map((course,index) =>{
                return <>
                <Courses Img={course.image} newprice={course.newprice}  oldprice={course.oldprice} description={course.shortdescription}/>
                </>
            })}
  

      </div>
    )
  }
  
  export default CoursePage