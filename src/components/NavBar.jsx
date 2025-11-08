import React from 'react';
import { Home, Briefcase, FolderGit2, Mail } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a href="#home" className="font-semibold tracking-tight">Naman Sinha</a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <li>
            <a href="#home" className="hover:text-white inline-flex items-center gap-2"><Home size={16}/> Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white inline-flex items-center gap-2"><FolderGit2 size={16}/> Projects</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-white inline-flex items-center gap-2"><Briefcase size={16}/> Experience</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white inline-flex items-center gap-2"><Mail size={16}/> Contact</a>
          </li>
        </ul>
        <a href="#contact" className="md:hidden inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-white/90">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar;
