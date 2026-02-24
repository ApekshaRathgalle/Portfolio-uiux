import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import LoadingScreen from '../components/LoadingScreen';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
    <LoadingScreen />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;