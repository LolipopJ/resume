/**
 * @param {unknown} value
 * @param {"en" | "zh"} lang
 * @returns {unknown}
 */
const localize = (value, lang) => {
  if (Array.isArray(value)) {
    return value.map((item) => localize(item, lang));
  }

  if (value !== null && typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length > 0 && keys.every((key) => key === "en" || key === "zh")) {
      if (!Object.hasOwn(value, lang)) {
        throw new Error(`Missing resume translation for "${lang}"`);
      }
      return localize(value[lang], lang);
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, lang)]),
    );
  }

  return value;
};

module.exports = { localize };
