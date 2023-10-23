import React from "react";

function Nav(props){

    function alertFunction(){
        alert('Hi! Since this is only a fictional website, the menu options and the checkout button are for view-only. Thank you for trying them out!');
}

return (

    <div className="Nav-div">
    <div className="nav-items-wrap">
    <nav>
        <img className="hamburger-menu" src='./images/icon-menu.svg' alt="mobile hamburger icon" onClick={alertFunction} />
        <div className="mobile-menu">
            <span>X</span>
        <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Woman</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
        </div>
    <img className="logo-img" src="./images/logo.svg" alt="Sneaker logo" />
    <ul onClick={alertFunction}>
        <li>Collections</li>
        <li>Men</li>
        <li>Woman</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
    <div className="navbar-imgs">
        <div className="cart-iconcounter">
        <img className="cart-icon" src="./images/icon-cart.svg" alt="cart-icon" />

        { props.check  === true ?  
         <div className="cart-counter">{props.count}</div> : null
        } </div>

        <img className="avatar" src="./images/image-avatar.png" alt="avatar-img" onClick={props.clickAvatar} />
    </div>
    { props.visibleCart === true ?
        <div className="Cart-inside">
        <div className="container for-cart-p">
            <p>Cart</p>
            </div>
            <hr />

            { props.check === true ?

            <div className="container for-cart-content-active" >
            <img src="./images/image-product-1.jpg" className="product-in-cart-img" alt="product in cart" />
            <div className="cart-details">
            <p className="item-in-cart-p upper">Fall Limited Edition Sneakers</p>
            <p className="item-in-cart-p">$ {props.price} x {props.count} <span>${props.price*props.count}.00</span></p>
            <img className="delete-icon" src="./images/icon-delete.svg" alt="delete-icon" onClick={props.deleteItems} />
            </div>
            <button onClick={alertFunction} >Checkout</button>
            </div> :  
             <div className="container for-cart-content" >
            <p>Your cart is empty.</p>
            </div>
            }

        </div> : null }

        </div> 
    
    <hr className="bigLine" />
</div>
    )
}

export default Nav;