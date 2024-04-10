import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to my protfolio, my name is Milan SANGARE</h1>
                <p className={styles.description}>
                    As an computer engineering student at CESI I am looking for work for 3 months, from the beginning of July to the end of
                    September. I am currently in my 4th year and would like to apply and improve my skills.
                </p>
                <a href="mailto:sngr.milan@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Profile image of me"
                className={styles.heroImg}
            />
            {/* to do the fade in the color background */}
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};