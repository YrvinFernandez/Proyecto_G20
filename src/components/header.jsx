import React from 'react'
import Logo from "../assets/clothes_b.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <section>
        <span><img className="logo" src={Logo} alt="Logo" /></span>
      <nav>
        <ul className='lista'>
            <li><Link className='nav' to="/">Home</Link></li>
            <li><Link className='nav' to="kids">Kids</Link></li>
            <li><Link className='nav' to="men">Men</Link> </li>
            <li><Link className='nav' to="women">Women</Link> </li>
        </ul>
      </nav>
        </section>
     
    </header>
  )
}

export default Header