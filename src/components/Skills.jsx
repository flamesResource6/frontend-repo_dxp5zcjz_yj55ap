import React from 'react';

const skills = [
  { name: 'HTML5', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg' },
  { name: 'CSS3', color: '#1572B6', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg' },
  { name: 'JavaScript', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
  { name: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
  { name: 'Tailwind CSS', color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg' },
  { name: 'Flutter', color: '#02569B', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg' },
  { name: 'Python', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg' },
  { name: 'C', color: '#A8B9CC', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/c.svg' },
  { name: 'Java', color: '#007396', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg' },
  { name: 'Figma', color: '#F24E1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg' },
  { name: 'GitHub', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Technical Skills</h2>
        <p className="mt-2 max-w-2xl text-slate-300">A snapshot of the tools and technologies I use to craft great experiences.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900/60">
                <img src={s.logo} alt={`${s.name} logo`} className="h-6 w-6" style={{ filter: s.name === 'GitHub' ? 'invert(1)' : 'none' }} />
              </div>
              <span className="text-slate-200">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
