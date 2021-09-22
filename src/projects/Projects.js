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
                    <Project title={"Social Network"} description={"Social network is an online platform that is used for communication ," +
                    " dating, creating social relations between people who have similar interests or offline connections"}/>
                    <Project title={"TodoList"} description={"some text"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;