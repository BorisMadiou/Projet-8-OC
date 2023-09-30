/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import './contact.scss';


function Contact ({ contact }) {
    return (
        <div className="contact">
            <h1 className="title"id='contact'>CONTACT</h1>
            <div className="contact-text">
                <h2 className="name">{contact.name}</h2>
                <p className="adress">{contact.adress}</p>
                <a href="mailto:borismadiou@gmail.com"><p className="mail">{contact.mail}</p></a>
            </div>
        </div>
    )
}

export default Contact;