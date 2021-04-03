import React from 'react';
import s from "./Footer.module.css";
import Icons from "./icons/Icons"

function Footer() {
    return (
        <div className={s.containerFooter}>
            <div className={s.footer}>
                <h2 className={s.name}>Sergei Shutov</h2>
                <div className={s.socialIcons}>
                    <Icons title={"Linkedin"}/>
                    <Icons title={"Twitter"}/>
                    <Icons title={"Github"}/>
                    <Icons title={"Facebook"}/>
                </div>
                <div>Ⓒ 2021 все права защищены</div>
            </div>

        </div>
    )
}

export default Footer;