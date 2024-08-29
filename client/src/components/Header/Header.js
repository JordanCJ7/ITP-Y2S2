import react from 'react'
import '../Header/Header.css'
import logo from '../../Assets/logo.png'
import searchIcon from'../../Assets/search-w.png'
import MenuLinks from '../Header/MenuLinks'
import { BrowserRouter, Link, Route } from 'react-router-dom'


function Header () {
    return (
      <div className="navbarContainer">
  
          <div className="navbar">
  
              <img src={logo} alt="" className="logo"/>
  
              <div className="m-header"> 
                    <MenuLinks linkName="Home" url="#home"/>
                    <MenuLinks linkName="Services" url="#Services"/>
                    <Link className='link-style' to={'/courselist'}><MenuLinks linkName="Courses"/></Link>                
                    <MenuLinks linkName="Contact" url="#ContactUs" />  
            </div>
  
              <div className="buttonContainer">
                  <MenuLinks linkName="Sign up" url="#Sign-up" />     
                  <MenuLinks linkName="Log in" url="#Log-in" />
              </div>
  
          </div>
  
      </div>
    
    )
  }

export default Header
