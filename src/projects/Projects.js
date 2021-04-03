import React from 'react';
import s from './Projects.module.css';
import Project from "../projects/project/Project";


function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <h2 className={s.projectsTitle}>Projects</h2>
                <div className={s.projects}>
                    <Project title={"Social Network"} description={"some text"}/>
                    <Project title={"TodoList"} description={"some text"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;