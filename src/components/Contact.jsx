import React, { useState } from 'react';
import { Mail, Phone, Share2 } from 'lucide-react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:naman@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
        <p className="mt-2 text-white/70">Feel free to reach out for collaboration, opportunities, or a friendly hello.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="mailto:naman@example.com" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-white/80" />
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-medium">naman@example.com</p>
              </div>
            </div>
          </a>
          <a href="tel:+19999999999" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-white/80" />
              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="font-medium">+1 (999) 999-9999</p>
              </div>
            </div>
          </a>
          <a href="#projects" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
            <div className="flex items-center gap-3">
              <Share2 size={18} className="text-white/80" />
              <div>
                <p className="text-sm text-white/60">Explore</p>
                <p className="font-medium">See my latest work</p>
              </div>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            className="min-h-[120px] w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
          />
          <div>
            <button type="submit" className="inline-flex items-center rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-white/90">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
