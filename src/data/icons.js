import React from "react";
// Brand logos (colored SVGs from devicon + simple-icons, bundled by react-scripts)
import python from "devicon/icons/python/python-original.svg";
import cpp from "devicon/icons/cplusplus/cplusplus-original.svg";
import java from "devicon/icons/java/java-original.svg";
import javascript from "devicon/icons/javascript/javascript-original.svg";
import dart from "devicon/icons/dart/dart-original.svg";
import html from "devicon/icons/html5/html5-original.svg";
import css from "devicon/icons/css3/css3-original.svg";
import matlab from "devicon/icons/matlab/matlab-original.svg";
import react from "devicon/icons/react/react-original.svg";
import nodejs from "devicon/icons/nodejs/nodejs-original.svg";
import flutter from "devicon/icons/flutter/flutter-original.svg";
import tailwind from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import opencv from "devicon/icons/opencv/opencv-original.svg";
import mysql from "devicon/icons/mysql/mysql-original.svg";
import typescript from "devicon/icons/typescript/typescript-original.svg";
import docker from "devicon/icons/docker/docker-original.svg";
import firebase from "devicon/icons/firebase/firebase-original.svg";
import azure from "devicon/icons/azure/azure-original.svg";
import git from "devicon/icons/git/git-original.svg";
import github from "devicon/icons/github/github-original.svg";
import vscode from "devicon/icons/vscode/vscode-original.svg";
import figma from "devicon/icons/figma/figma-original.svg";
import arduino from "devicon/icons/arduino/arduino-original.svg";
import premiere from "devicon/icons/premierepro/premierepro-original.svg";
import photoshop from "devicon/icons/photoshop/photoshop-original.svg";
import linkedin from "devicon/icons/linkedin/linkedin-plain.svg";
import linkedinColor from "devicon/icons/linkedin/linkedin-original.svg";
import espressif from "simple-icons/icons/espressif.svg";
import gmail from "simple-icons/icons/gmail.svg";
// Single-color logos for project tech stacks (follow the theme's text color)
import monoNext from "simple-icons/icons/nextdotjs.svg";
import monoReact from "simple-icons/icons/react.svg";
import monoTypescript from "simple-icons/icons/typescript.svg";
import monoTailwind from "simple-icons/icons/tailwindcss.svg";
import monoFirebase from "simple-icons/icons/firebase.svg";
import monoDocker from "simple-icons/icons/docker.svg";
import monoFlutter from "simple-icons/icons/flutter.svg";
import monoDart from "simple-icons/icons/dart.svg";
import monoEasyeda from "simple-icons/icons/easyeda.svg";
import monoArduino from "simple-icons/icons/arduino.svg";
import monoEspressif from "simple-icons/icons/espressif.svg";
// Project screenshots / photos
import courthub from "../assets/courthub.png";
import carhub from "../assets/projects/carhub.png";
import transformerBoard from "../assets/projects/transformer-board.jpg";
import transformerBox from "../assets/projects/transformer-box.jpg";
import transformerCoil from "../assets/projects/transformer-coil.jpg";
import pcbBoard from "../assets/projects/pcb-board.jpg";
import pcbDesign from "../assets/projects/pcb-design.jpg";
import pcbEtching from "../assets/projects/pcb-etching.jpg";
// Journey photos
import hdtv1 from "../assets/journey/hdtv-1.jpg";
import hdtv2 from "../assets/journey/hdtv-2.jpg";
import hdtv3 from "../assets/journey/hdtv-3.jpg";
import expopass1 from "../assets/journey/expopass-1.jpg";
import sabai1 from "../assets/journey/sabai-1.jpg";
import sabai2 from "../assets/journey/sabai-2.jpg";
import sabai3 from "../assets/journey/sabai-3.jpg";

export const stackIcons = {
  nextjs: { src: monoNext, mono: true },
  react: { src: monoReact, mono: true },
  typescript: { src: monoTypescript, mono: true },
  tailwind: { src: monoTailwind, mono: true },
  firebase: { src: monoFirebase, mono: true },
  docker: { src: monoDocker, mono: true },
  flutter: { src: monoFlutter, mono: true },
  dart: { src: monoDart, mono: true },
  easyeda: { src: monoEasyeda, mono: true },
  arduino: { src: monoArduino, mono: true },
  esp32: { src: monoEspressif, mono: true },
  // Hardware skills without a logo → outline glyphs (follow the text color)
  soldering: {
    glyph: (
      <>
        <path d="m14.5 3.5 6 6-7.5 7.5-6-6z" />
        <path d="m7 11-4.5 9.5L12 16" />
      </>
    ),
  },
  coil: {
    glyph: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 4v16M16 4v16M8 8h8M8 12h8M8 16h8" />
      </>
    ),
  },
  circuit: {
    glyph: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M10 7V3M14 7V3M10 21v-4M14 21v-4M7 10H3M7 14H3M21 10h-4M21 14h-4" />
      </>
    ),
  },
};

