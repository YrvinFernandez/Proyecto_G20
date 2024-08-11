import React from 'react'
import Logo from "../assets/clothes.png"
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className='header'>
      <div className='header1'>
        <span><img src={Logo} alt="Logo" /></span>
        <nav>
        <ul className='lista'>
          <li><Link className='nav' to="">Search</Link></li>
          <li><Link className='nav' to="">Login</Link></li>
          <li><Link className='nav' to="">Cart</Link></li>
        </ul>
      </nav>
      </div>  
      <div className='header2'>
      <nav>
        <ul className='lista'>
            <li><Link className='nav' to="/">Home</Link></li>
            <li><Link className='nav' to="kids">Kids</Link></li>
            <li><Link className='nav' to="men">Men</Link> </li>
            <li><Link className='nav' to="women">Women</Link> </li>
        </ul>
      </nav>
      </div>
      
      
        
     
    </header>
  )
}

export default Header