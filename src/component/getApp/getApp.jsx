import React from 'react'
import './getApp.css'
import AppImg from '../../assets/images/otherPic/app.jpg'
import PhonePic from '../../assets/images/otherPic/PicPhone.jpg'
import phoneD from '../../assets/images/otherPic/phoneD.jpg'
import phoneL from '../../assets/images/otherPic/phoneL.jpg'
import playStore from '../../assets/images/otherPic/playStore.png'
import appStore from '../../assets/images/otherPic/appStore.png'

export const GetApp = () => {
  return (
    <div className='getAppBox'>
        <div className="geAppLeft">            
            <h3>Get a better experience <br /> on the app</h3>
            <div className='Btns'>
                <button className='storeApp ps'>
                </button>
                
                <button className='storeApp as'>
                </button>
            </div>
        </div>

      <div className="getAppRightPic2">        
      <img src={phoneL} alt="" className=" phone phoneL" />
        <img src={PhonePic} alt="" className='mainPic'/>
      <img src={phoneD} alt="" className="phone phoneD" />
      </div>
    </div>
  )
}

