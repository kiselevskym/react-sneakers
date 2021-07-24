import React from "react";
import {Button} from "./index";
import {Link} from "react-router-dom";

const Empty = ({img, title, subtitle}) => {
    return (
        <div className={"empty"}>
            <div className="empty__img">
                <img src={img} alt="sad"/>
            </div>
            <div className="empty__title">
                {title}
            </div>
            <div className="empty__subtitle">
                {subtitle}
            </div>
            <div className="empty__btn">
                <Link to={'/'}>
                    <Button prev>Вернуться назад</Button>
                </Link>
            </div>
        </div>
    )
}

export default Empty