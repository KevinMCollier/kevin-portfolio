import { Trans, useTranslation } from 'react-i18next';

export default function FeedbackLoopDetails() {
  const { t } = useTranslation('feedbackLoopDetails');
  const { t: tc } = useTranslation('contact');

  const btn = (...c) =>
    `inline-block text-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(' ')}`;

  const body = 'text-black text-base sm:text-lg leading-relaxed';

  const openCalendly = () => {
    if (window?.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevin-collier-consulting/30min',
      });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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



          {/* How it works — now matches text-base sm:text-lg */}
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

          {/* Benefits — now matches text-base sm:text-lg */}
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

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className={btn('bg-midnight-navy text-off-white', 'hover:bg-midnight-navy/90')}
            >
              {t('cta', { defaultValue: 'Request a proposal' })}
            </a>
            <button
              onClick={openCalendly}
              className={btn(
                'border border-copper-rust text-copper-rust',
                'hover:bg-copper-rust hover:text-off-white'
              )}
            >
              {tc('cta.call')}
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
    </section>
  );
}
