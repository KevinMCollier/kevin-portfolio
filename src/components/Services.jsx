// src/components/Services.jsx
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation('services');   // uses services.json

  const items = t('items', { returnObjects: true }) || [];

  return (
    <section id="services" className="bg-midnight-navy border-b border-white/10 py-20">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <h2 className="font-mont font-bold text-off-white text-4xl sm:text-5xl">
          {t('heading')}
        </h2>

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
        <p className="mt-6 max-w-2xl text-lg text-off-white/80">{t('deliveryNote')}</p>

      </div>
    </section>
  );
}
