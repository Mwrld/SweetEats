import React, { useContext } from 'react'
import './review.css'
import ReviewCard from '../reviewsCard/reviewCard'
import { CustomerReviews } from '../../db/review'
import { ShopContext } from '../../context/shopContext'

export const Review = () => {
  
  const {mode} = useContext(ShopContext)
  
  return (
    <>
    <div className={mode === "night" ? "reviewBox dark" : "reviewBox"}>
      <h3 className="menuTopic">Customer <span>review</span></h3>
      <div className="reviews">
        {/* <ReviewCard/> */}
        {
                    
            CustomerReviews
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((val) => {

                return(
                    <ReviewCard key={val.id} id={val.id} img={val.img} name={val.name} comment={val.comment} />
                )
            })
        }
      </div>
    </div>
    </>
  )
}
