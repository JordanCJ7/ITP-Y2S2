import React from "react"
import '../Admin/Admin.css'
import SideBar from "../../Components/SideBar/SideBar"
import Addcourse from "../../Components/AddCourse/Addcourse"
import Listcourse from "../../Components/ListCourse/Listcourse"
import Updatecourses from "../../Components/UpdateCourse/UpdateCourse"
import { Routes, Route } from "react-router-dom"


function Admin(){

    return(
        <div className='admin'>
            <SideBar />
            <div className='admin-content'>
                <Routes>
                    <Route path='/addcourse' element={<Addcourse />} />
                    <Route path='/listcourse' element={<Listcourse />} />
                    <Route path="/updatecourses/:id" element={<Updatecourses />} />
                </Routes>
            </div>
        </div>
    )
}
export default Admin