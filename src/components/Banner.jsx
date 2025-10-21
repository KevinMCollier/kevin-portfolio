/* src/components/Banner.jsx */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t } = useTranslation('banner');       // banner.tagline + banner.ewkCta
  const { t: tc } = useTranslation('contact');  // CTA strings

  const [openSignup, setOpenSignup] = useState(false);

  // shared button base
  const btn = (...c) =>
    `inline-flex items-center justify-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(' ')}`;

  const openCalendly = () => {
    if (window?.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/collier-consulting/collier-consulting-free-consultation',
      });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="banner" className="bg-midnight-navy h-screen pt-28 md:pt-0">
      <div className="container mx-auto flex px-6 sm:px-10 lg:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-10 md:mb-0">
          {/* === HEADLINE === */}
          <h1 className="font-mont font-bold text-off-white text-5xl sm:text-7xl tracking-tight leading-[1.05]">
            <span className="text-sea-mist">Growth</span> begins with your&nbsp;
            <span className="text-copper-rust">people</span>
          </h1>

          {/* === TAGLINE === */}
          <h2 className="mt-5 max-w-3xl text-lg sm:text-xl text-off-white/90">
            {t('tagline', { defaultValue: t('sub', { defaultValue: '' }) })}
          </h2>

          {/* === CTAs === */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
            {/* Primary: content-width, left-aligned */}
            <button
              onClick={openCalendly}
              className={btn(
                'bg-copper-rust text-off-white hover:bg-copper-rust/90',
                'self-start w-auto'
              )}
            >
              {tc('cta.call')}
            </button>

            {/* Secondary: allow wrap, limit width on mobile, left-aligned */}
            <a
              href="https://english-kevin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={btn(
                'bg-off-white text-midnight-navy hover:bg-off-white/90',
                'self-start text-left whitespace-normal leading-snug',
                'max-w-[20rem] sm:max-w-none' // <= wraps to 2 lines on small if needed
              )}
              aria-label="Visit English with Kevin for 1:1 Private Sessions (opens in a new tab)"
            >
              {t('ewkCta', {
                defaultValue: 'For 1:1 Private Sessions, visit English with Kevin',
              })}
            </a>
          </div>

          {/* Sub-link */}
          <p className="mt-5 text-sm text-off-white/70">
            <a
              href="#coachCall"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('coachCall')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="underline underline-offset-4 hover:text-off-white"
            >
              {t('offering', {
                defaultValue: 'Want lasting change? Discover The Coach Call.',
              })}
            </a>
          </p>
        </div>
      </div>

      {/* ===== JOIN LIST MODAL ===== */}
      {openSignup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setOpenSignup(false)}
        >
          <div
            className="bg-off-white w-full max-w-md rounded-xl p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-midnight-navy font-bold text-2xl">
              {tc('modalJoin.title')}
            </h3>

            <form
              action="https://kevin-collier.us8.list-manage.com/subscribe/post?u=3223839310f18f06bdb1456c2&id=7987856aee&f_id=004972e1f0"
              method="post"
              target="_blank"
              noValidate
              className="space-y-4"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder={tc('modalJoin.emailPlaceholder')}
                required
                className="w-full border border-stone-grey rounded px-4 py-2 focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />

              {/* Honeypot */}
              <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="b_3223839310f18f06bdb1456c2_7987856aee"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>

              <button
                type="submit"
                className={btn('w-full bg-copper-rust text-off-white', 'hover:bg-copper-rust/90')}
              >
                {tc('modalJoin.subscribe')}
              </button>

              {/* Mailchimp badge */}
              <p className="text-center opacity-70">
                <a
                  href="http://eepurl.com/jhC0UY"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mailchimp – email marketing made easy and fun"
                >
                  <img
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    className="h-6 mx-auto"
                  />
                </a>
              </p>
            </form>

            <button
              onClick={() => setOpenSignup(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-graphite hover:text-midnight-navy"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
