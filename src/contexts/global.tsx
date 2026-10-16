"use client";

import { createContext, useEffect, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Lang, ResumePreviewMode, ColorTheme } from "@/enums";
import { initColorTheme } from "@/utils/color-theme";

export interface IGlobalContext {
  lang: Lang;
  switchLang: () => void;
  mode: ResumePreviewMode;
  switchMode: () => void;
  switchColorTheme: () => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  lang: Lang.ZH,
  switchLang: () => {},
  mode: ResumePreviewMode.DEFAULT,
  switchMode: () => {},
  switchColorTheme: () => {},
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const lang = (searchParams.get("lang") || Lang.ZH) as Lang;
  const mode = (searchParams.get("mode") ||
    ResumePreviewMode.DEFAULT) as ResumePreviewMode;
  const theme = searchParams.get("theme") as ColorTheme | undefined;

  useEffect(() => {
    initColorTheme(theme);
  }, [theme]);

  const updateSearchParams = (key: string, value: string) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set(key, value);
    window.history.replaceState(null, "", `?${query}`);
  };

  return (
    <GlobalContext
      value={{
        lang,
        switchLang: () =>
          updateSearchParams("lang", lang === Lang.EN ? Lang.ZH : Lang.EN),
        mode,
        switchMode: () =>
          updateSearchParams(
            "mode",
            mode === ResumePreviewMode.DEFAULT
              ? ResumePreviewMode.EXPORT
              : ResumePreviewMode.DEFAULT,
          ),
        switchColorTheme: () =>
          updateSearchParams(
            "theme",
            document.documentElement.classList.contains("dark")
              ? ColorTheme.LIGHT
              : ColorTheme.DARK,
          ),
      }}
    >
      {children}
    </GlobalContext>
  );
}

export default GlobalContext;
