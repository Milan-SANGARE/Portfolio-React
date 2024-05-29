import React from "react";
import style from "./Projects.module.css";
import projects from "../../data/projects.json"

import { ProjectFrame } from "./ProjectFrame";

export const Projects = () => {
    return (
        <section className={style.container} id="projects">
            <h2 className={style.title}>Projects</h2>
            <div className={style.projects}>
                {projects.map((project, id) => {
                    return (
                        <ProjectFrame key={id}  project={project}/>
                    );
                })}
            </div>
        </section>
    );
}