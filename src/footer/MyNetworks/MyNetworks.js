import React from "react";
import s from "../Footer.module.css";



export function MyNetworks(props) {
    return (
        <div>
            <div className={s.icons}>
                <div>{props.icon}</div>
            </div>
        </div>
    )
}

