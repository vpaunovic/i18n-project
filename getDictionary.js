const dictionaries = {
  en: () => import("./dictionaries/en.json"),
  de: () => import("./dictionaries/de.json"),
};

export const getDictionary = async (locale) => dictionaries[locale]();
