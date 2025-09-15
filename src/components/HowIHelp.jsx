import { Trans, useTranslation } from 'react-i18next';

export default function HowIHelp() {
  const { t } = useTranslation('howIHelp');
  const { t: tc } = useTranslation('contact');

  const btn = (...c) =>
    `inline-block text-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(' ')}`;

  const keys = ['workshops', 'training', 'process', 'coaching'];

  const openCalendly = () => {
    if (window?.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevin-collier-consulting/30min',
      });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-i-help" className="bg-off-white py-20">
      <div className="container mx-auto px-5">
        <h2 className="font-mont font-black text-copper-rust text-3xl sm:text-5xl mb-10">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {keys.map((k) => (
            <div key={k} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-mont font-extrabold text-midnight-navy text-2xl sm:text-3xl">
                {t(`items.${k}.title`)}
              </h3>

              <p className="mt-2 text-graphite text-base sm:text-lg leading-relaxed">
                <Trans
                  ns="howIHelp"
                  i18nKey={`items.${k}.desc`}
                  components={{ strong: <strong className="font-bold" /> }}
                />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <p className="text-graphite text-base sm:text-lg">
            {t('ctaLine')} 👉
          </p>
          <button
            onClick={openCalendly}
            className={btn('bg-copper-rust text-off-white', 'hover:bg-copper-rust/90')}
          >
            {tc('cta.call')}
          </button>
        </div>
      </div>
    </section>
  );
}
