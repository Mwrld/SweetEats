import React, { useContext, useEffect } from 'react'
import './contact.css'
import ArrowBtn from '../../assets/svgs/4829869_arrow_next_right_icon.svg'
import instagram from '../../assets/svgs/instagram-svgrepo-com.svg'
import twitter from '../../assets/svgs/twitter-svgrepo-com (1).svg'
import facebook from '../../assets/svgs/facebook-svgrepo-com (1).svg'
import logo from '../../assets/svgs/9921868_chef_hat_restaurant_cooking_kitchen_icon.svg'
import backlogo from '../../assets/svgs/angle-left-b-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import Background from '../../component/background/background'
import { ShopContext } from '../../context/shopContext'

export const Contact = () => {

  const navigate = useNavigate();

  const {mode, setMode} = useContext(ShopContext)

  useEffect(() => {
    var time = new Date();
    if (time.getHours() > 19 || time.getHours() < 7) {
      setMode("night");
    } else {
      setMode("day");
    }
  }, []);

  return (
    <>
    <Background/>
      <div className={mode === "night" ? "contactBox dark" : "contactBox"}>
        <div className="maps">
        
        <div className="webLogoBox" onClick={()=>{navigate('../')}}>
          <button className="back" onClick={()=>{navigate('../')}}>
            <object type="image/svg+xml" data={backlogo} className="web-logo-icon"></object>
          </button>
            <object type="image/svg+xml" data={logo} className="web-logo-icon"></object>
            <h4>Sweet<span>Eats</span></h4>
        </div>

        {/* <iframe className='mapFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.417586946185!2d3.339379774359759!3d6.594909422330659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9226e1de632b%3A0xf55a2a3c038e21b3!2sKFC%20(IKEJA%20HEAD%20BRIDGE)!5e0!3m2!1sen!2sng!4v1709494526669!5m2!1sen!2sng" controls ="0" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe className='mapFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929.101921655388!2d3.4245032536710576!3d6.451645023995474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5b4027ab537%3A0x429d77d3cf86b0e0!2sKFC%20Ikoyi!5e0!3m2!1sen!2sng!4v1709495611719!5m2!1sen!2sng" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        
          <h3>Contact us</h3>
        </div>

      <div className="contactForm">
        <span>Feedback Form</span>

        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="tel" placeholder='Phone' />
        <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
        <button>
          Send Message
          <object type="image/svg+xml" data={ArrowBtn} className="sendIcon" alt="search"></object>
        </button>
      </div>


        <div className="contactDetail">
          <section>
            <span>Our Address</span>
            <p>1234 Ikeja Lagos <br />
              Sample Street <br />
              building 47 office 202</p>
          </section>

          <section>
            <span>Our Contact</span>
            <p>SweetEats@gmail.com <br />
            +23490 123 456 78</p>
          </section>

          <ul className="social">
            <li><object type="image/svg+xml" data={facebook} className="social-icon" alt="search"></object></li>
            <li><object type="image/svg+xml" data={twitter} className="social-icon" alt="search"></object></li>
            <li><object type="image/svg+xml" data={instagram} className="social-icon" alt="search"></object></li>
          </ul>

        </div>
        
      </div>
    </>
  )
}
