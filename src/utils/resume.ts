import { merge, cloneDeep } from "lodash";
import { Lang } from "@/enums";

import resumeBase from "@/../configs/resume-base.json";
import resumeEn from "@/../configs/resume-en.json";
import resumeZh from "@/../configs/resume-zh.json";

/** 读取简历信息 */
export const getResumeDetails = (lang: Lang) => {
  const resumeDetails = {
    [Lang.EN]: merge(cloneDeep(resumeBase), resumeEn),
    [Lang.ZH]: merge(cloneDeep(resumeBase), resumeZh),
  };
  return resumeDetails[lang];
};
