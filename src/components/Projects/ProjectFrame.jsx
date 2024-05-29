import React from "react";
import { getImageUrl } from "../../utils";
import style from "./ProjectFrame.module.css"


export const ProjectFrame = ({project:{title, imageSrc, description, skills, demo, source, icon}}) => {
    return (
        <div className={style.container}>
            <img src={getImageUrl(imageSrc)} alt={`Immage of ${title}`} className={style.img}></img>
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
                <a href={demo} className={style.link}>View</a>
                <a href={source} className={style.icone}>
                    <img src={getImageUrl(icon)} alt="github"/>
                </a>
            </div>
        </div>
    );
}