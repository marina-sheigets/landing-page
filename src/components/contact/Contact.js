import React from 'react'
import "./contact.css"
import {BiMap} from "react-icons/bi"
import {AiFillPhone} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
import {GiEarthAmerica} from "react-icons/gi"
export default function Contact() {
  return (
    <div className="container contact">
        <div className="headings">
            <h1>Contact Me</h1>
            <p>Far far away, behind the word mountains,
                 far from the countries Vokalia and Consonantia</p>
            <div className="grid-data-contact">
                {
                    data.map((elem)=>{
                        const Icon=elem.icon;
                        return(
                            <div key={elem.id} className="contact-item">
                                <div className="icon-div">
                                    <Icon className="contact-icon"/>
                                </div>
                                <h3>{elem.h4}</h3>
                                <a href="">{elem.a}</a>
                            </div>
                        );
                    })
                }
            </div>
            <div className="contact-form">
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193730.89472677358!2d-74.01127657001342!3d40.65093336019333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2z0JrQstGW0L3Qtywg0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2suk!4v1655925305969!5m2!1suk!2suk" allowFullScreen="on" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="email" placeholder="Subject"/>
                    <textarea  placeholder="Message" cols="30"  rows="10"></textarea>
                    <button className="send hover">Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

const data=[
    {
        id:0,
        icon:BiMap,
        h4:"Address",
        a:"198 West 21th Street, Suite 721 New York NY 10016"
    },
    {
        id:1,
        icon:AiFillPhone,
        h4:"Contact Number",
        a:"+ 1235 2355 98"
    },
    {
        id:2,
        icon:FaTelegramPlane,
        h4:"Email Address",
        a:"info@yoursite.com"
    },
    {
        id:3,
        icon:GiEarthAmerica,
        h4:"Website",
        a:"yoursite.com"
    },
]