import React from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Open to internships, freelance, and full-time roles in UI/UX and Frontend. Reach out and I’ll get back soon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Card */}
          <div className="space-y-4">
            <a href="mailto:get2naman@gmail.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Mail size={18} className="text-cyan-300" />
              <span className="text-slate-200">get2naman@gmail.com</span>
            </a>
            <a href="tel:+918925474810" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Phone size={18} className="text-cyan-300" />
              <span className="text-slate-200">+91 8925474810</span>
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/get2naman-bit"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/naman-sinha-986511248"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Simple message form (no backend) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:get2naman@gmail.com?subject=Portfolio%20Inquiry&body=${body}`;
            }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-sm text-slate-300">Name</label>
                <input name="name" required className="mt-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" name="email" required className="mt-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label className="text-sm text-slate-300">Message</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400" placeholder="Tell me about your project or role..." />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
              <Send size={18} /> Send message
            </button>
          </form>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Naman Sinha. All rights reserved.</p>
      </div>
    </section>
  );
}
