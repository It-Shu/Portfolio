import React from 'react';
import s from './Project.module.css';


function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a href="" className={s.link}>View</a>
            </div>
            <div className={s.projectText}>
                <h3 className={s.protectsTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
}

export default Project;