import React, { useRef, useState } from "react"
import './menuCart.css'
import MenuItem from "../menuCartItem/menuItem";
import cartImg from "../../../assets/svgs/290141_bag_case_handbag_purse_shopping_icon.svg"
import { data } from "../../../db/db";
import { useContext } from 'react'
import { ShopContext } from "../../../context/shopContext";
import { useNavigate } from "react-router-dom";

export const MenuCart = () => {
  const navigate = useNavigate();
  const {cartItems, getTotalCartAmount, voucherDiscount, voucherTest, setVoucherTest, fullPrice, userStateAddress, userLocalAddress, setUserStateAddress, setUserLocalAddress, mode} = useContext(ShopContext)

  const totalAmount = (getTotalCartAmount()).toFixed(2)
  
  const fullAmount = (totalAmount - (totalAmount * (voucherDiscount/100))).toFixed(2);

  return (
    
    <div className={mode === "night" ? "menuCart dark" : "menuCart"}>
      <div className="menuTop">
        <h2 className="orderTop">My Order</h2>

        <div className="orderDetails">
          <p className="infoTopic">Customer Address</p>
          <form action="">
          <select className='State' name="" id="" defaultValue={userStateAddress}  onChange={(event)=>setUserStateAddress(event.target.value)}>
            <option value="">Select your state</option>
            <option value="Lagos">Lagos</option>
            <option value="Port Harcourt">Port Harcourt</option>
          </select>
            
            <select className='finalAddress' name="" id="" defaultValue={userLocalAddress} onChange={(event)=>setUserLocalAddress(event.target.value)}>
              <option value="">Select your pickup station</option>

              {userStateAddress === "Lagos" ? <>
                <option value="Ogunsanya Pickup Station">Ogunsanya Pickup Station</option>
                <option value="Surulere Pickup Station">Surulere Pickup Station</option>
                <option value="Apapa Pickup Station">Apapa Pickup Station</option>
              </> : ""}

              {userStateAddress === "Port Harcourt" ? <>
                <option value="Trans Amadi Pickup Station">Trans Amadi Pickup Station</option>
                <option value="Eleme Pickup Station">Eleme Pickup Station</option>
              </> : ""}
        </select>
        </form>

        </div>
      </div>

        <div className={totalAmount === 0 ? "orderList active" : "orderList"}>
          
          <div className="zeroCartBox">
          <object type="image/svg+xml" data={cartImg} className="zeroCartLogo"></object>
          <p>You don't have any item in cart</p>

          </div>

          {
          data.map((val) => {
            if(cartItems[val.id] !== 0){
              return (
                <MenuItem key={val.id} id={val.id} img={val.image} name={val.name} price={val.price} />
              )
            }
          })
          }
          
        </div>

        <div className="orderSummary">
          <p className="subTotal">Sub Total <span className="amount">${totalAmount}</span></p>
          <p className="subTotal">Delivery <span className="amount">Free</span></p>

          <div className="couponContain">
            <p className="addCoupon">Add Coupon</p>
            <input type="text" className="inputContain" placeholder="Enter coupon" defaultValue={voucherTest} onChange={(event)=>setVoucherTest(event.target.value)}/>
          </div>
          
          <p className="subTotal total">Total <span className="amount">${fullAmount}</span> <span className={voucherDiscount === "" ? "discount active" : "discount"}>-{voucherDiscount}%</span></p>

          {totalAmount < 1 ? <button className="submitOrder active" disabled>Go To Check Out</button> : <button className="submitOrder" onClick={()=>{navigate('../Shipping', {replace: true})}}>Go To Check Out</button>}
        </div>
    </div>
  )
}
