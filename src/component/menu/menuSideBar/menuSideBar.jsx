import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './menuSideBar.css'
import '../../card/card.css'
import { data } from '../../../db/db'
import NextBtn from '../../../assets/svgs/4829869_arrow_next_right_icon.svg'
import allLogo from '../../../assets/svgs/burger-menu-svgrepo-com.svg'
import mainLogo from '../../../assets/svgs/french-fries-svgrepo-com.svg'
import burgerLogo from '../../../assets/svgs/burger-line-svgrepo-com.svg'
import dessertLogo from '../../../assets/svgs/cupcake-svgrepo-com.svg'
import drinksLogo from '../../../assets/svgs/soda-drink-svgrepo-com.svg'  
import combosLogo from '../../../assets/svgs/burger-fast-fastfood-svgrepo-com.svg'  
// import Card from "../../card/card"
import HomeCard from "../../homeCard/homeCard"
import { ShopContext } from "../../../context/shopContext"
import { useContext } from "react"


export const MenuSideBar = () => {
    const [selectedcategory, setSelectedCategory] = useState("");
    const {mode} = useContext(ShopContext)

  return (
    <>
    <div className={mode === "night" ? "menuContainer dark" : "menuContainer"}>
        
        <h3 className="menuTopic">Our <span>Menu</span></h3>
        {/* <p className="menuSubHead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae illo corrupti ipsum repellat placeat, eligendi, temporibus necessitatibus cum et,</p> */}
        <div className="menu">

            <div className="sideBarContain">
                <div className='sideBar'>
                
                    <button className={selectedcategory === "" ? "category active" : "category"} onClick={() => setSelectedCategory("")}>
                        <h3>All</h3>
                        <object type="image/svg+xml" data={allLogo} className="side-logo-icon"></object>
                    </button>

                    <button className={selectedcategory === "burgers" ? "category active" : "category"} onClick={() => setSelectedCategory("burgers")}>
                        <h3>Burgers</h3>
                        <object type="image/svg+xml" data={burgerLogo} className="side-logo-icon"></object>
                    </button>

                    <button className={selectedcategory === "combos" ? "category active" : "category"} onClick={() => setSelectedCategory("combos")}>
                        <h3>Combos</h3>
                        <object type="image/svg+xml" data={combosLogo} className="side-logo-icon"></object>
                    </button>

                    <button className={selectedcategory === "sides" ? "category active" : "category"} onClick={() => setSelectedCategory("sides")}>
                        <h3>Sides</h3>
                        <object type="image/svg+xml" data={mainLogo} className="side-logo-icon"></object>
                    </button>

                    <button className={selectedcategory === "desserts" ? "category active" : "category"} onClick={() => setSelectedCategory("desserts")}>
                        <h3>Dessert</h3>
                        <object type="image/svg+xml" data={dessertLogo} className="side-logo-icon"></object>
                    </button>

                    <button className={selectedcategory === "drinks" ? "category active" : "category"} onClick={() => setSelectedCategory("drinks")}>
                        <h3>Drinks</h3>
                        <object type="image/svg+xml" data={drinksLogo} className="side-logo-icon"></object>
                    </button>
                </div>
            </div>

            <div className="menu-list">
                {
                    
                    data
                    .filter((val) => {
                        if (selectedcategory === "") {
                            return val;
                        }else if(val.category.toLocaleLowerCase().includes(selectedcategory.toLocaleLowerCase())){
                            return val;
                        }
                    })
                    .slice(0, 8)
                    .map((val) => {

                        return(
                            <HomeCard key={val.id} id={val.id} image={val.image} name={val.name} price={val.price} />
                        )
                    })
                }
            </div>

        </div>

        <button className="book">
        <Link to="/Menu">See more</Link>
        {/* <Link to="/Menu" className="seeMore">See more</Link> */}
        <section><object type="image/svg+xml" data={NextBtn} className="next-icon"></object></section>
        </button>
        
    </div>
    </>
  )
}

