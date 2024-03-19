import React, { useContext, useEffect } from 'react'
import { MenuContainer } from "../../component/menu/menuContainer/menuContainer"
import { MenuCart } from "../../component/menu/menuCart/menuCart"
import { Footer } from "../../component/footer/footer"
import { Nav } from '../../component/nav/nav'
import "./menu.css"
import Background from '../../component/background/background'
import { ShopContext } from '../../context/shopContext'

export const Menu = () => {
  
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
    <Nav/>
    <Background/>
    < MenuContainer/>
    < MenuCart/>
    < Footer/>
  </>

  )
}
