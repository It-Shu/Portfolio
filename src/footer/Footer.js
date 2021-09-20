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
                <h2 className={s.name}>Sergei Shutov</h2>
                <div className={s.socialIcons}>
                    <MyNetworks icon={<img className={s.icons} src={linkedinLogo} alt=""/>} />
                    <MyNetworks icon={<img className={s.icons} src={twitterLogo} alt=""/>}/>
                    <MyNetworks icon={<img className={s.icons} src={facebookLogo} alt=""/>}/>
                    <MyNetworks icon={<img className={s.icons} src={githubLogo} alt=""/>}/>
                </div>
                <div>Ⓒ 2021 все права защищены</div>
            </div>

        </div>
    )
}

export default Footer;