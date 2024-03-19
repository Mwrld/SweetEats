import React from 'react'
import heart from '../../assets/svgs/heart-alt-svgrepo-com.svg'
import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'
import './cartItems.css'
import { type } from '@testing-library/user-event/dist/type'


function CartItems(items){

    const {addToCart, removeFromCart, removeCompletelyFromCart, cartItems, updateCartItemCount, addToWishList, removeFromWishList, wishListItems, wishListItemAmount, mode} = useContext(ShopContext)

  return (
        <>
          <div className={mode === "night" ? "cartorder dark" : "cartorder"} key={items.id}>
            <div className="cartImage">
              <img src={items.img} alt="" />
            </div>
            <div className="cartorderMainDetails">
              <p>{items.name}</p>
            <p className="category">Category: {items.category}</p>
                <div className="cartorderFunc">
                    <button className="minus" onClick={() => removeCompletelyFromCart(items.id)}>Remove from Cart  <span>|</span></button>
                    
                    {wishListItems[items.id] === 0 ? 
                        <>
                        <button className="cartorderWishListBtn" onClick={() => addToWishList(items.id)}><object type="image/svg+xml" data={heart} className="wishIcon"></object> Add to Wishlist</button>
                        </> : <>
                        <button className="cartorderWishListBtn active" onClick={() => removeFromWishList(items.id)}><object type="image/svg+xml" data={heart} className="wishIcon"></object> Remove from Wishlist</button>
                        </>
                    }
                </div>
            </div>

              <section>
                <input value={cartItems[items.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), items.id)} type="number"/>
                <p className="price">${items.price}</p>
              </section>

          </div>
        </>
  ) 
}


export default CartItems