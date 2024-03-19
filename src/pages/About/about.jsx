import React, { useContext, useEffect } from 'react'
import './about.css'
import { Nav } from "../../component/nav/nav";
import { HomeAbout } from '../../component/homeAbout/homeAbout'
import { AboutTop } from '../../component/aboutTop/aboutTop'
import { Footer } from '../../component/footer/footer';
import { Review } from "../../component/review/review";
import OurTeam from '../../component/ourTeam/ourTeam';
import Background from '../../component/background/background';
import { ShopContext } from '../../context/shopContext';

export const About = () => {

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
    <div className={mode === "night" ? "aboutBox dark" : "aboutBox"}>
      <Nav/>
      <Background/>
      <AboutTop/>
      <HomeAbout/>
      <OurTeam/>
      <Review/>
      <Footer/>
    </div>
    </>
  )
}
