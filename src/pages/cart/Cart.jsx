import React, { useContext, useEffect } from 'react'
import './cart.css'
import { CartMain } from '../../component/cartMain/cartMain'
import { CartWish } from '../../component/cartWishList/cartWish'
import { Nav } from '../../component/nav/nav'
import Background from '../../component/background/background'
import { ShopContext } from '../../context/shopContext'

export const Cart = () => {

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
    <div className={mode === "night" ? "cartPage dark" : "cartPage"}>
      <CartMain/>
      <CartWish/>
    </div>
    </>
  )
}
