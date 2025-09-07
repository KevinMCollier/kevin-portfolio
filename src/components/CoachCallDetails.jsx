import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function CoachCallDetails() {
  const { t } = useTranslation('coachCallDetails');
  const [openSignup, setOpenSignup] = useState(false);

  const btn = (...c) =>
    `inline-block text-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(
      ' '
    )}`;

  const Check = (
    <svg
      className="h-5 w-5 flex-shrink-0 text-midnight-navy translate-y-[2px]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.762 9.762 0 0 0 12 2.25Zm4.53 7.28a.75.75 0 0 1 0 1.06l-5.31 5.32a.75.75 0 0 1-1.06 0l-2.47-2.47a.75.75 0 0 1 1.06-1.06l1.94 1.94 4.78-4.79a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );

  /* ----- keys for bullet loops ----- */
  const sessionKeys = ['reflect', 'meaning', 'goals'];
  const benefitKeys = ['time', 'blindspots', 'engagement', 'culture'];

  return (
    <section className="bg-coach-blue py-20 sm:py-24">
      {/* ---------- GRID ---------- */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid gap-12 md:gap-16 md:grid-cols-2">

        {/* LEFT — headline + session themes */}
        <div>
          <h2 className="font-mont font-bold text-3xl xs:text-4xl md:text-5xl leading-tight break-words">
            {t('headline.main')}
            <span className="block mt-3 text-copper-rust">
              {t('headline.sub')}
            </span>
          </h2>

          <p className="mt-6 text-graphite text-lg sm:text-xl leading-relaxed">
            {t('sessionIntro')}
          </p>

          <ul className="mt-2 space-y-3 text-graphite text-lg sm:text-xl leading-relaxed list-disc list-inside">
            {sessionKeys.map((k) => (
              <li key={k}>
                <Trans i18nKey={`sessionPoints.${k}`} t={t} components={{ strong: <strong /> }} />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — benefits + CTA */}
        <div>
          <h3 className="text-midnight-navy font-semibold text-2xl mb-6">
            {t('keyBenefitsHeading')}
          </h3>

          <div className="space-y-5">
            {benefitKeys.map((k) => (
              <div key={k} className="flex items-start gap-3">
                {Check}
                <p className="text-graphite text-lg sm:text-xl leading-relaxed break-words">
                  {t(`benefits.${k}`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-midnight-navy text-lg sm:text-xl font-medium">
              <em>{t('launchPrompt')}</em>
            </p>

            <button
              onClick={() => setOpenSignup(true)}
              className={btn(
                'mt-4 bg-copper-rust text-off-white',
                'hover:bg-copper-rust/90'
              )}
            >
              {t('joinWaitList')}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- ADDITIONAL SERVICES ---------- */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-14">
        <hr className="border-t border-stone-grey" />
        <p className="mt-4 text-midnight-navy font-mont font-semibold text-base sm:text-lg leading-snug break-words">
          {t('additionalServicesHeading')}&nbsp;
          <span className="text-graphite font-normal">
            {t('additionalServicesList')}
          </span>
        </p>
        <p className="mt-1 text-xs sm:text-sm text-graphite italic break-words">
          {t('additionalServicesNotice')}
        </p>
        <hr className="mt-6 border-t border-stone-grey" />
      </div>

      {/* =============== MODAL: JOIN LIST =============== */}
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
              {t('modal.title')}
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
                placeholder={t('modal.emailPlaceholder')}
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
                {t('modal.subscribe')}
              </button>

              {/* Mailchimp badge (unchanged, vendor requirement) */}
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
