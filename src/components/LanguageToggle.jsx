import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const change = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <div className="ml-4 inline-flex rounded border border-off-white overflow-hidden">
      {/* English */}
      <button
        onClick={() => change('en')}
        disabled={lang === 'en'}                         // ⬅️ disable when active
        className={`px-2 py-0.5 text-sm transition
                    ${
                      lang === 'en'
                        ? 'bg-off-white text-midnight-navy font-semibold cursor-default'
                        : 'text-off-white hover:bg-off-white/20'
                    }`}
        aria-pressed={lang === 'en'}
      >
        En
      </button>

      <span className="w-px bg-off-white/30" />

      {/* Japanese */}
      <button
        onClick={() => change('ja')}
        disabled={lang === 'ja'}                         // ⬅️ disable when active
        className={`px-2 py-0.5 text-sm transition
                    ${
                      lang === 'ja'
                        ? 'bg-off-white text-midnight-navy font-semibold cursor-default'
                        : 'text-off-white hover:bg-off-white/20'
                    }`}
        aria-pressed={lang === 'ja'}
      >
        日本語
      </button>
    </div>
  );
}
