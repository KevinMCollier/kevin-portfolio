import { useTranslation } from 'react-i18next';

export default function Process() {
  const { t } = useTranslation('approach');

  const stepKeys = ['listen', 'patterns', 'act'];

  return (
    <>
      {/* -------- White section -------- */}
        <section id="process" className="bg-off-white py-20">
        <div className="container mx-auto px-5">

          {/* Section heading */}
          <h2 className="font-mont font-black text-copper-rust text-3xl sm:text-5xl mb-8">
            {t('heading')}
          </h2>

          {/* Steps */}
          <ul className="space-y-8 pl-6 sm:pl-8">
            {stepKeys.map((k) => (
              <li key={k}>
                <h3 className="font-mont font-extrabold text-midnight-navy text-3xl sm:text-4xl">
                  {t(`steps.${k}.title`)}
                </h3>
                <p className="mt-2 text-graphite text-base sm:text-xl max-w-prose leading-relaxed break-words">
                  {t(`steps.${k}.desc`)}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* -------- Navy call-out -------- */}
      {/* <section className="bg-midnight-navy py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-off-white text-2xl sm:text-3xl text-center font-medium break-words [text-wrap:balance]">
            <Trans
              i18nKey="disengagementQuestion"
              t={t}
              components={{ 1: <span className="text-sea-mist font-semibold" /> }}
            />
          </p>
        </div>
      </section> */}
    </>
  );
}
