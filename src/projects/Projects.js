import React from 'react';
import s from './Projects.module.css';
import Project from "../projects/project/Project";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project title={"Social Network"} description={"some text"}/>
                    <Project title={"TodoList"} description={"some text"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;