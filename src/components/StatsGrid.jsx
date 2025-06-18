/* src/components/StatsGrid.jsx */
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { display: '4 hours',  count: 4,   label: 'Managers burn each week firefighting culture conflicts.', source: 'Myers-Briggs Institute' },
  { display: '30 hours', count: 30,  label: 'Time lost per resignation in interviews & onboarding.',    source: 'Stratus HR' },
  { display: '$8.8 T',   count: 8.8, suffix:' T', decimals:1, label: 'Annual cost of disengagement to the global economy.', source: 'Gallup 2024' },
  { display: '6× more',  count: 6,   suffix:'×', label: 'Employees are likelier to quit when burned-out.',                 source: 'McKinsey' },
  { display: '200 %',    count: 200, suffix:' %', label: 'Replacing a key leader can cost up to double their salary.',     source: 'Gallup' },
  { display: '15–30 min', label: 'Ideal weekly 1 : 1 cadence—but most teams can’t keep up.',                                source: 'Gallup' },
];

export default function StatsGrid() {
  return (
    <section className="bg-midnight-navy pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8
                      grid sm:grid-cols-2 lg:grid-cols-3
                      gap-y-12 gap-x-16 lg:gap-y-14 lg:gap-x-20">

        {stats.map((s, i) => (
          <motion.div
            key={s.display}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-off-white rounded-xl shadow-md p-6 md:p-7 flex flex-col items-center text-center h-full"
          >
            {/* KPI number */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-copper-rust tracking-tight">
              {s.count !== undefined
                ? <CountUp end={s.count} decimals={s.decimals || 0} suffix={s.suffix || ''} duration={1.3} />
                : s.display}
            </p>

            {/* label */}
            <p className="mt-3 text-sm sm:text-base text-graphite max-w-xs leading-relaxed">
              {s.label}
              <span className="ml-1 text-xs sm:text-sm text-graphite/70">({s.source})</span>
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
