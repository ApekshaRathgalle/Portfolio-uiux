import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/Theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import UIUXProjects from './components/projects/UIUXProjects';
import GraphicDesignProjects from './components/projects/GraphicDesignProjects';
import VideoProjects from './components/projects/VideoProjects';
import AnimationProjects from './components/projects/AnimationProjects';
import UIProjectDetail from './components/projects/Details/uiProjectDetails';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as const }
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home Page */}
              <Route 
                path="/" 
                element={
                  <motion.div {...pageTransition}>
                    <Home />
                  </motion.div>
                } 
              />

              {/* Project Category Pages */}
              <Route 
                path="/projects/uiux" 
                element={
                  <motion.div {...pageTransition}>
                    <UIUXProjects />
                  </motion.div>
                } 
              />

              <Route 
                path="/projects/graphic" 
                element={
                  <motion.div {...pageTransition}>
                    <GraphicDesignProjects />
                  </motion.div>
                } 
              />

              <Route 
                path="/projects/video" 
                element={
                  <motion.div {...pageTransition}>
                    <VideoProjects />
                  </motion.div>
                } 
              />

              <Route 
                path="/projects/animation" 
                element={
                  <motion.div {...pageTransition}>
                    <AnimationProjects />
                  </motion.div>
                } 
              />

              {/* Project Detail Pages */}
              <Route 
                path="/projects/uiux/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <UIProjectDetail />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;