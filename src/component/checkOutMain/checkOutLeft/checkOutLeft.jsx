import React, { useContext } from 'react'
import './checkOutLeft.css'
import { data } from '../../../db/db'
import CartItems from '../../cartItems/cartItems'
import { ShopContext } from '../../../context/shopContext'
import { useNavigate } from 'react-router-dom'

export const CheckOutLeft = () => {
    const navigate = useNavigate();
    const {cartItems, getTotalCartAmount, voucherDiscount, voucherTest, setVoucherTest} = useContext(ShopContext)
    const totalAmount = Math.floor(getTotalCartAmount())
    const fullAmount = totalAmount - Math.floor(totalAmount * (voucherDiscount/100));

    return (
    <div className='checkOutLeft'>
        <div className="checkOutList">
           <div className="checkOrder">
                
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

        <div className="orderSummary">
          <p className="subTotal">Sub Total <span className="amount">${totalAmount}</span></p>
          <p className="subTotal">Delivery <span className="amount">Free</span></p>          
          <p className="subTotal coupon">Coupon <span className="amount coupon">{voucherDiscount == "" ? "-" : '-'+voucherDiscount+'%'}</span></p>          
          <hr />
          <p className="subTotal Total">Total <span className="amount">${fullAmount}</span> </p>

        </div>
    </div>
  )
}
