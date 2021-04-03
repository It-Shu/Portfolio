import React from 'react';
import s from './Project.module.css';


function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a href="" className={s.link}>View</a>
            </div>
            <div className={s.protectsTitle}>{props.title}</div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Project;