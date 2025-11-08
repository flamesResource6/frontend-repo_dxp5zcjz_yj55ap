import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';

const projects = [
  {
    title: 'Juswipe',
    description: 'A modern dating app concept with swipe interactions and real-time matching. Coming soon.',
    tags: ['React Native', 'Realtime', 'Design'],
    link: null,
  },
  {
    title: 'Portfolio Site',
    description: 'This site—designed for performance, accessibility, and clean aesthetics.',
    tags: ['Vite', 'React', 'Tailwind'],
    link: 'https://example.com',
  },
  {
    title: 'UI Components',
    description: 'A small library of polished React UI components inspired by shadcn.',
    tags: ['React', 'Design System'],
    link: 'https://example.com',
  },
  {
    title: 'Motion Playground',
    description: 'Exploring micro-interactions and animation with Framer Motion.',
    tags: ['Framer Motion', 'UX'],
    link: 'https://example.com',
  },
  {
    title: 'Dev Tools',
    description: 'A set of developer utilities and helpers published as npm packages.',
    tags: ['TypeScript', 'Tooling'],
    link: 'https://example.com',
  },
];

const ProjectCard = ({ title, description, tags, link }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
          <ExternalLink size={18} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1 text-xs rounded-full bg-amber-500/20 text-amber-300 px-2 py-0.5">
          <Clock size={14}/> Coming soon
        </span>
      )}
    </div>
    <p className="mt-2 text-white/70 text-sm">{description}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="text-[11px] rounded-md bg-white/10 px-2 py-1 text-white/70">{t}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-white/70">A snapshot of things I’m building and exploring.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
