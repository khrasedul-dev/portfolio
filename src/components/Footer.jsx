import React from "react";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <div>
            <div className="dark-bg">
                <div className="container footer">
                    <div className="footerMain">
                        <h3>
                            khrasedul.com
                        </h3>
                        <p className="footerText">
                        Khrasedul.com is not a company. It is an individual property of KH Rasedul Hasan. If you face any trouble by it. Do not hesitate contact with me?
                        <br /> <br />
                        Thank you
                        </p>
                    </div>
                    <div className="footerMain">
                        <h3>
                            <img src="https://cdn-icons-png.flaticon.com/512/1251/1251254.png" alt="" /> &nbsp;
                            Pages
                        </h3>
                        
                        <ul>
                            <li><NavLink exact activeClassName="navItemActive" to="/">Home</NavLink></li>
                            <li><NavLink exact activeClassName="navItemActive" to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink exact activeClassName="navItemActive" to="/services">Services</NavLink></li>
                            <li><NavLink exact activeClassName="navItemActive" to="/about">About</NavLink></li>
                            <li><NavLink exact activeClassName="navItemActive" to="/contact">Contact</NavLink></li>
                        </ul>

                    </div>
                    <div className="footerMain">
                        <h3>
                            <img src="https://cdn-icons-png.flaticon.com/512/3790/3790058.png" alt="" /> &nbsp;
                            Partners
                        </h3>

                        <ul>
                            <li><a href="https://www.khmehedihasan.com">Mehedi Hasan</a></li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="container footer-flex">
                    <span className="credits"> &copy; KHRasedul.com || 2021-2022</span>
                    <span className="credits">Design and Developed By KH Rashedul</span>
                </div>
            </div>
        </div>
    )
}

export default Footer