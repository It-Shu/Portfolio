import React from 'react';
import s from './Skills.module.css';
import Skill from './skill/Skill'
import ReactLogo from '../images/ReactLogo.png'
import ReduxLogo from '../images/ReduxLogo.png'
import JSLogo from '../images/JSLogo.png'
import TSLogo from '../images/TSLogo.png'
import CSSLogo from '../images/CSSLogo.png'
import HTMLLogo from '../images/HTMLLogo.png'

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <div className={s.skillsTitle}>
                    <h2>Skills</h2>
                </div>
                <div className={s.skills}>
                    <Skill
                        title={"JavaScript"}
                        description={"some text"}
                        icon={<img className={s.img} src={JSLogo} alt=""/>}
                    />
                    <Skill
                        title={"React"}
                        description={"some text"}
                        icon={<img className={s.img} src={ReactLogo} alt=""/>}
                    />
                    <Skill
                        title={"CSS"}
                        description={"some text"}
                        icon={<img className={s.css} src={CSSLogo} alt=""/>}
                    />
                </div>
                <div className={s.skills}>
                    <Skill
                        title={"TypeScript"}
                        description={"some text"}
                        icon={<img className={s.img} src={TSLogo} alt=""/>}
                    />
                    <Skill
                        title={"Redux"}
                        description={"some text"}
                        icon={<img className={s.img} src={ReduxLogo} alt=""/>}
                    />
                    <Skill
                        title={"HTML"}
                        description={"some text"}
                        icon={<img className={s.css} src={HTMLLogo} alt=""/>}
                    />
                </div>
                {/* <div className={s.skills}>
                    <Skill
                        title={"MaterialUI"}
                        description={"some text"}
                        icon={<img className={s.img} src={ReactLogo} alt=""/>}
                    />
                    <Skill
                        title={"UnitTesting"}
                        description={"some text"}
                        icon={<img className={s.img} src={ReactLogo} alt=""/>}
                    />
                    <Skill
                        title={"React-Redux"}
                        description={"some text"}
                        icon={<img className={s.img} src={ReactLogo} alt=""/>}
                    />
                </div>*/}
            </div>
        </div>
    );
}

export default Skills;