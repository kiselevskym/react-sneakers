import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {NextArrow, PrevArrow} from "./Arrows";

import pic from "../assets/slide.png"
import disney from "../assets/disney.png"


const SlickSlider = () => {
    const settings = {
        speed: 300,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        draggable: false
    };
    return (
        <div className='slider'>
            <Slider {...settings}>
                <div>

                    <div className={'slideOne slide'}>
                        <div className={'disney'}><img src={disney} alt=""/></div>
                        <div className="slideOne-info">
                            <div className="slideOne-title">
                                Stan Smith,
                                <div className={'text-black'}>Forever!</div>
                            </div>
                            <div className={"slideOne-btn"}>
                                КУПИТЬ
                            </div>
                        </div>
                        <div className="slideOne-pic">
                            <img src={pic} alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'slideOne slide'}>

                        <div className="slideOne-info">
                            <div className="slideOne-title">
                                Stan Smith,
                                <div className={'text-black'}>Forever!</div>
                            </div>
                            <div className={"slideOne-btn"}>
                                КУПИТЬ
                            </div>
                        </div>
                        <div className="slideOne-pic">
                            <img src={pic} alt=""/>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SlickSlider