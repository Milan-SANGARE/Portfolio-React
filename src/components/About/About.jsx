// eslint-disable-next-line no-unused-vars
import React from "react";
import Style from "./about.module.css"
import { getImageUrl } from "../../utils";
import { GoWorkflow } from "react-icons/go";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiPowerautomate } from "react-icons/si";

export const About = () => {

    return (
        <section className={Style.container} id="about">
            <h2 className={Style.title}>About Me</h2>
            <div className={Style.content}>
                <img
                    src={getImageUrl("about/pngegg.png")}
                    alt="Me sitting with a laptop"
                    className={Style.aboutImage}
                    />
                <ul className={Style.aboutItems}>
                    
                    <li className={Style.aboutItem}>
                        <a href="#experience" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <SiPowerautomate style={{ fontSize: '70px',color: "DodgerBlue", marginRight: '20px'}} />
                            <div>
                                <h3>Automation </h3>
                                <p>My functional side experience awoken a desire to meedle with automation technique and technologies</p>
                            </div>
                        </a>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <GoWorkflow style={{ fontSize: '50px',color: "DodgerBlue", marginRight: '20px'}} />
                        <div>
                            <h3>Work Flow</h3>
                            <p>I have experience in establishing Deep Learning workflow</p>
                        </div>
                        </a>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="https://www.linkedin.com/in/milan-sangare/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <BiLogoKubernetes style={{ fontSize: '70px',color: "DodgerBlue", marginRight: '20px'}} />
                        <div>
                            <h3>CI/CD pipeline</h3>
                            <p>Currently studying to get certifications and working on projects (update soon)</p>
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section >
        
    );
};