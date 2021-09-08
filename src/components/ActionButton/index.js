import React from "react";
import "./ActionButton.sass"
import classNames from "classnames";

const ActionButton = ({children, className}) => {


    return (
        <div className={classNames('action-btn',className)} >
            {children}
            {/*{close ? <i className="fas fa-times"></i> : ""}*/}
            {/*{add ? <i className="fas fa-plus"></i> : ""}*/}
            {/*{prev ? <i className="fas fa-chevron-left"></i> : ""}*/}
            {/*{like ? <i className="far fa-heart"></i> : ""}*/}
        </div>
    )
}

export default ActionButton