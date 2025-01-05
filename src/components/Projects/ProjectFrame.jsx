// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import style from "./ProjectFrame.module.css"
import { FaGithubSquare } from "react-icons/fa";


export const ProjectFrame = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
        <div className={style.card}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={style.img}></img>
            <h3 className={style.title}>{title}</h3>

            <ul className={style.skills}>{
                skills.map((skill, id) => {
                    return (
                        <li key={id} className={style.skill}>{skill}</li>
                    );
                })
                }
            </ul>
            
            <p className={style.description}>{description}</p>
            
            <div className={style.links}>
                {demo && (
                    <a href={demo} target="_blank" className={style.animatedbutton} rel="noopener noreferrer">
                                        View
                    </a>
                    
                )}
                
                {source && (
                    <a href={source} target="_blank" rel="noopener noreferrer" aria-label="GitHub Source">
                        <FaGithubSquare className={style.icone} />
                    </a>
                )}
            </div>
            <div className={style.blob}></div>
        </div>
    );
}