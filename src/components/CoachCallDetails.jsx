// src/components/CoachCallDetails.jsx
import { Trans, useTranslation } from 'react-i18next';

export default function CoachCallDetails() {
  const { t } = useTranslation('coachCallDetails');
  const { t: tc } = useTranslation('contact');

  const btn = (...c) =>
    `inline-block text-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(' ')}`;

  const openCalendly = () => {
    if (window?.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevin-collier-consulting/30min',
      });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sessionKeys = ['reflect', 'meaning', 'goals'];
  const benefitKeys = ['time', 'blindspots', 'engagement', 'culture'];

  const Check = (
    <svg
      className="h-5 w-5 flex-shrink-0 text-midnight-navy translate-y-[2px]"
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
    <section id="coach-call" className="bg-coach-blue py-20">
      <div className="container mx-auto px-5 grid gap-12 md:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-[60ch]">
          {/* Eyebrow label adds hierarchy */}
          <p className="uppercase tracking-wide text-midnight-navy/70 font-semibold mb-2">
            {t('label', { defaultValue: 'Recommended starting engagement' })}
          </p>

          {/* Main title */}
          <h2 className="font-mont font-black text-midnight-navy text-4xl md:text-5xl leading-tight tracking-tight">
            {t('headline.main')}
          </h2>

          {/* Subheadline — smaller + lighter weight */}
          <p className="mt-2 font-mont font-semibold text-midnight-navy text-xl sm:text-2xl md:text-3xl leading-tight">
            {t('headline.sub')}
          </p>

          <p className="mt-6 text-midnight-navy/90 text-lg sm:text-xl leading-relaxed">
            {t('sessionIntro')}
          </p>

          <ul className="mt-3 space-y-3 text-midnight-navy/90 text-lg sm:text-xl leading-relaxed">
            {sessionKeys.map((k) => (
              <li key={k} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-midnight-navy inline-block" />
                <span>
                  <Trans i18nKey={`sessionPoints.${k}`} t={t} components={{ strong: <strong /> }} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="md:border-l md:border-midnight-navy/15 md:pl-10">
          <h3 className="text-midnight-navy font-semibold text-2xl mb-6">
            {t('keyBenefitsHeading')}
          </h3>

          <div className="space-y-5">
            {benefitKeys.map((k) => (
              <div key={k} className="flex items-start gap-3">
                {Check}
                <p className="text-midnight-navy/90 text-lg sm:text-xl leading-relaxed break-words">
                  {t(`benefits.${k}`)}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className={btn('bg-midnight-navy text-off-white', 'hover:bg-midnight-navy/90')}
            >
              {t('requestProposal', { defaultValue: 'Request a proposal' })}
            </a>
            <button
              onClick={openCalendly}
              className={btn(
                'border border-midnight-navy text-midnight-navy',
                'hover:bg-midnight-navy hover:text-off-white'
              )}
            >
              {tc('cta.call')}
            </button>
          </div>

          <p className="mt-3 text-midnight-navy/80 text-sm">
            {t('postMonthNote', {
              defaultValue:
                'After Month 3: stop with a handover or move to an Ongoing Partner plan.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
