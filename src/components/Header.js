import React from "react";
import logo from "../assets/Group 128.png";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {toBeautiNum} from "../beautiNums";


const Header = ({onShowCart}) => {
    const totalPrice = useSelector(({cart}) => cart.totalPrice)


    const activeStyle = {
        color: "#a0d5d2"
    }
    return (
        <div className="header-wrapper">
            <div className="header side-padding">
                <div className="header-logo">
                    <Link to={'/'}>
                        <img src={logo} alt=""/>
                    </Link>
                </div>

                <div className="header-menu">
                    <ul>
                        <li onClick={onShowCart}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="header-menu__cart-cost">{toBeautiNum(totalPrice)} руб</span>
                        </li>
                        <li>
                            <NavLink activeStyle={activeStyle} style={{color: "silver"}} to={'/favorite'}>
                                <i style={{color: "inherit"}} className="far fa-heart"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={activeStyle} style={{color: "silver"}} to={'/profile'}>
                                <i style={{color: "inherit"}} className="far fa-user-circle"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header