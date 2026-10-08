import React from "react";
import { useLang } from "../context/LanguageContext";
import { links, profile, ui } from "../data/portfolio";
import { icons } from "../data/icons";
import Reveal from "./Reveal";
import Icon from "./Icon";
import "./Contact.css";

const socials = [
  { label: "GitHub", href: links.github, icon: icons.github },
  { label: "LinkedIn", href: links.linkedin, icon: icons.linkedinColor },
];

export default function Contact() {
  const { t } = useLang();
  const [line1, line2] = t(ui.contact.title);

  return (
    <footer id="contact" className="contact">
      <div className="container">
        <Reveal as="p" className="eyebrow contact__eyebrow">
          {t(ui.contact.eyebrow)}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="contact__title">
          {line1}
          <br />
          {line2}
        </Reveal>

        <Reveal delay={0.2} className="contact__email-wrap">
          <a href={`mailto:${links.email}`} className="contact__email">
            <Icon icon={icons.gmailColor} className="contact__email-icon" />
            {links.email}
          </a>
        </Reveal>

        <Reveal delay={0.3} className="contact__actions">
          <a href={links.resume} download className="btn contact__btn contact__btn--solid">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14" />
            </svg>
            {t(ui.contact.resume)}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="btn contact__btn"
            >
              <Icon icon={s.icon} size={20} />
              {s.label}
            </a>
          ))}
        </Reveal>

        <div className="contact__bottom">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </p>
          <p>{t(ui.contact.builtWith)}</p>
        </div>
      </div>
    </footer>
  );
}
