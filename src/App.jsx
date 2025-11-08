import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-100 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Naman Sinha. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
