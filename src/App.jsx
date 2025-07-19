import React from 'react';
import Hero from './components/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';  // Assuming you have this
import Contact from './components/Contact/Contact';     // Assuming you have this
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
