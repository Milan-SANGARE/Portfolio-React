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
                    As an computer engineering student at CESI I am looking for work for 3 months, from the beginning of July to the end of
                    September. This is my final year and i would like to engage in automation realted project.
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