import React, { useRef, useState } from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import logo from '../../assets/svgs/9921868_chef_hat_restaurant_cooking_kitchen_icon.svg'
import allLogo from '../../assets/svgs/burger-advanced-svgrepo-com.svg'
import cartLogo from '../../assets/svgs/290141_bag_case_handbag_purse_shopping_icon.svg'
import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'

export const Nav = () => {

  const {getTotalCartAmount, userName, mode} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const [isNavOpen, setIsNavOpen] = useState(false)

  const navOther = useRef(null);


  const handleNav = () => {
    if (navOther.current.className === "navOther") {
      setIsNavOpen(true)
      navOther.current.className = "navOther active"
    }
    else if (navOther.current.className === "navOther active") {
      setIsNavOpen(false)
      navOther.current.className = "navOther"
    }
  }


  return (
    <>
    <div className={mode === "night" ? "navContainer dark" : "navContainer"}>

      <div className="nav-left">
      <object type="image/svg+xml" data={logo} className="logo-icon"></object>
        <h3>Sweet<span>Eats</span></h3>
      </div>
      <div className="navOther" ref={navOther}>
        <div className='nav-center'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Menu">Menu</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact us">Contact us</NavLink>
        </div>
        
        <div className='nav-right'>
          <h3>{ userName }</h3>
          {userName === '' ? <NavLink to="/Register" className="register-btn">Join us</NavLink> : ''}
          <NavLink to="/Cart" className="cart-btn">
          {totalAmount > 0  ? <p className="cartNum"></p> : <p></p>}
            <object type="image/svg+xml" data={cartLogo} className="cart-logo-icon"></object>
            <p className='cartShow'>Cart</p>
          </NavLink>
        </div>
        <button className="menuToggle" onClick={handleNav}>
          {isNavOpen === false ? 
          <>
            <object type="image/svg+xml" data={allLogo} className="all-logo-icon"></object>
          </>
          : 
          <>
          cancel
          </>}
        </button>
      </div>
    </div>
    </>
  )
}

