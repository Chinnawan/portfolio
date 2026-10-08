import React from "react";
import { motion } from "framer-motion";

export const appleEase = [0.16, 1, 0.3, 1];

// Reusable Apple-style scroll reveal: fades in and slowly slides up into place
// the first time the element enters the viewport.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 60,
  duration = 1.1,
  amount = 0.3,
  className = "",
  ...rest
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: appleEase }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
