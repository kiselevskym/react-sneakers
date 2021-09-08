import React from "react";
import arrowPic from "../assets/arrow-next.svg"

const NextArrow = ({onClick}) => {
    return (
        <div className={'slick-next-custom'}
             onClick={onClick}>
            <img src={arrowPic} alt=""/>
        </div>
    );
}

const PrevArrow = () => (<div/>)

export {NextArrow, PrevArrow}