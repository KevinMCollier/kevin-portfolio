// src/components/Navbar.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation('navbar');

  const toggleLang = () => {
    const next = i18n.language?.startsWith('ja') ? 'en' : 'ja';
    i18n.changeLanguage(next);
  };

  return (
    <header className="bg-midnight-navy sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-5 h-16 flex items-center">
        {/* Brand */}
        <a
          href="#banner"
          className="flex items-center gap-3 font-mont font-semibold text-off-white text-lg sm:text-xl md:text-2xl tracking-tight hover:text-copper-rust transition min-w-0"
        >
          <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 aspect-square shrink-0 rounded-full bg-white overflow-hidden">
            <img
              src="/cc-logo-navy.png"
              alt="Collier Consulting logo"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
            />
          </div>
          <span className="whitespace-nowrap truncate max-w-[55vw] md:max-w-none leading-none">
            {t('brand')}
          </span>
        </a>

        {/* Location (hidden on xs) */}
        <span className="ml-4 text-xs text-off-white/70 tracking-wide hidden sm:inline">
          {t('location')}
        </span>

        {/* Divider */}
        <span className="hidden sm:inline-block h-4 w-px bg-off-white/20 mx-6" />

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6 text-off-white">
          <a href="#CoachCall" className="hover:text-copper-rust transition">
            {t('coachCall', {
              defaultValue: t('coachCall', { defaultValue: 'Coach Call' }),
            })}
          </a>
          <a href="#about" className="hover:text-copper-rust transition">
            {t('about')}
          </a>
          <a href="#contact" className="hover:text-copper-rust transition">
            {t('contact')}
          </a>
        </nav>

        <div className="flex-1" />

        {/* Desktop language toggle */}
        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        {/* Mobile: compact language switch (shows the OTHER language) */}
        <button
          className="
            md:hidden ml-2 mr-2
            text-off-white border border-off-white/30 rounded px-3 py-1.5 text-sm font-medium
            active:bg-off-white active:text-midnight-navy
            md:hover:bg-off-white md:hover:text-midnight-navy
            focus:outline-none focus:ring-2 focus:ring-white/30
            select-none transition
          "
          onClick={(e) => { toggleLang(); e.currentTarget.blur(); }}
          aria-label={i18n.language?.startsWith('ja') ? 'Switch to English' : '日本語に切り替え'}
        >
          {i18n.language?.startsWith('ja') ? 'English' : '日本語'}
        </button>

        {/* Hamburger (bigger target, not glued to edge) */}
        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-off-white hover:bg-white/10 transition"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block text-2xl leading-none select-none">☰</span>
        </button>
      </div>

      {/* Mobile dropdown (no extra language toggle here) */}
      {open && (
        <nav className="md:hidden bg-midnight-navy px-4 md:px-5 pb-5 pt-2 space-y-4 text-off-white text-lg border-t border-white/10">
          <a
            href="#CoachCall"
            onClick={() => setOpen(false)}
            className="block w-full hover:text-copper-rust transition"
          >
            {t('coachCall', {
              defaultValue: t('coachCall', { defaultValue: 'Coach Call' }),
            })}
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block w-full hover:text-copper-rust transition"
          >
            {t('about')}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full hover:text-copper-rust transition"
          >
            {t('contact')}
          </a>
        </nav>
      )}
    </header>
  );
}
