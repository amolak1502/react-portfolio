import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:amolak2003@gmail.com">amolak2003@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
            <a href="https://www.linkedin.com/in/amolak-singh-kalsi-17343322b/">Amolak Singh Kalsi</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
            <a href="https://github.com/amolak1502">amolak1502</a>
        </li>

    </ul>
  </footer>;
}
