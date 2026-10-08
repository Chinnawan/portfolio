import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { appleEase } from "./Reveal";
import { useLang } from "../context/LanguageContext";
import { ui } from "../data/portfolio";

// Simple illustrated mockups (swap for real screenshots later)
function WebMock({ accent }) {
  const slots = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
  return (
    <div className="mock-web">
      <div className="mock-web__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="mock-web__body">
        <div className="mock-web__head">
          <div className="mock-line" style={{ width: 112 }} />
          <div className="mock-web__cta" style={{ background: accent }} />
        </div>
        <div className="mock-web__slots">
          {slots.map((free, i) => (
            <div
              key={i}
              style={{ background: free ? `${accent}cc` : "rgba(255,255,255,0.08)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMock({ accent }) {
  return (
    <div className="mock-phone">
      <div className="mock-phone__notch" />
      <div className="mock-line" style={{ width: 80, marginBottom: 12 }} />
      {[0, 1, 2].map((i) => (
        <div key={i} className="mock-phone__card">
          <div
            className="mock-phone__img"
            style={{ background: i === 0 ? accent : "rgba(255,255,255,0.1)" }}
          />
          <div className="mock-line" style={{ width: "75%", marginBottom: 4 }} />
          <div className="mock-line mock-line--dim" style={{ width: "50%" }} />
        </div>
      ))}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className="arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const { t } = useLang();
  const ref = useRef(null);
  // Card grows from 0.9 → 1 as it scrolls into view (like Apple product tiles)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.35"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const visualY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <motion.article
      ref={ref}
      className="project-card"
      style={{ scale }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: appleEase }}
    >
      <div className="project-card__visual">
        <div
          className="project-card__glow"
          style={{ background: `radial-gradient(circle at 50% 110%, ${project.accent}, transparent 60%)` }}
        />
        <motion.div className="project-card__mock" style={{ y: visualY }}>
          {project.mock === "web" ? (
            <WebMock accent={project.accent} />
          ) : (
            <MobileMock accent={project.accent} />
          )}
        </motion.div>
      </div>

      <div className="project-card__content">
        <div>
          <div className="project-card__meta">
            <span className="project-card__index">{project.index}</span>
            <span className="project-card__rule" />
            <span style={{ color: project.accent }}>{t(project.type)}</span>
          </div>
          <h3 className="project-card__title">{t(project.title)}</h3>
          <p className="project-card__desc">{t(project.description)}</p>
        </div>

        <div>
          <ul className="project-card__stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="project-card__links">
            <a href={project.demo} className="btn btn--solid">
              {t(ui.projects.demo)} <ArrowIcon />
            </a>
            <a href={project.github} className="btn btn--outline">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
