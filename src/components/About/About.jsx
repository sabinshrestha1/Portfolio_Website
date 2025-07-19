import React from 'react';
import styles from './About.module.css';
import profileImage from '../../assets/profile-placeholder.png';


const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.content}>
          <h2>About Me</h2>
          <p>
            With over five years of dedicated experience, I am a passionate Electrical Engineer holding a Master of Science degree, specializing in the practical application of Artificial Intelligence and Machine Learning to revolutionize electronic systems.
          </p>
          <p>
            My professional journey is centered on bridging the gap between theoretical AI concepts and tangible hardware solutions. I thrive on designing, developing, and deploying intelligent embedded systems that are not only efficient and robust but also push the boundaries of what is possible in modern electronics.
          </p>

          <div className={styles.stats}>
            <div><strong>12</strong><br />Published Research Papers</div>
            <div><strong>3</strong><br />Lead AI Integration Projects</div>
            <div><strong>15+</strong><br />Developed Embedded Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
