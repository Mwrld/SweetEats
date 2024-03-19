import React from 'react'
import './aboutTop.css'
import logo from '../../assets/svgs/9921868_chef_hat_restaurant_cooking_kitchen_icon.svg'
import pic1 from '../../assets/images/menu images/karolina-kolodziejczak-7CLArMn7TCM-unsplash.jpg'
import pic2 from '../../assets/images/menu images/emile-mbunzama-cLpdEA23Z44-unsplash.jpg'

export const AboutTop = () => {
  
  return (
    <>
      <div className="aboutTop">
        {/* <img src={pic2} alt="" /> */}
        
        <div className="nav-left">
            <object type="image/svg+xml" data={logo} className="logo-icon"></object>
            <h3>Sweet<span>Eats</span>
            </h3>
        </div>

        <p>Fresh, hot and ready to go<br />right at your door</p>
      </div>
    </>
  )
}
