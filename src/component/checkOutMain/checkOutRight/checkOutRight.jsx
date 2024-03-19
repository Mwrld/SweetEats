import React, { useContext, useRef } from 'react'
import './checkOutRight.css'
import { useNavigate } from 'react-router-dom'
import creditCard from '../../../assets/svgs/credit-card-svgrepo-com.svg'
import debitCard from '../../../assets/svgs/credit-card-01-svgrepo-com.svg'
import truck from '../../../assets/svgs/delivery-fast-svgrepo-com.svg'
import { ShopContext } from '../../../context/shopContext'
import { Address } from '../../../db/Address'

export const CheckOutRight = () => {

    const navigate = useNavigate();
    // const [cardType, setCardType] = useState('');
    const {paymentType, userEmail,  userTel, userStateAddress, userLocalAddress, cardType, setCardType, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = (getTotalCartAmount()).toFixed(2)

    const dTruck = useRef(null)

    const handlePay = () => {
        dTruck.current.className = "deliveryBox show"
        setTimeout(() => {
            navigate('../', {replace: true})
        }, 3000);
    }

  return (
    <>
    <div className='checkOutRight'>
        <div className="shippingCheckOutInfo">
            <h3>Shipping To</h3>
            <p className="shippingAddress">
                {userLocalAddress} <br />
                Email: {userEmail} <br />
                Mobile: <span>{userTel}</span>
            </p>
            <span className="navigate" onClick={()=>{navigate('../Shipping', {replace: true})}}>Change</span>
        </div>

        {paymentType === "Card" ? 
        <>
        <div className="cardTypeSelect">
            <h3 className='typeTopic'>Card Type</h3>
            
            <div className="cardSelect">
                <div className={cardType === "credit" ? "card active" : "card"} onClick={() => setCardType("credit")}>
                    <h3>Credit Card</h3>
                    <object type="image/svg+xml" data={creditCard} className="logo-icon"></object>
                </div>
                
                <div className={cardType === "debit" ? "card active" : "card"} onClick={() => setCardType("debit")}>
                    <h3>Debit Card</h3>
                    <object type="image/svg+xml" data={debitCard} className="logo-icon"></object>
                </div>
            </div>
        </div>
        
        <div className="checkOutCardDetails">
            <h3>Card Details</h3>

            <div className="cardForm">
                <section className="detail">
                    <span>Name on Card</span>
                    <input type="text" placeholder='Henry Oliver'/>
                </section>
                
                <section className="detail">
                    <span>Card Number</span>
                    <input type="tel" placeholder='1234-5678-9012-3456'/>
                </section>

                <div className="otherDetails">
                    <section className="detail short">
                        <span>Expiry Date</span>
                        <input type="date" placeholder='04/26'/>
                    </section>
                    <section className="detail short">
                        <span>CVV Code</span>
                        <input type="password" placeholder='123'/>
                    </section>
                </div>
                <button onClick={handlePay} className="pay">Pay ${totalAmount}</button>
            </div>
        </div>
        </>
        :
        <>
        <div className="shippingMap">
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
        <button onClick={handlePay} className="pay">Pay ${totalAmount}</button>
        </> 
        }
        <div className="deliveryBox" ref={dTruck}>
            <div className="deliveryContain">
                <object type="image/svg+xml" data={truck} className="delivery-icon"></object>
                <h3>Your meal is on it's way</h3>
            </div>
        </div>
    </div>
    </>
  )
}
