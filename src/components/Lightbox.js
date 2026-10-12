import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { appleEase } from "./Reveal";
import "./Lightbox.css";

export function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "prev" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

function Viewer({ images, alt, start, onClose }) {
  const dialogRef = useRef(null);
  const trackRef = useRef(null);
  const thumbsRef = useRef(null);
  const [index, setIndex] = useState(start);
  const many = images.length > 1;

  // Each slide is exactly one track-width wide, so the index comes from scrollLeft
  const current = () => Math.round(trackRef.current.scrollLeft / trackRef.current.clientWidth);

  const goTo = (i) => {
    const track = trackRef.current;
    const n = (i + images.length) % images.length;
    track.scrollTo({ left: n * track.clientWidth, behavior: "smooth" });
  };

  // Open straight on the photo that was clicked
  useLayoutEffect(() => {
    const track = trackRef.current;
    track.scrollTo({ left: start * track.clientWidth, behavior: "instant" });
  }, [start]);

  // Freeze the page behind, and support Esc / arrow keys
  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    // Take focus so the keys aren't handled by the page or the photo track first
    dialogRef.current.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        // Stop the browser's own arrow-key scrolling / text caret
        e.preventDefault();
        goTo(current() + (e.key === "ArrowRight" ? 1 : -1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the active thumbnail in view
  useEffect(() => {
    const thumb = thumbsRef.current && thumbsRef.current.children[index];
    if (thumb) thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <motion.div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <motion.div
        className="lightbox__stage"
        initial={{ scale: 0.94 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.94 }}
        transition={{ duration: 0.45, ease: appleEase }}
      >
        <div ref={trackRef} className="lightbox__track" tabIndex={-1} onScroll={() => setIndex(current())}>
          {images.map((src, i) => (
            // Clicking the empty space around a photo closes the preview
            <div key={src} className="lightbox__slide" onClick={onClose}>
              <img src={src} alt={`${alt} ${i + 1}`} draggable="false" onClick={(e) => e.stopPropagation()} />
            </div>
          ))}
        </div>

        {many && (
          <>
            <button className="lightbox__arrow lightbox__arrow--prev" onClick={() => goTo(index - 1)} aria-label="Previous photo">
              <Chevron dir="prev" />
            </button>
            <button className="lightbox__arrow lightbox__arrow--next" onClick={() => goTo(index + 1)} aria-label="Next photo">
              <Chevron dir="next" />
            </button>
          </>
        )}
      </motion.div>

      {many && (
        <div ref={thumbsRef} className="lightbox__thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={`lightbox__thumb ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Photo ${i + 1}`}
            >
              <img src={src} alt="" draggable="false" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Near-full-screen photo preview over a blurred page. `index` is the photo to
// open on, or null when closed. Rendered into <body> so parent transforms
// (scroll animations) can't shift it.
export default function Lightbox({ images, alt, index, onClose }) {
  return createPortal(
    <AnimatePresence>
      {index !== null && <Viewer key="viewer" images={images} alt={alt} start={index} onClose={onClose} />}
    </AnimatePresence>,
    document.body
  );
}
