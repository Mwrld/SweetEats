import React, { useContext, useEffect } from "react";
import './Home.css';
import Preload from "../../component/preload/preload";
import { ShopContext } from "../../context/shopContext";
import Background from "../../component/background/background";
import { Nav } from "../../component/nav/nav";
import { Main } from "../../component/main/main"
import { MenuSideBar } from "../../component/menu/menuSideBar/menuSideBar"
import { HomeAbout } from '../../component/homeAbout/homeAbout'
import { HomeContact } from '../../component/homeContact/homeContact'
import { Review } from "../../component/review/review";
import { Footer } from "../../component/footer/footer";
import { GetApp } from "../../component/getApp/getApp";


export const HomePage = (
) => {
  const { mode, setMode } = useContext(ShopContext);

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
      <Preload />
      <Background/>
      <Nav/>
      <Main/>
      <HomeAbout/>
      <MenuSideBar/>
      <Review/>
      <HomeContact/>
      <GetApp/>
      <Footer/>
    </>
  );
};
