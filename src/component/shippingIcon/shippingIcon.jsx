import React from 'react'
import backlogo from '../../assets/svgs/angle-left-b-svgrepo-com.svg'
import './shippingIcon.css'
import { useNavigate } from 'react-router-dom'


export const ShippingIcon = () => {

    const navigate = useNavigate();

    return(
        <div className="shipping-icons">
            <button className="back" onClick={()=>{navigate('../')}}>
                <object type="image/svg+xml" data={backlogo} className="web-logo-icon"></object>
            </button>
            <p className="iconBox marked"><span>1</span> Cart</p>
            <div className="stroke"></div>
            <p className="iconBox active"><span>2</span> Shipping</p>
            <div className="stroke"></div>
            <p className="iconBox"><span>3</span> Check out</p>
        </div>
    )
}