import React from 'react'
import './menuLinks.css'
import { Link } from 'react-router-dom'

function MenuLinks(props) {
  return (
    <div>
        <div className="headerContainer"></div>
        <a href={props.url} className="btn1">{props.linkName}</a>
        
    </div>
  )
}

export default MenuLinks