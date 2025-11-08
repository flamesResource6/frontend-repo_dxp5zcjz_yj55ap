import React from 'react';
import { Home, FolderGit2, Mail } from 'lucide-react';

export default function NavBar() {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="font-semibold tracking-tight text-gray-900">
          Naman Sinha
        </button>
        <ul className="flex items-center gap-2">
          {items.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
