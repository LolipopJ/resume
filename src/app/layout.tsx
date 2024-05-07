"use client";

import { useEffect, useState } from "react";
import { type Metadata } from "next";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import GlobalContext from "@/contexts/global";
import { initColorTheme } from "@/utils/color-theme";
import { ColorTheme, Lang, ResumePreviewMode } from "@/enums";

import "./global.css";

export const metaData: Metadata = {
  title: "Lolipop's Resume",
  description: "Powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lang = (searchParams.get("lang") || Lang.EN) as Lang;
  const mode = (searchParams.get("mode") ||
    ResumePreviewMode.DEFAULT) as ResumePreviewMode;
  const theme = searchParams.get("theme") as ColorTheme | undefined;

  const [colorTheme, setColorTheme] = useState<ColorTheme>(ColorTheme.LIGHT);

  useEffect(() => {
    const nextColorTheme = initColorTheme(theme);
    setColorTheme(nextColorTheme);
  }, [theme]);

  const updateSearchParams = (key: string, value: string) => {
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );
    currentSearchParams.set(key, value);
    const nextSearchParamsString = currentSearchParams.toString();
    const nextQueryString = nextSearchParamsString
      ? `?${nextSearchParamsString}`
      : "";
    router.replace(`${pathname}${nextQueryString}`);
  };

  const triggerSwitchLang = () => {
    updateSearchParams("lang", lang === Lang.EN ? Lang.ZH : Lang.EN);
  };

  const triggerSwitchMode = () => {
    updateSearchParams(
      "mode",
      mode === ResumePreviewMode.DEFAULT
        ? ResumePreviewMode.EXPORT
        : ResumePreviewMode.DEFAULT,
    );
  };

  const triggerSwitchColorTheme = () => {
    updateSearchParams(
      "theme",
      colorTheme === ColorTheme.LIGHT ? ColorTheme.DARK : ColorTheme.LIGHT,
    );
  };

  return (
    <html lang="zh-CN">
      <body>
        <GlobalContext.Provider
          value={{
            lang,
            switchLang: triggerSwitchLang,
            mode,
            switchMode: triggerSwitchMode,
            theme: colorTheme,
            isDarkMode: colorTheme === ColorTheme.DARK,
            switchColorTheme: triggerSwitchColorTheme,
          }}
        >
          {children}
        </GlobalContext.Provider>
      </body>
      {/* #region 引入 Font Awesome 6: https://fa6.dashgame.com/ */}
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/js/solid.min.js"
      ></Script>
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/js/brands.min.js"
      ></Script>
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/js/fontawesome.min.js"
      ></Script>
      {/* #endregion */}
    </html>
  );
}
