import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { appleEase } from "./Reveal";
import { useLang } from "../context/LanguageContext";
import { ui } from "../data/portfolio";
import "./Navbar.css";

const navIds = ["home", "about", "work", "experience", "contact"];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

// Floating glass pill navigation, fixed at the bottom of the screen
export default function Navbar({ theme, onToggleTheme }) {
  const { lang, toggleLang, t } = useLang();
  const [active, setActive] = useState("home");

  // Highlight the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: 40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 1, delay: 1.2, ease: appleEase }}
    >
      <div className="navbar__pill">
        {navIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`navbar__link ${active === id ? "is-active" : ""}`}
          >
            {active === id && (
              <motion.span
                layoutId="nav-active"
                className="navbar__indicator"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className="navbar__label">{t(ui.nav[id])}</span>
          </a>
        ))}

        <span className="navbar__divider" />

        {/* Shows the current language; one click switches the whole site */}
        <button
          onClick={toggleLang}
          className="navbar__btn navbar__lang"
          aria-label={t(ui.langSwitch)}
          title={t(ui.langSwitch)}
        >
          <motion.span
            key={lang}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: appleEase }}
          >
            {lang === "th" ? "TH" : "EN"}
          </motion.span>
        </button>

        <button
          onClick={onToggleTheme}
          className="navbar__btn"
          aria-label={t(theme === "dark" ? ui.themeToLight : ui.themeToDark)}
          title={t(theme === "dark" ? ui.themeToLight : ui.themeToDark)}
        >
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: "grid" }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </motion.span>
        </button>
      </div>
    </motion.nav>
  );
}
