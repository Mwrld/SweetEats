import React from 'react'
import pic2 from '../../assets/images/customers/1654515792300.jfif'
import pic3 from '../../assets/images/customers/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.avif'
import './reviewCard.css'

function ReviewCard(items) {
  return (
    <>
    <div className='reviewCard' key={items.id}>

        <img src={items.img} alt="" />

      <div className="cReview">
        <p>{items.comment}</p>
        <h4>{items.name}</h4>
      </div>
    </div>
    </>
  )
}

export default ReviewCard