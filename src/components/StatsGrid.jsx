import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { id: 'adminTime',     count: 1,   decimals: 0, source: 'McKinsey 2023' },
  { id: 'firefight',     count: 4,   decimals: 0, source: 'Myers-Briggs Institute' },
  { id: 'ping',          count: 2,   decimals: 0, source: 'Microsoft Work Index 2025' },
  { id: 'disengageCost', count: 8.8, decimals: 1, source: 'Gallup 2024' },
  { id: 'burnoutQuit',   count: 6,   decimals: 0, source: 'McKinsey' },
  { id: 'replaceLeader', count: 200, decimals: 0, source: 'Gallup' }
];

export default function StatsGrid() {
  const { t } = useTranslation('statsGrid');

  return (
    <section className="bg-midnight-navy pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">

        {stats.map((s, i) => {
          const label  = t(`stats.${s.id}.label`);
          const suffix = t(`stats.${s.id}.suffix`);

          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-off-white rounded-xl shadow-md p-6 md:p-7 flex flex-col items-center text-center"
            >
              {/* animated counter */}
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-copper-rust tracking-tight">
                <CountUp
                  end={s.count}
                  decimals={s.decimals}
                  suffix={suffix}
                  duration={1.2}
                />
              </p>

              {/* label & source */}
              <p className="mt-3 text-sm sm:text-base text-graphite max-w-xs break-keep">
                {label}
                <span className="ml-1 text-xs sm:text-sm text-graphite/70">
                  ({s.source})
                </span>
              </p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
