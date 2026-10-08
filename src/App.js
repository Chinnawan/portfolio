import React from "react";
import { MotionConfig } from "framer-motion";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    // reducedMotion="user" respects the OS "reduce motion" setting
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </MotionConfig>
  );
}
