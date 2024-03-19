import React from 'react'
import './homeCard.css'
import add from '../../assets/svgs/290141_bag_case_handbag_purse_shopping_icon.svg'
import heart from '../../assets/svgs/heart-alt-svgrepo-com.svg'
import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'


function HomeCard(items){
  const {addToCart, removeFromCart, cartItems, updateCartItemCount, addToWishList, removeFromWishList, wishListItems, updateWishListCount, mode} = useContext(ShopContext)

  const cartItemAmount = cartItems[items.id]
  const wishListItemAmount = wishListItems[items.id]

  
  return (
    <div className={mode === "night" ? "cards dark" : "cards"} key={items.id}>
        
        {wishListItemAmount === 0 ? 
          <>
            <button className="wishListBtn" onClick={() => addToWishList(items.id)}><object type="image/svg+xml" data={heart} className="wishIcon"></object></button>
          </> : <>
          <button className="wishListBtn active" onClick={() => removeFromWishList(items.id)}><object type="image/svg+xml" data={heart} className="wishIcon"></object></button>
          </>
        }
        <div className="cardimg" >
        <img src={items.image} alt="" />
        </div>

        <div className="cardDetails">
            <section>
            <h3 className="cardName">{items.name}</h3>
            <p className="cardPrice">${items.price}</p>
            </section>

              {cartItemAmount === 0 ? 
                <>
                  <button className="addToCart" onClick={() => addToCart(items.id)}>
                    <object type="image/svg+xml" data={add} className="cart-icon" onClick={() => addToCart(items.id)}></object>
                  </button>
                </> : <>
                  <div className="addToCart active">
                    <button className="cartBtn" onClick={() => removeFromCart(items.id)}>-</button>
                    <input value={cartItemAmount} className='cartAmount'  onChange={(e) => updateCartItemCount(Number(e.target.value), items.id)}/>
                    <button className="cartBtn" onClick={() => addToCart(items.id)}>+</button>
                  </div>
                </>
              }              
        </div>
    </div>
  )
}


export default HomeCard