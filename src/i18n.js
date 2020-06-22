import i18n from 'i18next';
import trans_de from "./locales/de/translation.json";
import trans_en from "./locales/en/translation.json";
import { initReactI18next } from 'react-i18next';

const getLang = () => {
    return window.location.href.includes(".com") ? "en" : "de";
}

i18n
    .use(initReactI18next)
    .init({
        lng: getLang(),
        keySeparator: false,
        resources: {
            en: {
                translation: trans_en
            },
            de: {
                translation: trans_de
            },
        },
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
    });

export default i18n;