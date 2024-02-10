const translations = {
  en: {
    originalString: "translations",
  },
  es: {},
};

return function (string) {
  let currentLocale = "en";
  if (typeof jQuery.cookie("locale") !== undefined) {
    currentLocale = jQuery.cookie("locale");
  }

  return translations[currentLocale]
    ? array_reduce(translations[currentLocale], function (item) {
        return item[string] ?? string;
      })
    : string;
};
