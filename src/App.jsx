import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
