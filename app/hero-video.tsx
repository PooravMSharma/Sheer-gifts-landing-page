"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="hero-primary-image"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/brand/client/featured-kuromi-hamper.jpeg"
        aria-label="A customised Kuromi-themed balloon hamper with flowers and gifts"
        width="640"
        height="800"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/brand/client/featured-kuromi-hamper.mp4" type="video/mp4" />
      </video>
      <button
        className="hero-video-control"
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause hamper video" : "Play hamper video"}
      >
        <span aria-hidden="true">{isPlaying ? "Pause" : "Play"}</span>
      </button>
    </>
  );
}
