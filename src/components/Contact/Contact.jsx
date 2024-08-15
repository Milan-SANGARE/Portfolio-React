// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Contact.module.css";
import { LuMail } from "react-icons/lu";

export const Contact = () => {
  return (
    <section className={style.container} id="Contact" >
      <footer >
        <h2 className={style.title}>Contact</h2>
        <a className={style.mail}>
          <LuMail />
          milan.sangare.info@gmail.com
        </a>
      </footer>
    </section>
  );
};
