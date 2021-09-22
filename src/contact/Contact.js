import React from 'react';
import s from './Contact.module.css';
import Title from "../common/components/title/Title";


function Contact() {
    return (
        <div className={s.contact}>
            <div className={s.containerContact}>
                <Title title={'Contacts'}/>
                <div className={s.containerForm}>
                    <form action="" className={s.form}>
                        <input type="text"  placeholder="Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"/>{/* /# */}
                    </form>
                </div>
                <button className={s.button} type="submit">SUBMIT</button>
            </div>

        </div>
    );
}

export default Contact;