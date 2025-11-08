import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Juswipe',
    description:
      'A modern cross-platform app experience focused on delightful gestures and speed — crafted to feel effortless and intuitive.',
    link: undefined,
    stack: ['React Native', 'Flutter', 'UI/UX'],
  },
  {
    title: 'MindMate',
    description:
      'A mental health assistant and counselling platform equipped with a resource hub, AI chatbot, and community groups.',
    link: 'https://hpsc.tiiny.site',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
  },
  {
    title: 'AI Credit Score Manager',
    description:
      'Calculates users’ creditworthiness based on daily utility bills like electricity and phone payments, providing an AI-approved credit score.',
    link: 'https://creditscore-main.onrender.com',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
  },
  {
    title: 'Bus/Train Ticket Booking System',
    description:
      'A smart ticket and seat management system that allows users to book and download tickets across routes with mock payment integration.',
    link: 'https://booksmmart.netlify.app',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
  },
  {
    title: 'TruthLensAI',
    description:
      'A news trustworthiness detection platform that identifies fake news and provides verified sources and credibility scores for online content.',
    link: 'https://truth-guard-ai-08a116dd.base44.app',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
  },
  {
    title: 'Cricscard',
    description:
      'A sports scorecard web app fetching live cricket and football scores and live standings across leagues.',
    link: 'https://cricscard.netlify.app',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              A selection of products and experiments I’ve designed and built recently.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 backdrop-blur transition hover:bg-white/10 md:inline-block"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold group-hover:text-cyan-300">{p.title}</h3>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 transition hover:border-cyan-500/30 hover:text-cyan-300"
                  >
                    <Globe size={14} /> Live <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
