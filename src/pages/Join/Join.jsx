import React, { useContext, useRef, useEffect } from 'react'
import './Join.css'
import instagram from '../../assets/svgs/instagram-svgrepo-com.svg'
import twitter from '../../assets/svgs/twitter-svgrepo-com (1).svg'
import facebook from '../../assets/svgs/facebook-svgrepo-com (1).svg'
import user from '../../assets/svgs/user-svgrepo-com.svg'
import email from '../../assets/svgs/email-svgrepo-com.svg'
import password from '../../assets/svgs/password-lock-svgrepo-com.svg'
import logo from '../../assets/svgs/9921868_chef_hat_restaurant_cooking_kitchen_icon.svg'
import backlogo from '../../assets/svgs/angle-left-b-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import Background from '../../component/background/background'
import { ShopContext } from '../../context/shopContext'


const Join = () => {

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

    const formBox = useRef(null);
    const sliderBox = useRef(null);

    const handleSwitchLeft = () => {
        if (mode === "night") {
            formBox.current.className = "forms dark"
        }
        else{
            formBox.current.className = "forms"
        }
        sliderBox.current.className = "switchSlider"
    }
    
    const handleSwitchRight = () => {
        if (mode === "night") {
            formBox.current.className = "forms active dark"
        }
        else{
            formBox.current.className = "forms active"
        }
        sliderBox.current.className = "switchSlider active"
    }

  return (
    <>
    <Background/>
    <div className={mode === "night" ? "forms dark" : "forms"} ref={formBox}>
        <div className="webLogoBox" onClick={()=>{navigate('../')}}>
            <button className="back" onClick={()=>{navigate('../')}}>
                <object type="image/svg+xml" data={backlogo} className="web-logo-icon"></object>
            </button>
            <object type="image/svg+xml" data={logo} className="web-logo-icon"></object>
            <h4>Sweet<span>Eats</span></h4>
        </div>
      
        <div className="formLeftContain">
            <div className="formLeft JoinForm">
                <h3>Sign in</h3>
                <ul className="formlinks">
                <li><object type="image/svg+xml" data={facebook} className="social-logo-icon"></object></li>
                <li><object type="image/svg+xml" data={twitter} className="social-logo-icon"></object></li>
                <li><object type="image/svg+xml" data={instagram} className="social-logo-icon"></object></li>
                </ul>
                <span>or use your email account</span>

                
                    
                    <div className="input">
                    <object type="image/svg+xml" data={email} className="input-logo-icon"></object>
                    <input type="email" placeholder="Email" />
                    </div>
                    
                    <div className="input">
                    <object type="image/svg+xml" data={password} className="input-logo-icon"></object>
                    <input type="password" placeholder="Password" />
                    </div>

                <p>Forgot your password?</p>

                <button className="submitForm">Sign in</button>
            </div>

            <div className="sliderLeft slider">
                <h2>Hello, Friend!</h2>                
                <p>Enter your details and start your journey with us</p>
                <button className="switchLeft" onClick={handleSwitchLeft}>Sign up</button>
            </div>
        </div>        
        
        <div className="formRightContain">
        
            <div className="formRight JoinForm">
                <h3>Create Account</h3>
                <ul className="formlinks">
                <li><object type="image/svg+xml" data={facebook} className="social-logo-icon"></object></li>
                <li><object type="image/svg+xml" data={twitter} className="social-logo-icon"></object></li>
                <li><object type="image/svg+xml" data={instagram} className="social-logo-icon"></object></li>
                </ul>

                <span>or use your email account for registration</span>

                    <div className="input">
                    <object type="image/svg+xml" data={user} className="input-logo-icon"></object>
                    <input type="text" placeholder="Name" />
                    </div>
                    
                    <div className="input">
                    <object type="image/svg+xml" data={email} className="input-logo-icon"></object>
                    <input type="email" placeholder="Email" />
                    </div>
                    
                    <div className="input">
                    <object type="image/svg+xml" data={password} className="input-logo-icon"></object>
                    <input type="password" placeholder="Password" />
                    </div>
                


                <button className="submitForm">Sign up</button>
            </div>

            <div className="sliderRight slider">
                <h2>Welcome Back!</h2>                
                <p>To keep connected with us please login with your personal info</p>
                <button className="switchLeft" onClick={handleSwitchRight}>Sign in</button>
            </div>
        </div>        

        <div className="switchSlider" ref={sliderBox}>
            {/* <div className="sliderBtnBox"></div> */}
        </div>
    </div>
    </>
  )
}

export default Join
