import React, { useContext, useRef, useState } from 'react'
import "./main.css"
import searchBtn from '../../assets/svgs/4829869_arrow_next_right_icon.svg'
import instagram from '../../assets/svgs/instagram-svgrepo-com.svg'
import twitter from '../../assets/svgs/twitter-svgrepo-com (1).svg'
import facebook from '../../assets/svgs/facebook-svgrepo-com (1).svg'
import mainPic from "../../assets/images/burger-png-png-images-yellow-images-12.png"
import { ShopContext } from '../../context/shopContext'
import { useNavigate } from 'react-router-dom'

export const Main = () => {

  const navigate = useNavigate();
  const {setSearchValue, searchValue, mode} = useContext(ShopContext)


  return (
    <div className={mode === "night" ? "main dark" : "main"}>
      <div className="mainSquare"></div>
      <div className="main-left">
        <h1 className='title'><span>Satisfy</span> your<br />craving with<br />our delectable <span>treats</span></h1>
        <p className="motto">fresh, hot and ready to go - right at your door</p>
        
        <div className="search-container">
          <input type="text" className='search' placeholder='Search menu' onChange={(event)=>setSearchValue(event.target.value)}/> 
          <button className='submitSearch' onClick={()=>{navigate('./Menu', {replace: true, state:{searchValue}})}}>
            {/* <object type="image/svg+xml" data={searchBtn} className="search-icon" alt="search"></object> */}
            Search
          </button>
        </div>
      </div>

      <div className="main-right">
        <img src={mainPic} alt="burger-pic" />
      </div>
      <div className="main-social">
        <div className="link"><object type="image/svg+xml" data={facebook} className="social-logo-icon"></object></div>
        <div className="link"><object type="image/svg+xml" data={twitter} className="social-logo-icon"></object></div>
        <div className="link"><object type="image/svg+xml" data={instagram} className="social-logo-icon"></object></div>
      </div>
    </div>
  )
}
