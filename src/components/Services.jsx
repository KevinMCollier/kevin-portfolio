// src/components/Services.jsx
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

/* ---------- Inline icons (no external libs) ---------- */
const Clipboard = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <rect x="9" y="2" width="6" height="4" rx="1" />
    <path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
    <path d="M9 12h6M9 16h6" />
  </svg>
);
const Crown = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <path d="M3 11l4-6 5 4 5-4 4 6v6H3z" /><path d="M3 17h18" />
  </svg>
);
const GradCap = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <path d="M22 10L12 4 2 10l10 6 10-6z" />
    <path d="M6 12v5a2 2 0 0 0 1 1.73L12 21l5-2.27A2 2 0 0 0 18 17v-5" />
  </svg>
);
const Users = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const Globe = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20" /><path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);
const Presentation = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <path d="M3 4h18v10H3z" /><path d="M12 14v6" /><path d="M9 20h6" /><path d="M7 8h10M7 10h6" />
  </svg>
);
const Cog = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...p}>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.17A1.65 1.65 0 0 0 8 20.55a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.45 15 1.65 1.65 0 0 0 2 14H2a2 2 0 1 1 0-4h.17c.6 0 1.15.24 1.51.63z" />
  </svg>
);

/* ---------- Small UI helpers ---------- */
function Chip({ children }) {
  return (
    <span className="text-[11px] rounded-full px-2.5 py-1
                     bg-white/10 text-off-white/90 ring-1 ring-white/20">
      {children}
    </span>
  );
}
Chip.propTypes = { children: PropTypes.node.isRequired };

function ServiceCard({ Icon, title, blurb, outcome, formats = [] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl
                    bg-white/[0.04] ring-1 ring-white/10 p-5 transition
                    hover:bg-white/[0.06]">
      {/* soft gradient on hover */}
      <span className="pointer-events-none absolute inset-0 -z-0
                        bg-gradient-to-br from-white/[0.06] to-transparent
                        opacity-0 transition-opacity duration-300
                        group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center
                        rounded-lg bg-white/10 ring-1 ring-white/15 text-off-white/90">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <h3 className="text-lg font-semibold text-off-white">{title}</h3>
        <p className="mt-1 text-off-white/80">{blurb}</p>

        {/* keep outcomes but make them lighter and only on sm+ to reduce noise */}
        {outcome && (
          <p className="mt-3 hidden sm:block text-sm text-off-white/70">
            <span className="font-medium">Outcome:</span> {outcome}
          </p>
        )}

        {formats.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {formats.map((f) => <Chip key={f}>{f}</Chip>)}
          </div>
        )}
      </div>
    </div>
  );
}
ServiceCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  outcome: PropTypes.string,
  formats: PropTypes.arrayOf(PropTypes.string),
};

/* ---------- Section ---------- */
export default function Services() {
  const { t } = useTranslation('services'); // expects: heading, items[], howBar (optional)

  const items = t('items', { returnObjects: true }) || [];
  const IconSet = [Clipboard, Crown, GradCap, Users, Globe, Presentation, Cog];

  const howBarText = t('howBar', {
    defaultValue: '1:1 coaching, workshops, and consulting engagements—recommended to fit your needs.',
  });

  return (
    <section id="services" className="bg-midnight-navy border-b border-white/10 py-16">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <h2 className="font-mont font-bold text-off-white text-4xl sm:text-5xl">
          {t('heading', { defaultValue: 'Core Services' })}
        </h2>

        {/* How I work — simple subheader (no card) */}
        <p className="mt-3 max-w-3xl text-sm text-off-white/80">
          {howBarText}
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => {
            const Icon = IconSet[idx % IconSet.length];
            const formats = Array.isArray(it.formats) ? it.formats : [];
            const outcome = it.outcome;
            return (
              <ServiceCard
                key={idx}
                Icon={Icon}
                title={it.title}
                blurb={it.desc}
                outcome={outcome}
                formats={formats}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
