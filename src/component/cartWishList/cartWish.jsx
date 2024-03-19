import React from 'react'
import './cartWish.css'
import Card from '../card/card'
import HomeCard from '../homeCard/homeCard'
import { ShopContext } from '../../context/shopContext'
import { data } from '../../db/db'
import { useContext } from "react"


export const CartWish = () => {
    
    const { cartItems, addToWishList, removeFromWishList, wishListItems, mode} = useContext(ShopContext)
    
    return (
        <div className={mode === "night" ? "cartWish dark" : "cartWish"}>
            <h2>My wishlist</h2>

            <div className="wishLists">
            {
              data.map((val) => {
                if(wishListItems[val.id] !== 0){
                  return (
                    <Card id={val.id} image={val.image} name={val.name} price={val.price} />
                  )
                }
              })
            }
            </div>
        </div>
    )
  }
  
