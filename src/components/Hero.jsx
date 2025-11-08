import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ExternalLink, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(56,189,248,0.15),rgba(15,23,42,0))]"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-10">
        {/* Intro text */}
        <div className="z-10 mx-auto max-w-2xl lg:mx-0 lg:w-[42%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            Available for opportunities
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Naman Sinha</span>
          </h1>
          <p className="mt-3 text-lg text-slate-300">UI/UX Designer & Frontend Developer</p>
          <p className="mt-6 text-slate-300">
            I’m an aspiring Frontend and Android App Developer passionate about turning creative ideas into sleek, interactive digital experiences. Curious by nature, I love exploring new tools to push the boundaries of creativity and code — crafting intuitive interfaces and impactful products that solve real problems.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur transition hover:bg-white/10"
            >
              <FileDown size={18} /> Resume
            </a>
            <a
              href="https://github.com/get2naman-bit"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/naman-sinha-986511248"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-400">Primary Stack</p>
              <p className="mt-1 font-medium">HTML, CSS, ReactJS, JS</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-400">Mobile</p>
              <p className="mt-1 font-medium">React Native, Flutter</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-400">Languages</p>
              <p className="mt-1 font-medium">C, Python, Java</p>
            </div>
          </div>
        </div>

        {/* Spline Scene - Laptop animation */}
        <div className="relative mt-12 h[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl lg:mt-0 lg:h-[540px] lg:flex-1">
          <Spline
            scene="https://prod.spline.design/8X5t7XGZTXm7w3j5/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle gradient overlay that doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"></div>
        </div>
      </div>

      {/* Floating contact chip */}
      <div className="relative mx-auto max-w-7xl px-6 pb-8">
        <a
          href="mailto:get2naman@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur transition hover:bg-white/10"
        >
          <Mail size={16} /> get2naman@gmail.com <ExternalLink size={14} className="opacity-60" />
        </a>
      </div>
    </section>
  );
}
