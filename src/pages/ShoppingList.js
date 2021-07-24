import React from "react";
import picture from "../assets/image 10.png";
import {Empty, ProductItem} from "../components ";
import {useDispatch, useSelector} from "react-redux";
import {toggleMarked} from "../redux/Slices/markedSlice";
import {addToCart} from "../redux/Slices/cartSlice";

const ShoppingList = () => {
    const {items ,markedItems, itemsCart} = useSelector(({shoppingList, marked, cart})=>({
        markedItems: marked.items,
        items: shoppingList.items,
        itemsCart: cart.items
    }))

    const dispatch = useDispatch()



if (!Object.keys(items).length) return <Empty img={picture}
                                              title={"У вас нет заказов"}
                                              subtitle={"Вы нищеброд?   Оформите хотя бы один заказ."}/>
return (<div className={"favorite"}>
    <div className="favorite-title">Мои покупки</div>
    <div className="profile-items product-items">
        {Object.keys(items).map((key) => <ProductItem key={items[key].id}
                                                      name={items[key].name}
                                                      price={items[key].price}
                                                      img={items[key].imageUrl}
                                                      toggleMarked={() => dispatch(toggleMarked(items[key].id))}
                                                      isMarked={markedItems[items[key].id]}
                                                      addToCart={() => dispatch(addToCart(items[key]))}
                                                      addedToCart={itemsCart[items[key].id]}/>)}
    </div>
</div>)
}

export default ShoppingList