import React, { useContext, useState } from 'react'
import { ShopContext } from '../../../context/shopContext'
import './shippingRight.css'
import { useNavigate } from 'react-router-dom'

export const ShippingRight = () => {

    const {getTotalCartAmount, paymentType, setPaymentType, voucherTest, setVoucherTest, userEmail, setUserEmail, userTel, setUserTel, voucherDiscount, fullPrice, setFullPrice, userLocalAddress} = useContext(ShopContext)
    const totalAmount = Math.floor(getTotalCartAmount())
    const fullAmount = totalAmount - Math.floor(totalAmount * (voucherDiscount/100));
    const navigate = useNavigate();

    
    return (
        <>
    <div className='ShippingRight'>
        <div className="paymentType">
            <h3>Payment Type</h3>

            <form action="" method="get">
                <select name="" id="" onChange={(event)=>setPaymentType(event.target.value)}>
                    <option value="Card">Card</option>
                    <option value="Payment on delivery">Payment on delivery</option>
                </select>
            </form>
        </div>

        <div className="customerInfo">
            <h3>Confirm</h3>
            <p className='info'><input type="email" placeholder='Email' defaultValue={userEmail} onChange={(event)=>setUserEmail(event.target.value)}/></p>
            <p className='info'><input type="number" placeholder='Phone Number' defaultValue={userTel} onChange={(event) => setUserTel(event.target.value) }/></p>
        </div>

        <div className="couponContain">
            <p className="addCoupon">Add Coupon</p>
            <input type="text" className="inputContain" placeholder="Enter coupon" defaultValue={voucherTest} onChange={(event)=>setVoucherTest(event.target.value)}/>
        </div>
        

        <div className="infoSummary">
            <p>Delivery: <span>FREE</span></p>
            <p>Total: <span>${fullAmount}</span></p>

            {userLocalAddress != "" && userEmail != "" && userTel != "" && paymentType != "" && userEmail.includes(".com")? <button className="submitOrder" onClick={()=>{navigate('../Check out', {replace: true})}}>Check Out</button> : <button className="submitOrder active" disabled>Check Out</button>}
        </div>
    </div>
        </>
  )
}
