import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { appleEase } from "./Reveal";
import Icon from "./Icon";
import { useLang } from "../context/LanguageContext";
import { profile, links } from "../data/portfolio";
import { icons } from "../data/icons";
import profileImg from "../assets/profile.jpg";
import "./Hero.css";

const socials = [
  { label: "GitHub", href: links.github, icon: icons.github },
  { label: "LinkedIn", href: links.linkedin, icon: icons.linkedin },
  { label: "Email", href: `mailto:${links.email}`, icon: icons.gmail },
];

// One line of the giant name: slides up from behind a mask on load
function NameLine({ text, delay }) {
  return (
    <span className="hero__line">
      <motion.span
        className="hero__line-inner"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay, ease: appleEase }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  // 0 when the hero's top hits the viewport top → 1 when its bottom leaves
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: name drifts up faster than the photo; everything fades & shrinks
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="home" ref={ref} className="hero">
      <div className="hero__blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero__grain" aria-hidden="true" />

      <motion.header
        className="hero__top"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: appleEase }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="hero__social"
            aria-label={s.label}
            title={s.label}
          >
            <Icon icon={s.icon} size={24} />
          </a>
        ))}
      </motion.header>

      <motion.div className="hero__center" style={{ scale, opacity }}>
        <motion.h1 className="hero__name" style={{ y: nameY }}>
          <NameLine text={profile.firstName} delay={0.1} />
          <NameLine text={profile.lastName} delay={0.25} />
        </motion.h1>

        <motion.div className="hero__photo" style={{ y: photoY }}>
          <motion.img
            src={profileImg}
            alt={t(profile.photoAlt)}
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.55, ease: appleEase }}
          />
        </motion.div>
      </motion.div>

      <motion.div className="hero__captions" style={{ opacity }}>
        <motion.div
          className="hero__captions-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>
            {t(profile.heroLeft)[0]}
            <br />
            {t(profile.heroLeft)[1]}
          </p>
          <p className="hero__caption-right">
            {t(profile.heroRight)[0]}
            <br />
            {t(profile.heroRight)[1]}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
