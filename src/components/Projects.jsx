import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';

const projects = [
  {
    title: 'Juswipe',
    description: 'A modern mobile-first dating experience with seamless swipe interactions.',
    url: '#',
    soon: true,
  },
  {
    title: 'Motion UI Kit',
    description: 'Reusable animation primitives built on Framer Motion for React.',
    url: 'https://example.com',
  },
  {
    title: 'Portfolio V2',
    description: 'Fast, accessible, and elegant personal site built with Vite + Tailwind.',
    url: 'https://example.com',
  },
  {
    title: 'Design Tokens CLI',
    description: 'Generate cross-platform tokens from a single source of truth.',
    url: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
        <p className="mt-2 text-gray-600">A selection of work and experiments I enjoyed building.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-xl border border-gray-200 hover:border-gray-300 bg-white/80 backdrop-blur p-5 transition">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              {p.soon ? (
                <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">
                  <Clock className="h-3 w-3" />
                  Coming soon
                </span>
              ) : (
                <a href={p.url} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
