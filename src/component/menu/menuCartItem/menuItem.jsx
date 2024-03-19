import React from 'react'
import { ShopContext } from '../../../context/shopContext';
import { useContext } from 'react'
import './menuItem.css'


function MenuItem(items){

    const {addToCart, removeFromCart, cartItems, updateCartItemCount, mode} = useContext(ShopContext)

  return (
        
          // <div className="order" key={items.id}>
          <div className={mode === "night" ? "order dark" : "order"} key={items.id}>
            <div className="orderImg">
              <img src={items.img} alt="" />
            </div>
            <div className="orderMainDetails">
              <h3>{items.name}</h3>
            <h3 className="price">${items.price}</h3>
            </div>

              <section>
                 <button className="minus" onClick={() => removeFromCart(items.id)}>-</button>
                 <input value={cartItems[items.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), items.id)}/>
                 <button className="minus" onClick={() => addToCart(items.id)}>+</button>
              </section>

          </div>
  ) 
}


export default MenuItem