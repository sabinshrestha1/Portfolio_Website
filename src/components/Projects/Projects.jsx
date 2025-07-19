import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Smart Power Grid Optimizer',
    description: 'An AI-based model for optimizing electrical power distribution in smart grid environments.',
    tags: ['PyTorch', 'TensorFlow'],
  },
  {
    title: 'Real-time Gesture Recognition',
    description: 'A vision-based system to interpret hand gestures for real-time human-computer interaction.',
    tags: ['OpenCV', 'TensorFlow'],
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'An AI-powered system that forecasts equipment failure in industrial machines.',
    tags: ['Python', 'Scikit-learn'],
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of my work in AI, Machine Learning, and Electronics Engineering.
        </p>

        <div className={styles.cardGrid}>
          {projects.map((project, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imagePlaceholder}>
                <span>📷</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span className={styles.tag} key={i}>{tag}</span>
                ))}
              </div>
              <button className={styles.detailsBtn}>View Details →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
