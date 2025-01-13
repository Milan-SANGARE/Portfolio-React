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
                                <h3>International Opportunities </h3>
                                <p>I am passionate about exploring international opportunities and aim to contribute to a global enterprise during my internship. My goal is to gain diverse professional experiences and broaden my perspective.</p>
                            </div>
                        </a>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        {/* <GoWorkflow style={{ fontSize: '50px',color: "DodgerBlue", marginRight: '20px'}} /> */}
                        <div>
                            <h3>Embracing Challenges</h3>
                            <p>I thrive on tackling complex tasks and challenging projects. Whether it's meeting tight deadlines or solving intricate problems, I enjoy working in dynamic environments that push me to perform my best.</p>
                        </div>
                        </a>
                    </li>
                    <li className={Style.aboutItem}>
                        <a href="https://www.linkedin.com/in/milan-sangare/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        {/* <BiLogoKubernetes style={{ fontSize: '70px',color: "DodgerBlue", marginRight: '20px'}} /> */}
                        <div>
                            <h3>Work-Life Balance Advocate</h3>
                            <p>I believe remote work is one of the greatest innovations, enabling me to maintain a healthy balance between my personal and professional life. A well-balanced life leads to more productive and fulfilling work.</p>
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section >
        
    );
};