import React from "react";

function Body(props){


    return(
        <div className="body-outer-div">
            <div className="div-for-pictures">
                <div className="first shoe"><img src="./images/image-product-1.jpg" alt="Product-first-img" onClick={props.onClickImg}/></div>
                <div className="second shoe"><img src="./images/image-product-1.jpg" alt="Product-first-img" onClick={props.onClickImg}/></div>
                
                <div className="third shoe"><img src="./images/image-product-2.jpg" alt="Product-second-img" onClick={props.onClickImg}/></div>
                <div className="fourth shoe"><img src="./images/image-product-3.jpg" alt="Product-third-img" onClick={props.onClickImg} /></div>
                <div className="fifth shoe"><img src="./images/image-product-4.jpg" alt="Product-fourth-img" onClick={props.onClickImg} /></div>
                
            </div>

            <div className="div-for-item-description">
                <h4>SNEAKER COMPANY</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <h2>${props.price}</h2><div className="Discount-amount">50%</div>
                <h3>${props.price * 2}.00</h3>
                <div className="Two-buttons">
                <div className="item-counter">
                <button onClick={props.onClickMinus}>-</button>
                    <h5>{props.count}</h5>
                    <button onClick={props.onClickPlus}>+</button>
                </div>
                
                <button className="cart-button" onClick={props.onClickCart}><img src="./images/icon-cart-white.svg" alt="cart icon" />Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Body;