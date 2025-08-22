import { merge, cloneDeep } from "lodash";
import { Lang } from "@/enums";

import resumeBase from "@/../configs/resume-base.json";
import resumeEn from "@/../configs/resume-en.json";
import resumeZh from "@/../configs/resume-zh.json";

export interface ResumeDetails {
  selfie: string;
  name: {
    first: string;
    last: string;
  };
  about: string;
  birthday: string;
  career: string;
  schoolwork: string;
  contact: {
    region: string;
    province: string;
    city: string;
    email: string;
    phone: string;
    website: string;
    github: string;
  };
  experience: {
    company: string;
    position: string;
    description: string;
    website: string;
    timeperiod: string;
    internship: boolean;
  }[];
  education: {
    school: string;
    degree: string;
    major: string;
    timeperiod: string;
    website: string;
  }[];
  projects: Project[];
  contributions: Project[];
  awards: {
    name: string;
    url: string;
    award?: string;
    grade?: string;
  }[];
  skills: {
    name: string;
    level: number;
    iconClass: string;
    url: string;
  }[];
  lang: Lang;
}

export type Project = {
  name: string;
  shortIntro: string;
  description: string;
  platform: string;
  url: string;
  hidden?: boolean;
};

/** 读取简历信息 */
export const getResumeDetails = (lang: Lang) => {
  const resumeDetails = {
    [Lang.EN]: merge(cloneDeep(resumeBase), resumeEn),
    [Lang.ZH]: merge(cloneDeep(resumeBase), resumeZh),
  } as Record<Lang, ResumeDetails>;
  return resumeDetails[lang];
};
