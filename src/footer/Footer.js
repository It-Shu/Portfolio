import React from 'react';
import s from "./Footer.module.css";
import {MyNetworks} from "./MyNetworks/MyNetworks"
import linkedinLogo from '../images/linkedin-logo.png'
import twitterLogo from '../images/twitter-logo.png'
import facebookLogo from '../images/facebook-logo.png'
import githubLogo from '../images/github-logo.png'

function Footer() {
    return (
        <div className={s.containerFooter}>
            <div className={s.footer}>
                <h2 className={s.name}>Sergei Shustov</h2>
                <div className={s.socialIcons}>
                    <MyNetworks icon={<a href="https://www.linkedin.com/in/sergei-shustov-86710b1ba/" target="_blank"><img className={s.icons} src={linkedinLogo} alt=""/></a>} />
                    <MyNetworks icon={<a href="https://twitter.com/?lang=en" target="_blank"><img className={s.icons} src={twitterLogo} alt=""/></a>}/>
                    <MyNetworks icon={<a href="https://www.facebook.com/" target="_blank"><img className={s.icons} src={facebookLogo} alt=""/></a>}/>
                    <MyNetworks icon={<a href="https://github.com/It-Shu" target="_blank"><img className={s.icons} src={githubLogo} alt=""/></a>}/>
                </div>
                <div>Ⓒ 2021 все права защищены</div>
            </div>

        </div>
    )
}

export default Footer;