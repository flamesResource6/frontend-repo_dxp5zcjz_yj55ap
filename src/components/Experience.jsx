import React from 'react';

const experiences = [
  {
    role: 'UI/UX Designer & Frontend Developer — Youth India Foundation',
    period: 'May 2025 – July 2025',
    bullets: [
      'Assisted in designing, modifying, and developing the organization’s website.',
      'Collaborated on UI/UX improvements and front-end implementation.',
    ],
  },
  {
    role: 'Hackathons & Leadership',
    period: '2025',
    bullets: [
      'SIH 2025 – Cleared internal round; ranked Top 30 among 220 teams as Frontend Lead for a mental health platform.',
      'Riidl Incuverse 2025 – Built a personal finance app with intelligent recommendations.',
      'Google Gen AI Hackathon – Added personalized AI-driven features to a counselling platform.',
      'VW Mobilothon 5.0 – Submitted a real-time parking app as Team Lead (results awaited).',
      'Mumbai Hacks 2025 – Leading team building an Agentic AI system to combat misinformation.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Experience & Hackathons</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Highlights from roles, challenges and hackathons I’ve contributed to.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cyan-300">{exp.role}</h3>
                <span className="text-xs text-slate-400">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
