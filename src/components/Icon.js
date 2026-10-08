import React from "react";
// Renders a logo from src/data/icons.js.
//   { src }               → full-color image
//   { src, mono: true }   → single-color mask (uses `color`, or the text color)
//   { glyph }             → inline outline SVG for concepts without a logo
export default function Icon({ icon, className = "", size }) {
  const style = size ? { width: size, height: size } : undefined;

  if (icon.glyph) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`icon ${className}`}
        style={style}
        fill="none"
        stroke={icon.color || "currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icon.glyph}
      </svg>
    );
  }

  if (icon.mono) {
    return (
      <span
        className={`icon icon--mask ${className}`}
        style={{
          ...style,
          "--icon": `url("${icon.src}")`,
          ...(icon.color && { "--icon-color": icon.color }),
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <img src={icon.src} alt="" className={`icon ${className}`} style={style} aria-hidden="true" />
  );
}
