import React from "react";
// Brand logos (colored SVGs from devicon + simple-icons, bundled by Vite)
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
