import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './shipping.css'
import { ShippingIcon } from '../../component/shippingIcon/shippingIcon'
import { ShippingLeft } from '../../component/shippingMain/shippingLeft/shippingLeft'
import { ShippingRight } from '../../component/shippingMain/shippingRight/shippingRight'
import Background from '../../component/background/background'
import { ShopContext } from '../../context/shopContext'

export const Shipping = () => {
    
    const navigate = useNavigate();

    const {mode, setMode, getTotalCartAmount} = useContext(ShopContext)
    
    const totalAmount = Math.floor(getTotalCartAmount())

    if (totalAmount === 0){
        navigate('../', {replace: true})
    }
    
    useEffect(() => {
        var time = new Date();
        if (time.getHours() > 19 || time.getHours() < 7) {
          setMode("night");
        } else {
          setMode("day");
        }
      }, []);

    return(
            <>
            <Background/>
            <div className={mode === "night" ? "shippingPageContainer dark" : "shippingPageContainer"}>
            {/* <div className="shippingPageContainer"> */}
            <ShippingIcon/>

            <div className="shippingMain">
                <ShippingLeft/>
                <ShippingRight/>
            </div>
        </div>
    </>
    )
}
