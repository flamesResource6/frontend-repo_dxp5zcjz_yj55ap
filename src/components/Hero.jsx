import React, { Suspense, useEffect, useState } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

// Client-only lazy load for Spline to prevent crashes on environments without WebGL/support
const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        {mounted ? (
          <ErrorBoundary fallback={<div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" /> }>
            <Suspense fallback={<div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)] animate-pulse" /> }>
              <LazySpline scene="https://prod.spline.design/6A6n0VJdWqv6eM1w/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-white/70">Portfolio</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Naman Sinha
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Frontend-focused developer crafting clean interfaces and smooth interactions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="mailto:naman@example.com"
            className="rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-white/90"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium hover:border-white/40"
          >
            View Projects
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <Github size={18}/> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <Linkedin size={18}/> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <FileText size={18}/> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
