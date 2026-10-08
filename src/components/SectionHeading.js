import React from "react";
import { useLang } from "../context/LanguageContext";
import Reveal from "./Reveal";
import "./SectionHeading.css";

// Apple-style section headline: small eyebrow + huge gradient title + optional lead
export default function SectionHeading({ eyebrow, title, lead }) {
  const { t } = useLang();
  return (
    <header className="section-heading">
      <Reveal as="p" className="eyebrow">
        {t(eyebrow)}
      </Reveal>
      <Reveal as="h2" delay={0.1} className="section-heading__title">
        {t(title)}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={0.2} className="section-heading__lead">
          {t(lead)}
        </Reveal>
      )}
    </header>
  );
}
