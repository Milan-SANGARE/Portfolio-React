import React from "react";
import { getImageUrl } from "../../utils";
import style from "./ProjectFrame.module.css"
import { FaGithubSquare } from "react-icons/fa";


export const ProjectFrame = ({project:{title, imageSrc, description, skills, demo, source, icon}}) => {
    return (
        <div className={style.container}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={style.img}></img>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <ul className={style.skills}>{
                skills.map((skill, id) => {
                    return (
                        <li key={id} className={style.skill}>{skill}</li>
                    );
                })
            }
            </ul>
            <div className={style.links}>
                <a href={demo} target="_blank" className={style.link} rel="noopener noreferrer">View</a>
                <a href={source} target="_blank" rel="noopener noreferrer" aria-label="GitHub Source">
                    <FaGithubSquare  className={style.icone} />
                </a>
            </div>
        </div>
    );
}