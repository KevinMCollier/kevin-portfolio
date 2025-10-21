import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react'; // npm i lucide-react
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation('navbar');

  // Keep header height in one place
  const HEADER_H = 'h-16'; // 64px — matches the spacer below

  return (
    <>
      {/* Fixed on mobile (no jitter), sticky on md+ */}
      <header className={`bg-midnight-navy fixed md:sticky top-0 left-0 right-0 z-50 ${HEADER_H} w-full`}>
        <div className={`container mx-auto px-4 md:px-5 ${HEADER_H} flex items-center`}>
          {/* ---- Brand with Logo ---- */}
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

          {/* Location (hidden on small) */}
          <span className="ml-4 text-xs text-off-white/70 tracking-wide hidden sm:inline">
            {t('location')}
          </span>

          {/* Divider */}
          <span className="hidden sm:inline-block h-4 w-px bg-off-white/20 mx-6" />

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6 text-off-white">
            <a href="#coachCall" className="hover:text-copper-rust transition">
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

          <button
            className="
              md:hidden ml-2 mr-2
              text-off-white border border-off-white/30 rounded px-3 py-1.5 text-sm font-medium
              active:bg-off-white active:text-midnight-navy
              md:hover:bg-off-white md:hover:text-midnight-navy
              focus:outline-none focus:ring-2 focus:ring-white/30
              select-none transition
            "
            onClick={(e) => {
              const next = i18n.language.startsWith('ja') ? 'en' : 'ja';
              i18n.changeLanguage(next);
              e.currentTarget.blur(); // clear focus to avoid “stuck” state on iOS
            }}
            aria-label="Switch language"
          >
            {i18n.language.startsWith('ja') ? 'English' : '日本語'}
          </button>



          {/* Hamburger: larger touch target, not flush right */}
          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-off-white/90 hover:text-off-white hover:bg-white/5 transition"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="md:hidden bg-midnight-navy px-4 pb-5 pt-2 space-y-4 text-off-white text-lg border-t border-white/10">
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
              className="block w-full hover:text-copper-rust transition"
            >
              {t('contact')}
            </a>
            {/* No extra language toggle here */}
          </nav>
        )}
      </header>

      {/* Spacer so fixed mobile header doesn't cover content (same height as header) */}
      <div className="md:hidden h-16" aria-hidden />
    </>
  );
}
