import React, { useRef, useState } from "react";
import Lightbox, { Chevron } from "./Lightbox";
import "./Carousel.css";

// Swipeable photo slider built on native scroll-snap, so finger swipes on phones
// feel like the OS. On devices with a mouse, < > buttons appear on hover.
// Clicking a photo opens it big in the Lightbox.
export default function Carousel({ images, alt, className = "" }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [preview, setPreview] = useState(null);
  const many = images.length > 1;

  // The active slide is the one whose center is closest to the track's center
  const handleScroll = () => {
    const track = trackRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best);
  };

  const goTo = (i) => {
    const track = trackRef.current;
    const n = (i + images.length) % images.length;
    const slide = track.children[n];
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className={`carousel ${className}`}>
      <div ref={trackRef} className="carousel__track" onScroll={many ? handleScroll : undefined}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="carousel__slide"
            loading="lazy"
            draggable="false"
            onClick={() => setPreview(i)}
          />
        ))}
      </div>

      {many && (
        <>
          <button className="carousel__arrow carousel__arrow--prev" onClick={() => goTo(index - 1)} aria-label="Previous photo">
            <Chevron dir="prev" />
          </button>
          <button className="carousel__arrow carousel__arrow--next" onClick={() => goTo(index + 1)} aria-label="Next photo">
            <Chevron dir="next" />
          </button>
          <div className="carousel__dots">
            {images.map((src, i) => (
              <button
                key={src}
                className={`carousel__dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <Lightbox images={images} alt={alt} index={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
