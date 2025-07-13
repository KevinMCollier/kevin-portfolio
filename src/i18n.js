// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';   // lazy-loads JSON

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',

    // Tell i18next where files live:
    backend: {
      loadPath: '/src/locales/{{lng}}/{{ns}}.json',
    },

    // Preload the most common strings (e.g. navbar)
    ns: ['navbar', 'footer'],
    defaultNS: 'navbar',

    interpolation: { escapeValue: false },
  });
