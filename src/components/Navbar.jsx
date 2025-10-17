import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('navbar');

  return (
    <header className="bg-midnight-navy sticky top-0 z-20">
      <div className="container mx-auto px-5 py-4 flex items-center">
        {/* ---- Brand with Logo ---- */}
        <a
          href="#banner"
          className="flex items-center space-x-3 font-mont font-semibold text-off-white text-2xl sm:text-3xl tracking-tight hover:text-copper-rust transition"
        >
          <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white overflow-hidden">
            <img
              src="/cc-logo-navy.png"
              alt="Collier Consulting logo"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
            />
          </div>
          <span>{t('brand')}</span>
        </a>

        {/* Location */}
        <span className="ml-4 text-xs text-off-white/70 tracking-wide hidden sm:inline">
          {t('location')}
        </span>

        {/* Divider */}
        <span className="hidden sm:inline-block h-4 w-px bg-off-white/20 mx-6" />

        {/* Desktop links */}
        <nav className="hidden md:flex items-center space-x-6 text-off-white">
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

        {/* Language toggle */}
        <LanguageToggle />

        {/* Hamburger */}
        <button
          className="md:hidden ml-3 text-off-white hover:text-copper-rust transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-midnight-navy px-5 pb-6 space-y-4 text-off-white text-lg">
          <a
            href="#coachCall"
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
            className="inline-block border-2 border-copper-rust py-2 px-4 rounded hover:bg-copper-rust transition"
          >
            {t('contact')}
          </a>

          {/* Optional: language toggle inside mobile menu */}
          <LanguageToggle />
        </nav>
      )}
    </header>
  );
}
