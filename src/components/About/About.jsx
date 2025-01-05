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
                    src={getImageUrl("about/ar.png")}
                    alt="Me building the future of humanity"
                    className={Style.aboutImage}
                    />
                <ul className={Style.aboutItems}>
                    
                    <li className={Style.aboutItem}>
                        <a href="#experience" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        {/* <SiPowerautomate style={{ fontSize: '70px',color: "DodgerBlue", marginRight: '20px'}} /> */}
                            <div>
                                <h3>International </h3>
                                <p>looking for intenational oportunyties, I would realy like to go on a vie with the entreprise i will do my internship with.</p>
                            </div>
                        </a>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        {/* <GoWorkflow style={{ fontSize: '50px',color: "DodgerBlue", marginRight: '20px'}} /> */}
                        <div>
                            <h3>Hard challenge</h3>
                            <p>I like to engage in chellenging taskt and project, whether by the complexity or the deadline, I love to work whtih a bit of adrealine in the blood.</p>
                        </div>
                        </a>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="https://www.linkedin.com/in/milan-sangare/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        {/* <BiLogoKubernetes style={{ fontSize: '70px',color: "DodgerBlue", marginRight: '20px'}} /> */}
                        <div>
                            <h3>Remote work</h3>
                            <p>The greatest invention ever, it help me a lot to balance my personal life and my professional life and the better the balance the better the work 😉.</p>
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section >
        
    );
};