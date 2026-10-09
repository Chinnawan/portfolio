import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { timeline, ui } from "../data/portfolio";
import { journeyPhotos } from "../data/icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  const { t } = useLang();
  const ref = useRef(null);
  // The timeline line "draws" itself as you scroll through the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });

  return (
    <section id="experience" className="section">
      <div className="container timeline-wrap">
        <SectionHeading eyebrow={ui.journey.eyebrow} title={ui.journey.title} />

        <div ref={ref} className="timeline">
          <div className="timeline__track" />
          <motion.div className="timeline__progress" style={{ scaleY: scrollYProgress }} />

          <ol className="timeline__list">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.title} delay={0.05 * i} className="timeline__item">
                <span className="timeline__dot" />
                <div className="timeline__side">
                  <p className="timeline__kind">{t(item.kind)}</p>
                  <p className="timeline__period">{t(item.period)}</p>
                </div>
                <div className="timeline__body">
                  <h3>{t(item.title)}</h3>
                  <p className="timeline__place">{t(item.place)}</p>
                  {item.points && (
                    <ul className="timeline__points">
                      {t(item.points).map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                  {item.photos && (
                    <div className="timeline__photos">
                      {item.photos.map((key, n) => (
                        <img
                          key={key}
                          src={journeyPhotos[key]}
                          alt={`${t(item.place)} ${n + 1}`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
