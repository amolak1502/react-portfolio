import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amolak</h1>
        <p className={styles.description}>I'm a front-end developer using React. Reach out if you'd like to learn more!</p>
        <a className={styles.contactBtn} href="mailto:amolak2003@gmail.com">Contact Me</a>

    </div>
    <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} alt="Hero Image" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}
