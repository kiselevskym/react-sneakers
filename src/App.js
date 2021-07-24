import React from "react";
import {Cart, Header} from "./components ";
import {Route} from "react-router-dom"
import {useDispatch} from "react-redux";
import {fetchItems} from "./redux/Slices/productsSlice";
import {Marked, Home, ShoppingList} from "./pages";

function App() {
    const [showCart, setShowCart] = React.useState(false)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchItems())
    }, [])


    const onShowCart = () => setShowCart(true)
    const onCloseCart = () => setShowCart(false)

    return (
        <div id={"wrapper"}>
            <Cart show={showCart} onCloseCart={onCloseCart}/>

            <div className="container">
                <Header onShowCart={onShowCart}/>
                <div className="content side-padding">
                    <Route path={'/'} exact render={() => <Home/>}/>
                    <Route path={'/favorite'} component={Marked}/>
                    <Route path={'/profile'} component={ShoppingList}/>
                </div>
            </div>
        </div>
    );
}


export default App;