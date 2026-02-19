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
import GraphicProjectDetail from './components/projects/Details/graphicDesign';
import VideoProjectDetail from './components/projects/Details/videoDetails';
import AnimationProjectDetail from './components/projects/Details/animationDetails';
import LoadingScreen from './components/LoadingScreen';

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
        {/* Loading Screen - only shows on first visit */}
        <LoadingScreen />
        
        {/* Main Content - no extra margin needed */}
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

              {/* UI/UX Projects List */}
              <Route 
                path="/projects/uiux" 
                element={
                  <motion.div {...pageTransition}>
                    <UIUXProjects />
                  </motion.div>
                } 
              />

              {/* Graphic Design Projects List */}
              <Route 
                path="/projects/graphic" 
                element={
                  <motion.div {...pageTransition}>
                    <GraphicDesignProjects />
                  </motion.div>
                } 
              />

              {/* Video Projects List */}
              <Route 
                path="/projects/video" 
                element={
                  <motion.div {...pageTransition}>
                    <VideoProjects />
                  </motion.div>
                } 
              />

              {/* Animation Projects List */}
              <Route 
                path="/projects/animation" 
                element={
                  <motion.div {...pageTransition}>
                    <AnimationProjects />
                  </motion.div>
                } 
              />

              {/* UI/UX Project Detail */}
              <Route 
                path="/projects/uiux/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <UIProjectDetail />
                  </motion.div>
                } 
              />

              {/* Graphic Design Project Detail */}
              <Route 
                path="/projects/graphic/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <GraphicProjectDetail />
                  </motion.div>
                } 
              />

              {/* Video Project Detail */}
              <Route 
                path="/projects/video/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <VideoProjectDetail />
                  </motion.div>
                } 
              />

              {/* Animation Project Detail */}
              <Route 
                path="/projects/animation/:projectId" 
                element={
                  <motion.div {...pageTransition}>
                    <AnimationProjectDetail />
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