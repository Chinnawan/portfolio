import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const appleEase = [0.16, 1, 0.3, 1];

// Shows the element once enough of it is on screen, and only hides it again after
// it has gone fully below the viewport (i.e. you scrolled back up past it).
// Never hiding on the way out at the top avoids content vanishing while it's still
// visible on phones, where the browser bars make the real viewport taller.
export function useReveal(amount = 0.3) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const thresholds = [0, amount];
    for (let i = 0.05; i < 1; i += 0.05) thresholds.push(i);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rootHeight = entry.rootBounds ? entry.rootBounds.height : window.innerHeight;
        // Tall elements can never reach `amount`; treat filling enough of the screen as "in view"
        const enough =
          entry.intersectionRatio >= amount - 0.001 ||
          entry.intersectionRect.height >= rootHeight * amount;
        if (entry.isIntersecting && enough) setShown(true);
        else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) setShown(false);
      },
      { threshold: thresholds }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount]);

  return [ref, shown];
}

// Reusable Apple-style scroll reveal: fades in and slowly slides up into place
// every time the element enters the viewport from below.
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
  const [ref, shown] = useReveal(amount);
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: appleEase }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
