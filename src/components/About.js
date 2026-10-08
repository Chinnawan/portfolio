import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { profile, ui } from "../data/portfolio";
import Reveal from "./Reveal";
import "./About.css";

// Each word brightens as you scroll through the paragraph (Apple-style text reveal)
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

// Split into words; Intl.Segmenter also handles Thai, which has no spaces
function splitWords(text, lang) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter(lang, { granularity: "word" });
    return [...segmenter.segment(text)].map((s) => s.segment);
  }
  return text.split(/(\s+)/);
}

export default function About() {
  const { lang, t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = splitWords(t(profile.bio), lang);

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <Reveal as="p" className="eyebrow">
          {t(ui.about)}
        </Reveal>
        <p ref={ref} className="about__text">
          {words.map((word, i) => (
            <Word
              key={`${lang}-${i}`}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}
