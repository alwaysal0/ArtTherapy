import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRO from '../locales/ro.json';
import translationRU from '../locales/ru.json';

const resources = {
  ro: {
    translation: translationRO
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next) // связываем с React
  .init({
    resources,
    lng: 'ro', // язык по умолчанию
    fallbackLng: 'ro', // язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false // отключаем экранирование
    }
  });

export default i18n;
