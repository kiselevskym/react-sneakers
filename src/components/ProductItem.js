import React from "react";
import {ActionButton} from "./index";
import {toBeautiNum} from "../beautiNums";
import classNames from "classnames";

const ProductItem = ({name, img, price, toggleMarked, isMarked, addToCart, addedToCart}) => {

    return (
        <div className="product-item">
            <div className="product-item__like" onClick={toggleMarked}>
                <ActionButton className={classNames({"red": isMarked})}>{!isMarked ? <i className="far fa-heart"></i> :
                    <i className="fas fa-heart"></i>}</ActionButton>

            </div>
            <div className="product-item__image">
                <img src={img} alt=""/>
            </div>
            <div className="product-item__title">{name}</div>
            <div className="product-item__main">
                <div className="product-item__price">
                    <div className="product-item__price-word">ЦЕНА:</div>
                    <div className="product-item__price-price">{toBeautiNum(price)} руб.</div>
                </div>
                <div className="product-item__btn" onClick={()=>addToCart()}>
                    <ActionButton className={classNames({"green": addedToCart},)}>{addedToCart ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>}</ActionButton>
                </div>
            </div>
        </div>
    )
}
//
export default ProductItem