export const screenshots = {
  courthub,
  carhub,
  transformerBoard,
  transformerBox,
  transformerCoil,
  pcbBoard,
  pcbDesign,
  pcbEtching,
};

export const journeyPhotos = { hdtv1, hdtv2, hdtv3, expopass1, sabai1, sabai2, sabai3 };

export const icons = {
  python: { src: python },
  cpp: { src: cpp },
  java: { src: java },
  javascript: { src: javascript },
  dart: { src: dart },
  html: { src: html },
  css: { src: css },
  matlab: { src: matlab },
  react: { src: react },
  nodejs: { src: nodejs },
  flutter: { src: flutter },
  tailwind: { src: tailwind },
  opencv: { src: opencv },
  mysql: { src: mysql, mono: true, color: "#4f8cc9" }, // brighter MySQL blue, visible on dark
  typescript: { src: typescript },
  nextjs: { src: monoNext, mono: true }, // black logo → follow text color
  docker: { src: docker },
  easyeda: { src: monoEasyeda, mono: true, color: "#1765F6" },
  firebase: { src: firebase },
  azure: { src: azure },
  git: { src: git },
  github: { src: github, mono: true }, // black logo → follow text color
  vscode: { src: vscode },
  figma: { src: figma },
  esp32: { src: espressif, mono: true, color: "#E7352C" },
  arduino: { src: arduino },
  premiere: { src: premiere },
  photoshop: { src: photoshop },
  linkedin: { src: linkedin, mono: true },
  linkedinColor: { src: linkedinColor },
  gmail: { src: gmail, mono: true },
  gmailColor: { src: gmail, mono: true, color: "#EA4335" },

  // Concepts without an official logo → simple outline glyphs
  ml: {
    color: "#a78bfa",
    glyph: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6.8 10.2 11M7 17.2l3.2-4.2M13.8 11 17 6.8M13.8 13l3.2 4.2" />
      </>
    ),
  },
  dsa: {
    color: "#38bdf8",
    glyph: (
      <>
        <circle cx="12" cy="4.5" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="3.5" cy="19.5" r="1.8" />
        <circle cx="8.5" cy="19.5" r="1.8" />
        <path d="M10.7 6.1 7.3 10.4M13.3 6.1l3.4 4.3M5.2 13.8 4.2 17.8M6.8 13.8l1 3.9" />
      </>
    ),
  },
  oop: {
    color: "#fbbf24",
    glyph: (
      <>
        <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
        <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
      </>
    ),
  },
  video: {
    color: "#f472b6",
    glyph: (
      <>
        <rect x="2.5" y="5" width="13" height="14" rx="2.5" />
        <path d="m15.5 10 6-3.5v11l-6-3.5" />
      </>
    ),
  },
  pcb: { ...stackIcons.circuit, color: "#22c55e" },
  soldering: { ...stackIcons.soldering, color: "#f59e0b" },
  coil: { ...stackIcons.coil, color: "#fb923c" },
  qa: {
    color: "#60a5fa",
    glyph: (
      <>
        <path d="M8 4.5h8M9 2.5v2M15 2.5v2" />
        <rect x="5" y="4.5" width="14" height="17" rx="2.5" />
        <path d="m8.5 13 2.5 2.5 4.5-5" />
      </>
    ),
  },
  live: {
    color: "#f87171",
    glyph: (
      <>
        <circle cx="12" cy="12" r="2.2" />
        <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.2 5.2a9.6 9.6 0 0 0 0 13.6M18.8 5.2a9.6 9.6 0 0 1 0 13.6" />
      </>
    ),
  },
  camera: {
    color: "#34d399",
    glyph: (
      <>
        <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H8l1.5-2.5h5L16 6h2.5A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" />
        <circle cx="12" cy="13" r="3.8" />
      </>
    ),
  },
};
