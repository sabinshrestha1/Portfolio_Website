import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
  {
    title: 'Electronics & Hardware',
    items: ['Circuit Design', 'PCB Layout', 'FPGA', 'Microcontrollers', 'Signal Processing', 'Power Electronics', 'Embedded Systems', 'Hardware Testing'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Computer Vision', 'NLP', 'Deep Learning', 'Model Optimization', 'Edge AI'],
  },
  {
    title: 'Programming Languages',
    items: ['Python', 'C/C++', 'MATLAB', 'Verilog', 'Java', 'JavaScript', 'R', 'SQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['KiCad', 'Altium Designer', 'SPICE Simulation', 'Git', 'Docker', 'AWS', 'Jupyter', 'Fusion 360'],
  },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Expertise</h2>
        <p className={styles.subtitle}>A comprehensive overview of my capabilities across hardware, software, and AI.</p>
        <div className={styles.grid}>
          {skillsData.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((skill, idx) => (
                  <li key={idx}>
                    <div className={styles.skillName}>{skill}</div>
                    <div className={styles.barBackground}>
                      <div className={styles.barFill} style={{ width: `${80 + Math.random() * 15}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
