// src/components/Services.jsx
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation('services');   // uses services.json
  const { t: tc } = useTranslation('contact'); // reuses CTA labels

  const items = t('items', { returnObjects: true }) || [];

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
    <section id="services" className="bg-[#0a1730] border-b border-white/10 py-20">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <h2 className="font-mont font-bold text-off-white text-4xl sm:text-5xl">
          {t('heading')}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-off-white/80">
          {t('intro')}
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold text-off-white">{it.title}</h3>
              <p className="mt-2 text-off-white/80">{it.desc}</p>
            </article>
          ))}
        </div>

        {/* Note + CTAs */}
        <p className="mt-6 text-sm text-off-white/70">{t('deliveryNote')}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={openCalendly}
            className="inline-flex items-center justify-center rounded-lg bg-copper-rust px-6 py-2 text-base font-semibold text-off-white transition hover:bg-copper-rust/90"
          >
            {tc('cta.call')}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-2 text-base font-semibold text-off-white transition hover:bg-white/10"
          >
            {tc('cta.inquiry')}
          </a>
        </div>
      </div>
    </section>
  );
}
