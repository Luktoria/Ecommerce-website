import React, { useState } from "react";
import LightBox from './Lightbox-gallery';
import Nav from "./Nav";
import Body from "./Body";

function App(){

    
    const [check, setCheck] = useState(false);
    const [visibleCart, setVisibleCart] = useState(false);
    const [toggler, setToggler] = useState(false);

    const price = '125.00';
    
    const handleClick = () => {
        count >= 1 ? setCheck(true) : setCheck(false);
    }

    const avatarClick = () => {
        setVisibleCart(prevVisibleCart => !prevVisibleCart); 
    }

    const deleteFunction = () => {
        setCheck(false);
    }

    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count > 0 ? count - 1 : 0); 
    }

    const increase = () => {
    setCount(count + 1);
    }

    function lightBoxOpener(){
        setToggler(!toggler);
    }


    return(
        <>

        <Nav
         deleteItems = {deleteFunction}
         clickAvatar = {avatarClick}
         price = {price}
         count = {count}
         check = {check}
         visibleCart = {visibleCart}
         />

    
        <Body 
        price = {price}
        count = {count}
        onClickPlus = {increase}
        onClickMinus = {decrease}
        onClickCart = {handleClick}
        onClickImg = {lightBoxOpener}
        />

        <LightBox
        toggler = {toggler}
        openLightBox = {lightBoxOpener}
        sources = {[
            "./images/image-product-1.jpg",
            "./images/image-product-2.jpg",
            "./images/image-product-3.jpg",
            "./images/image-product-4.jpg"
        ]}
        />
        </>
    )
}

export default App;