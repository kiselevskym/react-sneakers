import React from "react";
import "./Button.sass"
import classNames from "classnames";

const Button = ({children, next, prev, onClick, className}) => {

    return (
        <div className={classNames("btn", className)} onClick={onClick}>
            {prev ? <span className={"btn-arrow btn-prev"}>
                <i className="fas fa-arrow-left"></i>
            </span> : ""}
            {children}
            {next ? <span className={"btn-arrow btn-next"}>
                <i className="fas fa-arrow-right"></i>
            </span> : ""}
        </div>
    )
}

export default Button