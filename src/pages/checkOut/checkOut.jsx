import React, { useContext, useEffect } from 'react'
import './checkOut.css'
import { CheckOutIcon } from '../../component/checkOutIcon/checkOutIcon'
import { CheckOutLeft } from '../../component/checkOutMain/checkOutLeft/checkOutLeft'
import { CheckOutRight } from '../../component/checkOutMain/checkOutRight/checkOutRight'
import Background from '../../component/background/background'
import { ShopContext } from '../../context/shopContext'
import { useNavigate } from 'react-router-dom'

export const CheckOut = () => {
  const navigate = useNavigate();
  
  const {mode, setMode, userLocalAddress, userTel, userEmail, getTotalCartAmount} = useContext(ShopContext)

  const totalAmount = Math.floor(getTotalCartAmount())

  // if (userLocalAddress === "" && userTel === "" && userEmail === "" && totalAmount === 0) {
  //   navigate('../', {replace: true})
  // }

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
      <Background/>
        <div className={mode === "night" ? "checkOutBox dark" : "checkOutBox"}>
        {/* <div className='checkOutBox'> */}
            <CheckOutIcon/>
            <h2>Checkout</h2>
            <div className="checkOutMain">
                <CheckOutLeft/>
                <CheckOutRight/>
            </div>
        </div>
    </>
  )
}
