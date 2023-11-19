
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../en.json'
import ar from '../ar.json';

const resources = {
  en: en,
  ar: ar,
} as const;

export type AssetResources = typeof resources;

i18n
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    lng: "en",
    react: {
      bindI18n: 'languageChanged',
    },
  });

export const i18next = i18n;
