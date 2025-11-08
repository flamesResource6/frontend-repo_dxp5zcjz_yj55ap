import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:namansinha@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
        <p className="mt-2 text-gray-600">Have a project in mind or want to say hi? I’d love to chat.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <a href="mailto:namansinha@example.com" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <Mail className="h-5 w-5 text-gray-700" />
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600 text-sm">namansinha@example.com</p>
            </div>
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <Phone className="h-5 w-5 text-gray-700" />
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600 text-sm">+1 (234) 567-890</p>
            </div>
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 p-6 bg-white/70 backdrop-blur">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" required value={form.message} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              <Send className="h-4 w-4" />
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
