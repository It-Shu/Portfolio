import React from 'react';
import s from './Skills.module.css';
import Skill from './skill/Skill'

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.skillsTitle}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"some text"}/>
                    <Skill title={"React"} description={"some text"}/>
                    <Skill title={"Redux"} description={"some text"}/>
                </div>
                <div className={s.skills}>
                    <Skill title={"TS"} description={"some text"}/>
                    <Skill title={"CSS"} description={"some text"}/>
                    <Skill title={"HTML"} description={"some text"}/>
                </div>
                <div className={s.skills}>
                    <Skill title={"MaterialUI"} description={"some text"}/>
                    <Skill title={"UnitTesting"} description={"some text"}/>
                    <Skill title={"React-Redux"} description={"some text"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;