import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1><Link className='navbar__title' to='/'>e-commerce</Link></h1>
      <ul className='navbar__list'>
        <li className='navbar__item'><Link className='navbar-iconitem' to='/login'><ion-icon name="person-outline"></ion-icon></Link></li>
        <li className='navbar__item'><Link className='navbar-iconitem' to='/purchases'><ion-icon name="bag-handle-outline"></ion-icon></Link></li>
        <li className='navbar__item'><Link className='navbar-iconitem' to='/cart'><ion-icon name="cart-outline"></ion-icon></Link></li>
      </ul>
    </div>
  )
}

export default NavBar
