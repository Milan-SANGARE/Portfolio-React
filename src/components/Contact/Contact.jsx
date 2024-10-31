// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Contact.module.css";
import { LuMail } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
      <footer className={style.container} id="contact" >
        <div className={style.contactText}>
          <h2 >Contact</h2>
          <p >
              You can contact me anytime here 😀
            </p>
        </div>
        <img
                    src={getImageUrl("contact/plane.png")}
                    alt="Me sitting with a laptop"
                    className={style.aboutImage}
                    />
        <div className={style.content}>
          <ul className={style.contactItems}>
            <li className={style.contactItem}>
            <a href="mailto:milan.sangare.info@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <LuMail className={style.Logo}/>
                milan.sangare.info@gmail.com
              </a>
            </li>
            <li className={style.contactItem}>
            <a href="https://www.linkedin.com/in/milan-sangare/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <IoLogoLinkedin className={style.Logo} />
                Link with me
              </a>
            </li>
          </ul>
        </div>
      </footer>
  );
};
