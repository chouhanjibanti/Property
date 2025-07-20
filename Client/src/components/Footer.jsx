import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-indigo-800 via-blue-900 to-purple-900 text-white px-4 py-8 mt-16 shadow-inner">
    <div className="border-t border-blue-900/40 mb-6"></div>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Brand/Icon */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-amber-400 drop-shadow">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h3.375a.375.375 0 00.375-.375V16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.125c0 .207.168.375.375.375h3.375c.621 0 1.125-.504 1.125-1.125V9.75M8.25 22.5h7.5" />
        </svg>
        <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">NextProperty</span>
      </div>
      {/* Copyright */}
      <div className="font-semibold tracking-wide text-base text-center">
        &copy; {new Date().getFullYear()} NextProperty. All rights reserved.<br className="md:hidden" />
        <span className="text-sm opacity-70 block md:inline">Made with <span className="text-pink-400">&#10084;</span> using React & Tailwind CSS</span>
      </div>
      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" className="hover:text-amber-400 transition" aria-label="Twitter">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.454-.676-6.263-1.845.322.038.63.05.965.05 1.92 0 3.684-.654 5.096-1.757-1.797-.037-3.316-1.22-3.84-2.85.25.037.5.062.765.062.366 0 .73-.05 1.07-.142-1.877-.378-3.29-2.037-3.29-4.032v-.05c.553.308 1.19.495 1.87.517a4.07 4.07 0 01-1.81-3.39c0-.75.202-1.45.553-2.055 2.01 2.47 5.02 4.09 8.42 4.26-.07-.3-.11-.61-.11-.93 0-2.25 1.83-4.08 4.08-4.08 1.17 0 2.23.495 2.97 1.29.92-.18 1.78-.517 2.56-.98-.3.93-.93 1.71-1.75 2.2.82-.1 1.6-.32 2.33-.65-.54.81-1.22 1.52-2 2.09z" /></svg>
        </a>
        <a href="#" className="hover:text-amber-400 transition" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
        </a>
        <a href="#" className="hover:text-amber-400 transition" aria-label="LinkedIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" /></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 