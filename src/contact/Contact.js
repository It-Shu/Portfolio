import React from 'react';
import s from './Contact.module.css';


function Contact() {
    return (
        <div className={s.contact}>
            <div className={s.containerContact}>
                <h2 className={s.contactTitle}>Contact</h2>
                <div className={s.containerForm}>
                    <form action="" className={s.form}>
                        <input type="text"  placeholder="Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"/>{/* /# */}
                    </form>
                </div>
                <button className={s.button} type="submit">Submit</button>
            </div>

        </div>
    );
}

export default Contact;