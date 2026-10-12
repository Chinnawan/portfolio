import React, { useEffect, useRef, useState } from "react";
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

  // While a nav click is smooth-scrolling, hold the clicked tab instead of
  // flicking through every section the page passes on the way
  const lockRef = useRef(false);
  const unlockTimer = useRef(0);

  // Highlight the last section whose top has passed the middle of the screen.
  // Read straight from scroll position so there are no gaps between sections.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (lockRef.current) return;
      const line = window.innerHeight * 0.45;
      let current = navIds[0];
      navIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      // Contact is short and may never reach the middle line
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) current = navIds[navIds.length - 1];
      setActive(current);
    };
    const onScroll = () => {
      if (lockRef.current) {
        // Release the lock once scrolling has settled
        clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => {
          lockRef.current = false;
          update();
        }, 150);
      }
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(unlockTimer.current);
    };
  }, []);

  const handleNavClick = (id) => {
    lockRef.current = true;
    setActive(id);
    // Fallback in case the page is already there and no scroll happens
    clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      lockRef.current = false;
    }, 1000);
  };

  return (
    <motion.nav
      className="navbar"
      layoutRoot
      initial={{ opacity: 0, y: 40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 1, delay: 1.2, ease: appleEase }}
    >
      <div className="navbar__pill">
        {navIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => handleNavClick(id)}
            className={`navbar__link ${active === id ? "is-active" : ""}`}
          >
            {active === id && (
              <motion.span
                layoutId="nav-active"
                className="navbar__indicator"
                transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.8 }}
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
