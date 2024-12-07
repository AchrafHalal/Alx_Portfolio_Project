import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'


const Menu =()=>{
  return(
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#adopt'>Available</a></p>
    <p><a href='#services'>Services</a></p>
    <p><a href='#book'>Book</a></p>
    <p><a href='#about us'>About us</a></p>
  </>
  )
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  

  return (
    <div className='ashl__navbar '>
      <div className='ashl__navbar-links'>
        <div className='ashl__navbar-links_logo' >
            <img src={logo} alt='logo'/>
        </div>
      <div className='ashl__navbar-links_container'>
         <Menu />
      </div>  
      </div>
      {/*
      <div className='ashl__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      */ }
      <div className='ashl__navbar-menu'>
          {toggleMenu 
          ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='ashl__navbar-menu_container scale-up-center'>
              <div className='ashl__navbar-menu_container-links'>
                <Menu />
                <div className='ashl__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
                </div>
                
              </div>
            </div>
          )}
      </div>

    </div>
  )
}

export default Navbar