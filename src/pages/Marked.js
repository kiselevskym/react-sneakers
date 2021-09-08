import React from "react";
import {Empty, ProductItem} from "../components";
import {toggleMarked} from "../redux/Slices/markedSlice";
import ProductItemLoader from "../components/ProductItemLoader";
import {useDispatch, useSelector} from "react-redux";
import picture from "../assets/image 9.png"
import {addToCart} from "../redux/Slices/cartSlice";

const Marked = () => {
    const {markedItems, itemsProduct, isLoadedProduct, itemsCart} = useSelector(({marked, products, cart}) => ({
        markedItems: marked.items,
        itemsProduct: products.items,
        isLoadedProduct: products.isLoaded,
        itemsCart: cart.items
    }))
    const dispatch = useDispatch()

    if (!Object.keys(markedItems).length) return <Empty img={picture} title={"Закладок нет :("}
                                                        subtitle={"Вы ничего не добавляли в закладки"}/>

    return (
        <div className={"favorite"}>
            <div className="favorite-title">Мои закладки</div>
            <div className="favorite-items product-items">
                {isLoadedProduct ? itemsProduct.map((e) =>
                    markedItems[e.id] ? <ProductItem key={e.id}
                                                     name={e.name}
                                                     price={e.price}
                                                     img={e.imageUrl}
                                                     toggleMarked={() => dispatch(toggleMarked(e.id))}
                                                     isMarked={markedItems[e.id]}
                                                     addToCart={() => dispatch(addToCart(e))}
                                                     addedToCart={itemsCart[e.id]}/> : ""
                ) : Array(10).fill(0).map((e, _) => <ProductItemLoader key={_}/>)}
            </div>
        </div>)
}

export default Marked