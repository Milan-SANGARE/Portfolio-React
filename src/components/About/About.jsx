// eslint-disable-next-line no-unused-vars
import React from "react";
import Style from "./about.module.css"
import { getImageUrl } from "../../utils";
import { IoLogoLinkedin } from "react-icons/io5";

export const About = () => {
    return (
        <section className={Style.container} id="about">
            <h2 className={Style.title}>About</h2>
            <div className={Style.content}>
                <img src={getImageUrl("about/aboutImage.png")}  className={Style.aboutImage} alt="Laptop icon" />
                <ul className={Style.aboutItems}>
                    <li className={Style.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div>
                            <h3>Front-End </h3>
                            <p>I am a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={Style.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div>
                            <h3>Back-End</h3>
                            <p>I have experience developing fast and optimised back-end systems</p>
                        </div>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="https://www.linkedin.com/in/milan-sangare/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <IoLogoLinkedin style={{ fontSize: '70px',color: "DodgerBlue", marginRight: '10px' }} />
                        <div>
                            <h3>My magnificent Linked in profile</h3>
                            <p>Here you will find other information about myself. If you wish to know more aboute my experences outside the IT field.</p>
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section >
        
    );
};