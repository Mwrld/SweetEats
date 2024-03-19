import React, { useContext, useState } from 'react'
import locationSvg from '../../../assets/svgs/location-pin-alt-1-svgrepo-com.svg'
import { ShopContext } from '../../../context/shopContext'
import './shippingLeft.css'
import { Address } from '../../../db/Address'

export const ShippingLeft = () => {
    const {userStateAddress, setUserStateAddress, userLocalAddress, setUserLocalAddress} = useContext(ShopContext)

    return(
        <div className="shippingMainLeft">
            <div className="leftTop">
                <h3>Select Address</h3>
                <span>Choose a pick-up station near you</span>
            </div>
            <div className="mapContain">
                <div className="map">
                {
                    
                    Address
                    .filter((val) => {
                        if (userLocalAddress === "") {
                            // return val;
                            // return(
                            //     <h4 className="mapSelect">Choose a pick-up station</h4>
                            // )
                        }else if(val.station.toLocaleLowerCase().includes(userLocalAddress.toLocaleLowerCase())){
                            return val;
                        }
                    })
                    .map((val) => {

                        return(
                            <>
                            <iframe className='addressMap' src={val.src} width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </>
                        )
                    })
                }                    
                </div>
            </div>
            <div className="addressInfo">
                <div className="addressLeft">
                    <h4>Your Address</h4>
                    <form action="">
                        <select className='State' name="" id="" defaultValue={userStateAddress} onChange={(event)=>setUserStateAddress(event.target.value)}>
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

                <div className="addressRight">
                    <div className="illustrate">
                        <span className="red"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="green"></span>
                    </div>
                    <div className="addressRightInfo">
                        <section>
                            <h3><object type="image/svg+xml" data={locationSvg} className="address-logo-icon"></object> <span>Food Station</span></h3>
                            <span>1234 Ikeja Lagos</span>
                        </section>
                        <h3><object type="image/svg+xml" data={locationSvg} className="address-logo-icon"></object> <span>{userLocalAddress === "" ? "Pick-up Station" : userLocalAddress}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}