import React, { useEffect, useState, Suspense } from 'react';
import { Github, Linkedin, FileText, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center">
      <div className="absolute inset-0">
        {webglSupported ? (
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-indigo-50 via-white to-pink-50" /> }>
            <Spline
              scene="https://prod.spline.design/5h0nL-3D-sample/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
        )}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full w-fit mb-4">
            <Rocket className="h-4 w-4" />
            Crafting delightful web experiences
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Naman Sinha
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Frontend developer focused on React, animations, and product polish. I bring ideas to life with
            performant, accessible interfaces.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition">
              Contact
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-gray-900 transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Resume" className="text-gray-600 hover:text-gray-900 transition">
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
