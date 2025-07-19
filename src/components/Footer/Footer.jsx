import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Sabin Shrestha. All rights reserved.</p>
      <div className={styles['footer-links']}>
        <a href="https://github.com/sabinshrestha1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sabinshresstha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:sabin52023@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
