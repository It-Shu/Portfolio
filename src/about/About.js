import React from 'react';
import s from './About.module.css';


function About() {
    return (
        <div className={s.aboutBlock}>
            <h1>About</h1>
            <div>
                <p>some text</p>
            </div>
            <h1>TypeScript React junior Developer</h1>
            <p>some text</p>
            <ul>
                <li>
                    Birthday: 8 October 1990
                </li>
                <li>
                    Website: www.?????.com
                </li>
                <li>
                    Phone: +7 1234567890
                </li>
                <li>
                    City: Moscow, Russia
                </li>
                <li>
                    Age: 30
                </li>
                <li>
                    Mail: it.shustov@gmail.com
                </li>
            </ul>
            <p>some text</p>
        </div>
    )
}

export default About;