import React, { useContext, useEffect, useRef } from 'react';
import './preload.css';
import logo from '../../assets/svgs/9921868_chef_hat_restaurant_cooking_kitchen_icon.svg';
import { ShopContext } from '../../context/shopContext';

const Preload = (
) => {
  const { mode, setMode } = useContext(ShopContext);
  const preloadBox = useRef(null);

  useEffect(() => {
    var time = new Date();
    if (time.getHours() > 19 || time.getHours() < 7) {
      setMode("night");
    } else {
      setMode("day");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      preloadBox.current.id = "preloadBoxActive";
    }, 6500);

    setTimeout(() => {
      preloadBox.current.id = "preloadBoxNone";
    }, 8000);
  }, []);

  return (
    <>
      <div className={mode === "night" ? "preloadBox dark" : "preloadBox"} ref={preloadBox}>
        <div className="preloadDiv"></div>
        <object type="image/svg+xml" data={logo} className="preload-icon"></object>
        <div className="text">
          <h3>Sweet<span>Eats</span></h3>
          <p className="slogan">satisfy your taste buds...</p>
        </div>
      </div>
    </>
  );
};

export default Preload;
