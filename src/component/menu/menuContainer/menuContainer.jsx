import React, { useState } from 'react'
import { data } from '../../../db/db'
import filterBtn from "../../../assets/svgs/filter-svgrepo-com.svg"
import allLogo from '../../../assets/svgs/burger-menu-svgrepo-com.svg'
import mainLogo from '../../../assets/svgs/french-fries-svgrepo-com.svg'
import burgerLogo from '../../../assets/svgs/burger-line-svgrepo-com.svg'
import dessertLogo from '../../../assets/svgs/cupcake-svgrepo-com.svg'
import drinksLogo from '../../../assets/svgs/soda-drink-svgrepo-com.svg'
import combosLogo from '../../../assets/svgs/burger-fast-fastfood-svgrepo-com.svg'
import './menuContainer.css'
import Card from "../../card/card"
import HomeCard from '../../homeCard/homeCard'
import { ShopContext } from '../../../context/shopContext'
import { useContext } from 'react'
import menuBanner from "../../../assets/images/webBanner.jpeg"
import { useLocation } from 'react-router-dom'

export const MenuContainer = () => {

    const {addToCart, removeFromCart, cartItems, updateCartItemCount, getTotalCartAmount, searchValue, setSearchValue, mode} = useContext(ShopContext)
    
    const [menuselectedcategory, setMenuSelectedCategory] = useState(searchValue);

  const totalAmount = getTotalCartAmount()

  const location = useLocation();
  return (
    <>
    <div className={mode === "night" ? "menuBox dark" : "menuBox"}>
    {/* <div className="menuBox"> */}
        <div className="menuSearchBox">
            <input type="text" placeholder='Search menu' defaultValue={searchValue} onChange={(event) => setMenuSelectedCategory(event.target.value)}/>
            <button className="filterBtn">
            <object type="image/svg+xml" data={filterBtn} className="filterLogo"></object>
            </button>
        </div>

    {/* <div className="menuPageBanner">
        <img src={menuBanner} alt="" />
    </div> */}

        <div className='menuBar'>            
            <button className={menuselectedcategory === "" ? "menuCategory active" : "menuCategory"} onClick={() => setMenuSelectedCategory("")}>
                <h3>All</h3>
                <object type="image/svg+xml" data={allLogo} className="menu-logo-icon"></object>
            </button>

            <button className={menuselectedcategory === "burgers" ? "menuCategory active" : "menuCategory"} onClick={() => setMenuSelectedCategory("burgers")}>
                <h3>Burgers</h3>
                <object type="image/svg+xml" data={burgerLogo} className="menu-logo-icon"></object>
            </button>

            <button className={menuselectedcategory === "combos" ? "menuCategory active" : "menuCategory"} onClick={() => setMenuSelectedCategory("combos")}>
                <h3>Combos</h3>
                <object type="image/svg+xml" data={combosLogo} className="menu-logo-icon"></object>
            </button>

            <button className={menuselectedcategory === "sides" ? "menuCategory active" : "menuCategory"} onClick={() => setMenuSelectedCategory("sides")}>
                <h3>Sides</h3>
                <object type="image/svg+xml" data={mainLogo} className="menu-logo-icon"></object>
            </button>

            <button className={menuselectedcategory === "desserts" ? "menuCategory active" : "menuCategory"} onClick={() => setMenuSelectedCategory("desserts")}>
                <h3>Dessert</h3>
                <object type="image/svg+xml" data={dessertLogo} className="menu-logo-icon"></object>
            </button>

            <button className={menuselectedcategory === "drinks" ? "menuCategory active" : "menuCategory"} onClick={() => setMenuSelectedCategory("drinks")}>
                <h3>Drinks</h3>
                <object type="image/svg+xml" data={drinksLogo} className="menu-logo-icon"></object>
            </button>
        </div>

        <div className="menuList">
            {
                    
                    data
                    .filter((val) => {
                        if (menuselectedcategory === "") {
                            return val;
                        }else if(val.category.toLocaleLowerCase().includes(menuselectedcategory.toLocaleLowerCase()) || val.name.toLocaleLowerCase().includes(menuselectedcategory.toLocaleLowerCase())){
                            return val;
                        }
                    })
                    .map((val) => {
    
                        return(
                            <HomeCard key={val.id} id={val.id} image={val.image} name={val.name} price={val.price} />
                        )
                    })
                }
        </div>


    </div>
    
    </>
  )
}
