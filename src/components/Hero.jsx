import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h2
          className={styles.subtitle}
          style={{ fontSize: '1rem', fontWeight: 400, color: '#08b3d1' }}
        >
          Electronics Engineer & AI/ML Enthusiast
        </h2>
        <h1
          className={styles.title}
          style={{ fontSize: '3rem', fontWeight: 700 }}
        >
          Sabin Shrestha
        </h1>
        <p className={styles.description}>
          Bridging the gap between hardware innovation and intelligent systems.<br />
          Specialized in embedded AI, neural network optimization, and next-generation electronics design.
        </p>
        <div className={styles.buttons}>
          <a href="#work" className={styles.primaryBtn}>View My Work</a>
          <a href="/assets/resume.pdf" download className={styles.secondaryBtn}>Download Resume</a>
        </div>
      </div>
    </section>
  );
}
