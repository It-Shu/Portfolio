import React from "react";
import s from "../Footer.module.css";



function Icons(props) {
    return (
        <div>
            <div className={s.icons}>
                <div>{props.title}</div>
            </div>
        </div>
    )
}

export default Icons;
