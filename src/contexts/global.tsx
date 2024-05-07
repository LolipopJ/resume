import { createContext } from "react";
import { Lang, ResumePreviewMode, ColorTheme } from "@/enums";

export interface IGlobalContext {
  lang: Lang;
  switchLang: () => void;
  mode: ResumePreviewMode;
  switchMode: () => void;
  theme: ColorTheme;
  isDarkMode: boolean;
  switchColorTheme: () => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  lang: Lang.EN,
  switchLang: () => {},
  mode: ResumePreviewMode.DEFAULT,
  switchMode: () => {},
  theme: ColorTheme.LIGHT,
  isDarkMode: false,
  switchColorTheme: () => {},
});

export default GlobalContext;
