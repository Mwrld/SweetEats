import React, { useContext } from 'react'
import './background.css'
import { ShopContext } from '../../context/shopContext'


const Background = () => {

    const {mode} = useContext(ShopContext)

  return (
    <div className={mode === "night" ? "backgroundBox dark" : "backgroundBox"}>
      
    </div>
  )
}

export default Background
