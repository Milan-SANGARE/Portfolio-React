// eslint-disable-next-line no-unused-vars
import React from "react";
import Style from "./about.module.css"
import { getImageUrl } from "../../utils";

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
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                        <div>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
        
    );
};