import React from 'react'
import './menuLinks.css'
import { Link } from 'react-router-dom'

function MenuLinks(props) {
  return (
    <div>
        <div className="headerContainer"></div>
        <span  className="btn1">{props.linkName}</span>
        
    </div>
  )
}

export default MenuLinks