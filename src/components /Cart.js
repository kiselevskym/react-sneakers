import React, {useEffect} from "react";
import {CartProductItem} from "./CartProductItem";
import {Button} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {toBeautiNum} from "../beautiNums";
import {removeAllFromCart, removeFromCart} from "../redux/Slices/cartSlice";
import {addToShoppingList} from "../redux/Slices/shoppingListSlice";
import classNames from "classnames";
import {Link} from "react-router-dom";

const Cart = ({show, onCloseCart}) => {
    const {items, totalPrice} = useSelector(({cart}) => cart)
    const ref = React.createRef()
    const dispatch = useDispatch()

    const checkout = () => {
        dispatch(addToShoppingList(items))
        dispatch(removeAllFromCart())
        onCloseCart()
    }

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (ref.current === e.target) {
                onCloseCart()
            }
        }, )
    })


    if (show) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = "scroll"
        return null
    }
    const itemsElement = Object.keys(items).map((key, index) =>
        <CartProductItem key={items[key].id}
                         name={items[key].name}
                         imageUrl={items[key].imageUrl}
                         price={items[key].price}
                         removeFromCart={() => dispatch(removeFromCart(items[key].id))}/>
    )



    return (
        <div className="cart-wrapper" ref={ref}>
            <div className="cart">
                <div className="cart-title">
                    Корзина
                </div>
                <div className="cart-items">
                    {itemsElement.length?itemsElement: "Корзина пустая :("}
                </div>
                <div className="cart-order">
                    <div className="cart-order-inner">
                        <div className="cart-order-item">
                            <div className="cart-order-item__title">Итого:</div>
                            <span className="cart-order-dashed"></span>
                            <div className="cart-order-item__price">{toBeautiNum(totalPrice)} руб.</div>
                        </div>
                        <div className="cart-order-item">
                            <div className="cart-order-item__title">Налог 5%:</div>
                            <span className="cart-order-dashed"></span>
                            <div className="cart-order-item__price">{toBeautiNum(Math.round(totalPrice / 100 * 5))} руб.</div>
                        </div>
                        <div className="cart-order__btn">
                            <Link to={'/profile'}>
                            <Button onClick={checkout}   className={classNames({"btn-disabled": !itemsElement.length})} next>Оформить заказ</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart