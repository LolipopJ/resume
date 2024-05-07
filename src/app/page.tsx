"use client";

import { useState, useMemo, useContext, type ReactNode, type Key } from "react";
import classNames from "classnames";

import GlobalContext from "@/contexts/global";
import { getLangCommon } from "@/langs";
import { ResumePreviewMode } from "@/enums";
import { getResumeDetails } from "@/utils/resume";

import "@/styles/index.scss";

export default function Resume() {
  const globalContext = useContext(GlobalContext);

  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const common = useMemo(
    () => getLangCommon(globalContext.lang),
    [globalContext.lang],
  );
  const resume = useMemo(
    () => getResumeDetails(globalContext.lang),
    [globalContext.lang],
  );

  const renderSectionItem = (options: {
    key: Key;
    title: string;
    badge?: ReactNode;
    isPrimaryBadge?: boolean;
    subtitle?: ReactNode;
    timePeriod?: ReactNode;
    desc?: ReactNode;
    extra?: ReactNode;
    url?: string;
    defaultHidden?: boolean;
  }) => {
    const {
      key,
      title,
      badge,
      isPrimaryBadge = false,
      subtitle,
      timePeriod,
      desc,
      extra,
      url,
      defaultHidden = false,
    } = options;
    return (
      <a
        key={key}
        className={classNames({
          "resume-section-item": true,
          "resume-section-item--clickable": !!url,
          "resume-section-item--hidden": defaultHidden && !showAllItems,
        })}
        {...(!!url ? { href: url, target: "_blank" } : {})}
      >
        <div className="resume-section-item__title">
          <span>{title}</span>
          {!!badge ? (
            <span
              className={classNames({
                "resume-section-item__title-badge": true,
                "resume-section-item__title-badge--primary": isPrimaryBadge,
              })}
            >
              {badge}
            </span>
          ) : null}
        </div>

        {!!subtitle ? (
          <div className="resume-section-item__subtitle">{subtitle}</div>
        ) : null}

        {!!timePeriod ? (
          <div className="resume-section-item__duration">{timePeriod}</div>
        ) : null}

        {!!desc ? (
          <div className="resume-section-item__desc">{desc}</div>
        ) : null}

        {!!extra ? (
          <div className="resume-section-item__extra">{extra}</div>
        ) : null}
      </a>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="lg:min-h-screen bg-primary text-white p-12 lg:p-8 lg:min-w-[330px] lg:max-w-[440px]">
        <div className="flex flex-col sm:flex-row lg:flex-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resume.selfie}
            alt="selfie"
            className="w-full max-w-60 sm:max-w-64 lg:max-w-56 rounded-lg lg:rounded-t-none self-center sm:self-start sm:mr-4 lg:mr-0 lg:-mt-8"
          />
          <div className="">
            <div className="text-2xl font-bold text-center sm:text-start mt-6 sm:mt-0 lg:mt-6">
              <span className="text-white mr-1">{resume.name.first}</span>
              <span>{resume.name.last}</span>
            </div>

            <div className="pt-2 text-center sm:text-start">{resume.about}</div>

            <div className="flex flex-col font-light gap-2 mt-6">
              <div>{resume.career}</div>
              <div>{resume.schoolwork}</div>
            </div>

            <div className="flex flex-col text-sm gap-2 mt-6">
              <div className="contact-item">
                <i className="fa-solid fa-map-location-dot" />
                <span>
                  {resume.contact.region} · {resume.contact.province} ·{" "}
                  {resume.contact.city}
                </span>
              </div>
              <a
                className="contact-item"
                href={`mailto:${resume.contact.email}`}
                target="_blank"
              >
                <i className="fa-solid fa-envelope" />
                <span>{resume.contact.email}</span>
              </a>
              <div className="contact-item">
                <i className="fa-solid fa-phone-flip" />
                <span>{resume.contact.phone}</span>
              </div>
              <a
                className="contact-item"
                href={resume.contact.website}
                target="_blank"
              >
                <i className="fa-solid fa-blog" />
                <span>{resume.contact.website}</span>
              </a>
              <a
                className="contact-item"
                href={`https://github.com/${resume.contact.github}`}
                target="_blank"
              >
                <i className="fa-brands fa-github" />
                <span>{resume.contact.github}</span>
              </a>
            </div>

            <div
              className="flex flex-col text-sm gap-2 mt-6"
              style={
                globalContext.mode === ResumePreviewMode.EXPORT
                  ? { display: "none" }
                  : {}
              }
            >
              <a
                className="action-item"
                onClick={globalContext.switchColorTheme}
              >
                <i
                  className={classNames(
                    "fa-solid",
                    globalContext.isDarkMode ? "fa-sun" : "fa-moon",
                  )}
                />
                <span>
                  {globalContext.isDarkMode
                    ? common.lightMode
                    : common.darkMode}
                </span>
              </a>
              <a className="action-item" onClick={globalContext.switchLang}>
                <i className="fa-solid fa-language" />
                <span>{common.translate}</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-grow p-12 lg:p-8 lg:columns-2 4xl:columns-3 dark:bg-zinc-900 dark:text-white transition-colors">
        <div className="resume-section resume-section-education">
          <div className="resume-section__title">
            <i className="fa-solid fa-graduation-cap" />
            <span>{common.education}</span>
          </div>

          {resume.education.map((source, idx) => {
            return renderSectionItem({
              key: source.school + idx,
              title: source.school,
              subtitle: `${source.major} ${source.degree}`,
              timePeriod: source.timeperiod,
              extra: source.website,
              url: source.website,
            });
          })}
        </div>

        <div className="resume-section resume-section-experience">
          <div className="resume-section__title">
            <i className="fa-solid fa-briefcase" />
            <span>{common.experience}</span>
          </div>

          {resume.experience.map((source, idx) => {
            return renderSectionItem({
              key: source.position + idx,
              title: source.position,
              badge: source.internship ? common.internship : null,
              subtitle: source.company,
              timePeriod: source.timeperiod,
              desc: source.description,
              extra: source.website,
              url: source.website,
            });
          })}
        </div>

        <div className="resume-section resume-section-projects">
          <div className="resume-section__title">
            <i className="fa-solid fa-code" />
            <span>{common.projects}</span>
          </div>

          {resume.projects.map((source) => {
            return renderSectionItem({
              key: source.name,
              title: source.name,
              badge: source.platform,
              isPrimaryBadge: true,
              subtitle: source.shortIntro,
              desc: source.description,
              extra: source.url,
              url: source.url,
              defaultHidden: source.hidden,
            });
          })}
        </div>

        <div className="resume-section resume-section-contributions">
          <div className="resume-section__title">
            <i className="fa-solid fa-heart" />
            <span>{common.contributions}</span>
          </div>

          {resume.contributions.map((source) => {
            return renderSectionItem({
              key: source.name,
              title: source.name,
              badge: source.platform,
              isPrimaryBadge: true,
              subtitle: source.shortIntro,
              desc: source.description,
              extra: source.url,
              url: source.url,
              defaultHidden: source.hidden,
            });
          })}
        </div>

        <div className="resume-section resume-section-awards">
          <div className="resume-section__title">
            <i className="fa-solid fa-trophy" />
            <span>{common.awards}</span>
          </div>

          {resume.awards.map((source) => {
            return renderSectionItem({
              key: source.name,
              title: source.name,
              subtitle: source.award,
              extra: source.grade,
              url: source.url,
            });
          })}
        </div>

        <div className="resume-section resume-section-skills">
          <div className="resume-section__title">
            <i className="fa-solid fa-mug-saucer" />
            <span>{common.skills}</span>
          </div>

          <div className="resume-section-badge-container">
            {resume.skills.map((source) => {
              return (
                <a
                  key={source.name}
                  className="resume-section-badge"
                  href={source.url}
                  target="_blank"
                >
                  {!!source.iconClass ? (
                    <i className={source.iconClass} />
                  ) : null}
                  <span>{source.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
