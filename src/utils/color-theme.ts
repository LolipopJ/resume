import { ColorTheme } from "@/enums";

const LSColorThemeKey = "preferredThemeMode";

const setDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem(LSColorThemeKey, ColorTheme.DARK);
  return ColorTheme.DARK;
};

const setLightMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem(LSColorThemeKey, ColorTheme.LIGHT);
  return ColorTheme.LIGHT;
};

export const initColorTheme = (defaultTheme?: ColorTheme) => {
  if (defaultTheme === ColorTheme.LIGHT) {
    return setLightMode();
  } else if (defaultTheme === ColorTheme.DARK) {
    return setDarkMode();
  }

  const LSColorTheme = localStorage.getItem(LSColorThemeKey);
  if (
    LSColorTheme === ColorTheme.DARK ||
    (!LSColorTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return setDarkMode();
  } else {
    return setLightMode();
  }
};
