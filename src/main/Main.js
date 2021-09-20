import React from 'react';
import s from './Main.module.css';
import sC from '../common/styles/Container.module.css';


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sC.container}>
            <div className={s.greeting}>
                <span>Hello...</span>
                <h1>My name is Sergei Shustov</h1>
                <p>i'm Front-end Developer...</p>
            </div>
            <div className={s.photo}>Photo</div>
            </div>
        </div>
    );
}

export default Main;