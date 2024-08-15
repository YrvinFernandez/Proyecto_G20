import React from 'react'
<<<<<<< HEAD
import Logo from "../assets/clothes_b.png"
import { Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
import Logo from "../assets/clothes.png"
import Cart from "../assets/cart.png"
import Login from "../assets/login.png"
import Glass from "../assets/glass.png"
>>>>>>> 86d875deefb16ad7895399a326ab7f646d1d7949

const Header = () => {
  return (
    <header className='header'>
<<<<<<< HEAD
        <section>
        <span><img className="logo" src={Logo} alt="Logo" /></span>
=======
      <section className='header1'>
        <span><img src={Logo} alt="Logo" /></span>
        <nav>
        <ul className='lista'>
          <span><img src={Glass} alt="Busqueda" /></span>
          <li><Link className='nav' to="">Search</Link></li>
          <span><img src={Login} alt="Sesion" /></span>
          <li><Link className='nav' to="">Login</Link></li>
          <span><img src={Cart} alt="Carrito" /></span>
          <li><Link className='nav' to="">Cart</Link></li>
        </ul>
      </nav>
      </section>  
      <section className='header2'>
>>>>>>> 86d875deefb16ad7895399a326ab7f646d1d7949
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