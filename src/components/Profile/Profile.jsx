// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Milan SANGARE</h1>
                <p className={styles.description}>
                    As a student in my final year of a computer engineering course, I’m looking for a company for my
                    Projet de Fin d’Études (PFE) which is to be carried out as part of a professional assignment. 
                    
                </p>
                <a href="#contact" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/bg_dla_street.png")}
                alt="Profile image of me"
                className={styles.heroImg}
            />
            {/* to do the fade in the color background */}
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};