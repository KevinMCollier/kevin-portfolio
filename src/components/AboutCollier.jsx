/* src/components/AboutCollier.jsx */
import { motion } from 'framer-motion';
import StatsGrid from './StatsGrid';

const steps = [
  { title: 'Listen', desc: 'We start by understanding people—motivations, blockers, ambitions.' },
  { title: 'Align',  desc: 'Insights translate into clear priorities that link purpose to company goals.' },
  { title: 'Grow',   desc: 'Action plans, coaching, and feedback loops turn alignment into results.' },
];

export default function AboutCollier() {
  return (
    <>
      {/* 1. THREE STEPS */}
      <section className="bg-off-white dark:bg-slate-900 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-8">
            {steps.map(({ title, desc }, i) => (
              <motion.li
                key={title}
                initial={{ x: -25, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h3 className="[font-size:clamp(2.25rem,1rem+3vw,4rem)] font-extrabold tracking-tight text-midnight-navy dark:text-off-white">
                  {title}
                </h3>
                <p className="mt-2 text-base sm:text-lg text-graphite dark:text-slate-300 max-w-prose leading-relaxed">
                  {desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. QUESTION PROMPT */}
      <section className="bg-midnight-navy pt-20 lg:pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="[font-size:clamp(1.75rem,1rem+2vw,3rem)] text-center font-medium leading-snug text-off-white">
            What is the real cost of <span className="text-sea-mist font-semibold">disengagement</span>?
          </p>
        </div>
      </section>

      {/* 3. STATS GRID */}
      <StatsGrid />
    </>
  );
}
