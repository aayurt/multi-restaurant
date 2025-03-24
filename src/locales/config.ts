const LOCALES = {
  EN_US: 'en',
  NE_NE: 'ne',
};
export const LOCALES_DAYJS = {
  ['EN_US']: 'en',
  ['NE_NE']: 'ne',
};

export const locales = Object.values(LOCALES);

export const defaultLocale = 'en';

export const localesPathMap = locales.reduce((acc, locale) => {
  const generated = import(`../../locales/translations/gen/${locale}.json`);
  const custom = import(`../../locales/translations/custom/${locale}.json`);
  return {
    ...acc,
    [locale]: async () => {
      const generatedTranslations = await generated;
      const customTranslations = await custom;

      return {
        default: {
          ...generatedTranslations.default,
          ...customTranslations.default,
        },
      };
    },
  };
}, {});
