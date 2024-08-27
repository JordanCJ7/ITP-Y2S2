import React from 'react'
import { Link } from 'react-router-dom'
import '../SideBar/SideBar.css'
import add_icon from '../../Assets/addicon.png'
import listicon from '../../Assets/listicon.png'

const SideBar = () => {
  return (
    <div className='sideBar'>

        <Link to={'/addcourse'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
        <img src={add_icon} alt=""/>
        <p>Add Courses</p>
        </div>
        </Link>

        <Link to={'/listcourse'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
        <img src={listicon} alt=""/>
        <p>List Courses</p>
        </div>
        </Link>
        

    </div>
  )
}

export default SideBar