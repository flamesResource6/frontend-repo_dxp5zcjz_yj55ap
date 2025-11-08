import React from 'react';
import { User, FolderKanban, Briefcase, Phone } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Naman</span>
          <span className="text-slate-400">.dev</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#home" className="inline-flex items-center gap-2 hover:text-white"><User size={16}/>About</a>
          <a href="#projects" className="inline-flex items-center gap-2 hover:text-white"><FolderKanban size={16}/>Projects</a>
          <a href="#experience" className="inline-flex items-center gap-2 hover:text-white"><Briefcase size={16}/>Experience</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 hover:bg-white/10"><Phone size={16}/>Contact</a>
        </nav>
      </div>
    </header>
  );
}
