import React, { useContext } from 'react'
import './ourTeam.css'
import img from '../../assets/images/team/images.jpeg'
import img1 from '../../assets/images/team/images (1).jpeg'
import img2 from '../../assets/images/team/images (2).jpeg'
import img3 from '../../assets/images/team/images (3).jpeg'
import img4 from '../../assets/images/team/images (4).jpeg'
import img5 from '../../assets/images/team/images (5).jpeg'
import img6 from '../../assets/images/team/images (6).jpeg'
import img7 from '../../assets/images/team/images (7).jpeg'
import { ShopContext } from '../../context/shopContext'

const OurTeam = () => {

    const {mode} = useContext(ShopContext)

  return (
    <>
    <div className={mode === "night" ? "teamBox dark" : "teamBox"}>
        <h3 className='menuTopic'>Our <span>Team</span></h3>
        
        <div className="teamBoxList">

            <div className="teamList">
                <div className="teamPic">
                    <div className="teamPicBorder"></div>
                    <img src={img1} alt="" />
                </div>

                <h3 className='teamName'>Chris <span>Smith</span> </h3>
                <p className="teamTitle">Executive <span>Chef</span></p>
            </div>

            <div className="teamList">
                <div className="teamPic">
                    <div className="teamPicBorder"></div>
                    <img src={img2} alt="" />
                </div>

                <h3 className='teamName'>Yazad <span>Gandhi</span></h3>
                <p className="teamTitle">Sous <span>Chef</span></p>
            </div>

            <div className="teamList">
                <div className="teamPic">
                    <div className="teamPicBorder"></div>
                    <img src={img7} alt="" />
                </div>

                <h3 className='teamName'>Max <span>Jones</span></h3>
                <p className="teamTitle">Kitchen <span>Manager</span></p>
            </div>

            <div className="teamList">
                <div className="teamPic">
                    <div className="teamPicBorder"></div>
                    <img src={img6} alt="" />
                </div>

                <h3 className='teamName'>Jack <span>Johnson</span></h3>
                <p className="teamTitle">Pastry <span>Chef</span></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurTeam
