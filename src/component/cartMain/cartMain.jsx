import React, { useContext } from 'react'
import CartItems from '../cartItems/cartItems';
import { data } from '../../db/db';
import { ShopContext } from '../../context/shopContext'
import cartImg from "../../assets/svgs/cart-shopping-svgrepo-com.svg"
import './cartMain.css'
import { useNavigate } from 'react-router-dom'


export const CartMain = () => {

    const navigate = useNavigate();
  
    const {cartItems, getTotalCartAmount, cartItemAmount, voucherDiscount, voucherTest, setVoucherTest} = useContext(ShopContext)
    // const totalAmount = Math.floor(getTotalCartAmount())  // const fullAmount = totalAmount + 9.00;
    const totalAmount = (getTotalCartAmount()).toFixed(2)

    const fullAmount = (totalAmount - (totalAmount * (voucherDiscount/100))).toFixed(2);
  
    const {mode} = useContext(ShopContext)

    return (

        <div className={mode === "night" ? "cartPageContainer dark" : "cartPageContainer"}>
  
          <div className={totalAmount === 0 ? "cartPageList active" : "cartPageList"}>
  
            <h2>My Order</h2>
  
            <div className="zeroCartBox">
              <object type="image/svg+xml" data={cartImg} className="zeroCartLogo"></object>
              <p>You don't have any item in cart</p>
              <button className="continue" onClick={()=>{navigate('../Menu', {replace: true})}}>Continue Shopping</button>
            </div>
            
            {
              data.map((val) => {
                if(cartItems[val.id] !== 0){
                  return (
                    <CartItems id={val.id} img={val.image} name={val.name} price={val.price} category={val.category} />
                  )
                }
              })
            }
  
          </div>
  
          <div className={totalAmount === 0 ? "orderSummary active" : "orderSummary"}>
            <h2>Total</h2>
            <p className="subTotal">Sub Total <span className="amount">${totalAmount}</span></p>
            <p className="subTotal">Delivery <span className="amount">Free</span></p>
  
            <div className="couponContain">
              <p className="addCoupon">Add Coupon</p>
              <input type="text" className="inputContain" placeholder="Enter coupon" defaultValue={voucherTest} onChange={(event)=>setVoucherTest(event.target.value)}/>
            </div>
            
            <p className="subTotal total">Total <span className="amount">${fullAmount}</span> <span className={voucherDiscount === "" ? "discount active" : "discount"}>-{voucherDiscount}%</span></p>
  
            {totalAmount === 0 ? <button className="submitOrder active" disabled>Go To Check Out</button> : <button className="submitOrder" onClick={()=>{navigate('../Shipping', {replace: true})}}>Go To Check Out</button>}
            
          </div>
  
        </div>  
      
    )
  }
  