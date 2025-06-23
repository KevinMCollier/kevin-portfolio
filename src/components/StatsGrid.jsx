/* src/components/StatsGrid.jsx */
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    count: 1,
    label: 'Day per week managers lose to admin and stepping in for work their team could own.',
    suffix: ' d',
    source: 'McKinsey 2023',
  },
  {
    count: 4,
    label: 'Manager hours lost each week firefighting culture conflicts.',
    suffix: ' h',
    source: 'Myers-Briggs Institute',
  },
  {
    count: 2,
    label: 'Minutes between digital pings during the workday.',
    suffix: ' min',
    source: 'Microsoft Work Index 2025',
  },
  {
    count: 8.8,
    label: 'Trillion dollars disengagement drains globally every year.',
    suffix: ' T',
    decimals: 1,
    source: 'Gallup 2024',
  },
  {
    count: 6,
    label: 'Times more likely burned-out staff will quit.',
    suffix: '×',
    source: 'McKinsey',
  },
  {
    count: 200,
    label: 'Percent of salary it costs to replace a key leader.',
    suffix: ' %',
    source: 'Gallup',
  },
];

export default function StatsGrid() {
  return (
    <section className="bg-midnight-navy pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-off-white rounded-xl shadow-md p-6 md:p-7 flex flex-col items-center text-center"
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-copper-rust tracking-tight">
              {s.count !== undefined ? (
                <CountUp
                  end={s.count}
                  decimals={s.decimals || 0}
                  suffix={s.suffix || ''}
                  duration={1.2}
                />
              ) : (
                s.display
              )}
            </p>
            <p className="mt-3 text-sm sm:text-base text-graphite max-w-xs">
              {s.label}
              <span className="ml-1 text-xs sm:text-sm text-graphite/70">({s.source})</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
