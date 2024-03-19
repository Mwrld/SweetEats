import React, { useContext } from 'react'
import locationIcon from "../../assets/svgs/location-pin-alt-1-svgrepo-com.svg"
import phoneIcon from "../../assets/svgs/contact-phone-talking-svgrepo-com.svg"
import emailIcon from "../../assets/svgs/email-svgrepo-com.svg"
import './homeContact.css'
import { ShopContext } from '../../context/shopContext'

export const HomeContact = () => {

const {mode} = useContext(ShopContext)

  return (
    <>
    <div className={mode === "night" ? "homeContactBox dark" : "homeContactBox"}>
      
      <div className="homeContactLeft">
        <h3>Subscribe to Sweet <span>Eats</span></h3>
        <form action="">
          <input type="text" placeholder='Enter your email'/>
          <button>Subscribe</button>
        </form>
      </div>

      <div className="homeContactRight">
        <section>
        <object type="image/svg+xml" data={phoneIcon} className="contact-logo-icon"></object>
        <p>+234 901 234 5678</p>
        </section>

        <section>
        <object type="image/svg+xml" data={emailIcon} className="contact-logo-icon"></object>
        <p>SweetEats@gmail.com</p>
        </section>

        <section>
        <object type="image/svg+xml" data={locationIcon} className="contact-logo-icon"></object>
        <p>456 Mission ST. SanFrancisco C.A 94</p>
        </section>
      </div>
    </div>
    </>
    
  )
}
