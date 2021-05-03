import i18n from 'i18next';
import translation from './en/translation.json';
import translationPt from './pt/translation.json';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: translation
            },
            pt: {
                translations: translationPt
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });