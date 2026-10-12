import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { skillGroups, ui } from "../data/portfolio";
import { icons } from "../data/icons";
import SectionHeading from "./SectionHeading";
import Reveal, { appleEase, useReveal } from "./Reveal";
import Icon from "./Icon";
import "./Skills.css";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } },
};

function SkillList({ items, t }) {
  const [ref, shown] = useReveal(0.3);
  return (
    <motion.ul
      ref={ref}
      className="skills__list"
      variants={list}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
    >
      {items.map((skill) => (
        <motion.li key={t(skill.name)} variants={item} className="skills__item">
          <Icon icon={icons[skill.icon]} className="skills__icon" />
          <span>{t(skill.name)}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function Skills() {
  const { t } = useLang();

  return (
    <section className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow={ui.skills.eyebrow}
          title={ui.skills.title}
          lead={ui.skills.lead}
        />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.1} className="skills__tile">
              <div className="skills__tile-head">
                <h3>{t(group.title)}</h3>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <SkillList items={group.items} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
