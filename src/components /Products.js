import React from "react";
import {ProductItem} from "./index";
import ProductItemLoader from "./ProductItemLoader";
import {useDispatch, useSelector} from "react-redux";
import {toggleMarked} from "../redux/Slices/markedSlice";
import {addToCart} from "../redux/Slices/cartSlice";
import {toBeautiNum} from "../beautiNums";

const Products = () => {

    const {markedItems, itemsProduct, isLoadedProduct, itemsCart} = useSelector((state)=>({
        markedItems: state.marked.items,
        itemsProduct: state.products.items,
        isLoadedProduct: state.products.isLoaded,
        itemsCart: state.cart.items
    }))
    const dispatch = useDispatch()

    const addToCartHandler = (item) => dispatch(addToCart(item))
    const toggleMarkedHandler = (id) => dispatch(toggleMarked(id))


    return (
        <div className="products">
            <div className="product-title">Все кроссовки</div>
            <div className="product-items">
                {isLoadedProduct ? itemsProduct.map((e) =>
                    <ProductItem key={e.id}
                                 name={e.name}
                                 price={toBeautiNum(e.price)}
                                 img={e.imageUrl}
                                 toggleMarked={() => toggleMarkedHandler(e.id)}
                                 isMarked={markedItems[e.id]}
                                 addToCart={() => addToCartHandler(e)}
                                 addedToCart={itemsCart[e.id]}
                                 />
                ) : Array(10).fill(0).map((e, _) => <ProductItemLoader key={_}/>)}
            </div>
        </div>
    )
}

export default Products