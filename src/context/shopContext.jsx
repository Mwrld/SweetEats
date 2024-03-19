import React, { createContext, useState } from 'react'
import { data } from '../db/db'
import { voucherDb } from '../db/voucher';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < data.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const getDefaultWishList = () => {
    let wishList = {};
    for (let i = 1; i < data.length + 1; i++) {
        wishList[i] = 0;
    }
    return wishList;
};


export const ShopContextProvider = (items) => {

    const [cartItems, setCartItems] = useState(getDefaultCart);
    const [wishListItems, setWishListItems] = useState(getDefaultWishList);
    const [paymentType, setPaymentType] = useState("Card");
    const [voucherTest, setVoucherTest] = useState();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userTel, setUserTel] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userStateAddress, setUserStateAddress] = useState("Lagos");
    const [userLocalAddress, setUserLocalAddress] = useState("");
    const [fullPrice, setFullPrice] = useState("");
    const [cardType, setCardType] = useState("credit");
    const [searchValue, setSearchValue] = useState("");
    const [isBook, setIsBook] = useState("false")
    const [dateB, setDateB] = useState("");
    const [timeB, setTimeB] = useState("");
    const [guestNoB, setGuestNoB] = useState("");
    const [mode, setMode] = useState("");

    

    let voucherDiscount = '';
    
    for (let i = 0; i < voucherDb.length; i++) {
        // const element = voucherDb[i];
        if (voucherDb[i].code === voucherTest) {
            voucherDiscount = voucherDb[i].discount
        }
        
    }


    const getTotalCartAmount = () => {
        let totalAmount  = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = data.find((items) => items.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }
    
    // const finalAmount = totalAmount + (totalAmount * (voucher/100));

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1} ))
    }

    const addToWishList = (itemId) => {
        setWishListItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1} ))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
    
    const removeCompletelyFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] = 0}));
    }

    const removeFromWishList = (itemId) => {
        setWishListItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    
    const updateWishListCount = (newAmount, itemId) => {
        setWishListItems((prev) => ({...prev, [itemId]: newAmount}))
    }



    const contextValue = {voucherDiscount, voucherTest, setVoucherTest ,paymentType, setPaymentType ,cartItems, addToCart, removeFromCart, removeCompletelyFromCart, getTotalCartAmount, updateCartItemCount, addToWishList, removeFromWishList, updateWishListCount, wishListItems, fullPrice, setFullPrice, userName, setUserName, userEmail, setUserEmail, userPassword, setUserPassword, userStateAddress, setUserStateAddress, userLocalAddress, setUserLocalAddress, userTel, setUserTel, searchValue, setSearchValue, cardType, setCardType, isBook, setIsBook, dateB, setDateB, timeB, setTimeB, guestNoB, setGuestNoB, mode, setMode}
    

  return (
    <ShopContext.Provider value={contextValue}>{items.children}</ShopContext.Provider>
  )
}
