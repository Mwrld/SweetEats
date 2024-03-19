import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './homeAbout.css'
import { ShopContext } from '../../context/shopContext';


export const HomeAbout = () => {

    const navigate = useNavigate();
    const {mode} = useContext(ShopContext)

  return (
    <>
    <div className={mode === "night" ? "homeAboutBox dark" : "homeAboutBox"}>
        <div className="homeAboutImageContainer">
            <div className="homeAboutImages left">
                <div className="Img1"></div>
                <div className="Img2"></div>
            </div>
            <div className="homeAboutImages right">
                <div className="Img3"></div>
                <div className="Img4"></div>
            </div>
        </div>
        <div className="homeAboutInfo">
            <h3>Order food from your favourite restaurant with just a few clicks</h3>
            <p className="Text">No more waiting in line ore trying to call busy restaurants</p>
            <p className="subText">Hey there, hungry person! We know you're looking for a quick and easy way to get your favourite fast food delivered, and we're here to help <br />SweetEats is the simplest way to order fast food for delivery, and we'll get your meal to you before you can say "I'm starving!"
            <br /><br />
            </p>
            
            <p className="subText none">Speed Eats offers a number of features that make ordering food for delivery a breeze. With our easy-to-use website and mobile app, you can browse menus, select your food, and place your order in just a few simple steps. And our speedy delivery service means you won't have to wait long for your meal. Plus, we offer a variety of payment options to make the process even easier. We're all about making your life easier and more convenient, one delicious meal at a time!
                <br /><br />
                Sign up for Speed Eats today and start enjoying the convenience of fast, delicious food delivery. It's easy, it's affordable, and it's the perfect way to get the food you want without any hassle. So what are you waiting for? Sign up now and start enjoying the benefits of Speed Eats!
            </p>

            <button className="moreAbout" onClick={()=>{navigate('./About')}}>Find out more</button>

        </div>
    </div>
    </>
  )
}
