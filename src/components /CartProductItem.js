import React from "react";
import {ActionButton} from "./index";
import {toBeautiNum} from "../beautiNums";


export const CartProductItem = ({name, imageUrl, price, removeFromCart}) => {
    return (
        <div className="cart-product-item">
            <div className="cart-product-item__img">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="cart-product-item__info">
                <div className="cart-product-item__info-title">
                    {name}
                </div>
                <div className="cart-product-item__info-price">
                    {toBeautiNum(price)} руб.
                </div>
            </div>
            <div className="cart-product-item__close" onClick={removeFromCart}>
                <ActionButton><i className="fas fa-times"></i></ActionButton>
            </div>
        </div>
    )
}