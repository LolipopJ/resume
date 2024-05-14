import en from "./en.json";
import zh from "./zh.json";
import { Lang } from "@/enums";

export const getLangCommon = (lang: Lang) => {
  const langCommon = {
    [Lang.EN]: en,
    [Lang.ZH]: zh,
  };
  return langCommon[lang];
};
