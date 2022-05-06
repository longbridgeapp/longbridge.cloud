import i18nConfig from "./../next-i18next.config";

export const i18nPaths = () =>
  i18nConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));
