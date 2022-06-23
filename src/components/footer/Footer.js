import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="container footer-container">
            <div className="footer-sections">
                <div className="footer-about">
                    <h3>About</h3>
                    <ul>
                        <li>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                            there live the blind texts.</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#charter">Charter</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="">Experience</a></li>
                        <li><a href="">Marketing Goals</a></li>
                        <li><a href="">Targetting Vision</a></li>
                    </ul>
                </div>
                <div className="footer-questions">
                    <h3>Have a Questions?</h3>
                    <ul>
                        <li>
                        	203 Fake St. Mountain View
                                , San Francisco, California, USA
                        </li>
                        <li>
                            +2 392 3929 210
                        </li>
                        <li>
                        	info@yourdomain.com
                        </li>
                    </ul>

                </div>
            </div>
           <p className="copyright">Copyright ©2022 All rights reserved | This template is made with  by Sheigets Marina</p>
        </div>
    </div>
  )
}
