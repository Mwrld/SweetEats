import React, { useContext } from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/svgs/9921868_chef_hat_restaurant_cooking_kitchen_icon.svg'
import google from '../../assets/svgs/google-plus-svgrepo-com.svg'
import instagram from '../../assets/svgs/instagram-svgrepo-com.svg'
import twitter from '../../assets/svgs/twitter-svgrepo-com (1).svg'
import facebook from '../../assets/svgs/facebook-svgrepo-com (1).svg'
import { ShopContext } from '../../context/shopContext'

export const Footer = () => {

  const {mode} = useContext(ShopContext)

  return (
    <>
    <div className={mode === "night" ? "footerContainer dark" : "footerContainer"}>
      
      <div className="footerTop">

        <div className="footerLogos">
          <object type="image/svg+xml" data={logo} className="logo-icon"></object>
          <h5>Sweet<span>Eats</span></h5>
        </div>

        <div className="footerLinks">
            <NavLink to="/" className="Flink">Home</NavLink>
            <NavLink to="/Menu" className="Flink">Menu</NavLink>
            <NavLink to="/About" className="Flink">About</NavLink>
            <NavLink to="/Contact us" className="Flink">Contact us</NavLink>
        </div>

        <div className="getApp"></div>
      </div>

      <div className="footerBottom">
        <p>2024 Sweet Eats<br />All rights reserved</p>
        
        <ul className="socialLinks">
          <li><object type="image/svg+xml" data={facebook} className="social-logo-icon"></object></li>
          <li><object type="image/svg+xml" data={twitter} className="social-logo-icon"></object></li>
          <li><object type="image/svg+xml" data={instagram} className="social-logo-icon"></object></li>
        </ul>

        <p>1234 Ikeja Lagos</p>
      </div>
    </div>
    </>
  )
}
