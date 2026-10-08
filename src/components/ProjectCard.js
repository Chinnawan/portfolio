import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { appleEase } from "./Reveal";
import Icon from "./Icon";
import { useLang } from "../context/LanguageContext";
import { ui } from "../data/portfolio";
import { stackIcons, screenshots } from "../data/icons";

// MacBook-style laptop showing a real screenshot inside a browser window.
// The screen "opens" (tilts up) as the card scrolls into view, like Apple's pages.
function LaptopMock({ src, url, alt, tilt }) {
  return (
    <div className="laptop">
      <motion.div className="laptop__lid" style={{ rotateX: tilt }}>
        <div className="laptop__screen">
          <div className="laptop__camera" />
          <div className="browser">
            <div className="browser__bar">
              <span className="browser__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="browser__url">
                <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a5 5 0 0 0-5 5v3H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3Z" />
                </svg>
                {url}
              </span>
            </div>
            <img src={src} alt={alt} className="browser__shot" />
          </div>
        </div>
      </motion.div>
      <div className="laptop__base" />
    </div>
  );
}

// Simple illustrated phone mockup (swap for a real screenshot later)
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

// Open real links in a new tab; "#" placeholders stay on the page
const linkProps = (href) =>
  href && href !== "#" ? { href, target: "_blank", rel: "noreferrer" } : { href: "#" };

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
  const tilt = useTransform(scrollYProgress, [0, 1], [-55, 0]);

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
          {project.mock === "browser" ? (
            <LaptopMock
              src={screenshots[project.screenshot]}
              url={project.url}
              alt={`${t(project.title)} preview`}
              tilt={tilt}
            />
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
              <li key={tech.name}>
                <Icon icon={stackIcons[tech.icon]} size={14} />
                {tech.name}
              </li>
            ))}
          </ul>
          <div className="project-card__links">
            <a {...linkProps(project.demo)} className="btn btn--solid">
              {t(ui.projects.demo)} <ArrowIcon />
            </a>
            <a {...linkProps(project.github)} className="btn btn--outline">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
