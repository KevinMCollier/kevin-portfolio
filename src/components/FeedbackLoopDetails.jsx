// src/components/FeedbackLoopDetails.jsx
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function FeedbackLoopDetails() {
  const { t } = useTranslation('feedbackLoopDetails');
  const { t: tc } = useTranslation('contact');

  const [openSignup, setOpenSignup] = useState(false); // NEW

  const btn = (...c) =>
    `inline-block text-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(' ')}`;

  const body = 'text-black text-base sm:text-lg leading-relaxed';

  const sessionKeys = ['listen', 'surface', 'act', 'sustain'];
  const benefitKeys = ['retention', 'leadership', 'collaboration', 'culture'];

  const Check = (
    <svg
      className="h-5 w-5 flex-shrink-0 text-copper-rust translate-y-[2px]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.762 9.762 0 0 0 12 2.25Zm4.53 7.28a.75.75 0 0 1 0 1.06l-5.31 5.32a.75.75 0 0 1-1.06 0l-2.47-2.47a.75.75 0 0 1 1.06-1.06l1.94 1.94 4.78-4.79a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section id="feedback-loop" className="border-t border-white/10 bg-white">
      <div className="container mx-auto px-5 py-20 grid gap-12 md:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-[60ch]">
          <p className="uppercase tracking-wide text-midnight-navy/70 font-semibold mb-2">
            {t('label', { defaultValue: 'Featured Service' })}
          </p>

          <h2 className="font-mont font-black text-midnight-navy text-4xl md:text-5xl leading-tight tracking-tight">
            {t('headline.main')}
          </h2>

          <p className="mt-2 font-mont font-semibold text-copper-rust text-lg sm:text-lg md:text-lg leading-tight">
            {t('headline.sub')}
          </p>

          {/* How it works */}
          <ul className={`mt-7 space-y-3 ${body}`}>
            {sessionKeys.map((k) => (
              <li key={k} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-copper-rust inline-block" />
                <span>
                  <Trans i18nKey={`sessionPoints.${k}`} t={t} components={{ strong: <strong /> }} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="md:border-l md:border-midnight-navy/15 md:pl-10">
          <h3 className="text-midnight-navy font-semibold text-xl mb-6">
            {t('keyBenefitsHeading')}
          </h3>

          {/* Benefits */}
          <div className="space-y-5">
            {benefitKeys.map((k) => (
              <div key={k} className="flex items-start gap-3">
                {Check}
                <p className={body}>
                  {t(`benefits.${k}`)}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs — replaced Calendly with Join List */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setOpenSignup(true)}
              className={btn(
                'border bg-midnight-navy text-off-white',
                'hover:bg-midnight-navy/80'
              )}
            >
              {tc('cta.join')}
            </button>
          </div>

          <p className="mt-3 text-graphite text-sm">
            {t('postMonthNote', {
              defaultValue:
                'Available in 3-month, 6-month, and 12-month plans.'
            })}
          </p>
        </div>
      </div>

      {/* =============== MODAL: JOIN LIST (duplicated from ContactSplit) =============== */}
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
                className={btn(
                  'bg-copper-rust text-off-white',
                  'hover:bg-copper-rust/90'
                )}
              >
                {tc('modalJoin.subscribe')}
              </button>

              {/* Mailchimp badge (unchanged) */}
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
