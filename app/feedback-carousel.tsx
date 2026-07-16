"use client";

import { useEffect, useRef } from "react";
import type { KeyboardEvent, PointerEvent as ReactPointerEvent } from "react";

const reviews = [
  {
    image: "/brand/client/customer-feedback-best-friend.jpeg",
    alt: "WhatsApp feedback praising the thoughtful customisation and saying the recipient loved everything",
    quote: "You’re amazing—the way you create everything with so much effort and customise it to my preference. My best friend loved everything!",
    context: "A best-friend surprise",
  },
  {
    image: "/brand/client/customer-feedback-customisation.jpeg",
    alt: "WhatsApp feedback saying the gift was exactly as requested and the detailing and customisation were top notch",
    quote: "The gift was exactly as I wanted. The detailing and customisation were top notch—really loved it!",
    context: "Made exactly to the brief",
  },
  {
    image: "/brand/client/customer-feedback-birthday-gift-box.jpeg",
    alt: "Customer feedback praising a beautifully packaged birthday gift box, thoughtful details, quick service and customisation options",
    quote: "I absolutely loved the gift box! From the beautiful packaging to the thoughtful personal touches, everything was done so perfectly.",
    context: "A memorable birthday gift",
  },
  {
    image: "/brand/client/customer-feedback-wedding-invitation.jpeg",
    alt: "Customer feedback praising an elegant wedding invitation hamper and wholeheartedly recommending Sheer Gifts",
    quote: "Every detail was thoughtfully designed, and the presentation was elegant and beyond our expectations. We wholeheartedly recommend your work.",
    context: "A wedding invitation hamper",
  },
  {
    image: "/brand/client/customer-feedback-gift-hamper.jpeg",
    alt: "Customer feedback saying the gift hamper was beautifully packed and the quality of the items was excellent",
    quote: "Loved the gift hamper! Beautifully packed and the quality of the items was excellent. Thank you!",
    context: "Beautifully packed",
  },
  {
    image: "/brand/client/customer-feedback-bride-to-be.jpeg",
    alt: "Customer feedback praising a thoughtful bride-to-be hamper, dreamy decor and attention to every detail",
    quote: "The hamper was absolutely beautiful—thoughtful, emotional and perfectly curated for my best friend’s bride-to-be celebration.",
    context: "A bride-to-be celebration",
  },
];

function ReviewCards({ duplicate = false }: { duplicate?: boolean }) {
  return reviews.map((review, index) => (
    <article
      className={`feedback-card feedback-card-${index + 1}`}
      key={`${duplicate ? "duplicate" : "review"}-${review.context}`}
      aria-hidden={duplicate || undefined}
    >
      <figure className="feedback-shot">
        <img src={review.image} alt={duplicate ? "" : review.alt} width="739" height="1600" loading="lazy" draggable="false" />
      </figure>
      <blockquote>“{review.quote}”</blockquote>
      <p className="feedback-context">{review.context}</p>
    </article>
  ));
}

export default function FeedbackCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const dragStartPhaseRef = useRef(0);
  const orbitPhaseRef = useRef(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const keepInLoop = (value: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return value;
    const firstSet = carousel.querySelector<HTMLElement>(".feedback-set");
    const loopWidth = firstSet?.getBoundingClientRect().width ?? 0;
    if (!loopWidth) return value;
    return ((value % loopWidth) + loopWidth) % loopWidth;
  };

  const resumeSoon = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopLayout = window.matchMedia("(min-width: 621px)");
    const cards = Array.from(carousel.querySelectorAll<HTMLElement>(".feedback-set:first-child .feedback-card"));
    let animationFrame = 0;
    let previousTime = performance.now();

    const renderOrbit = () => {
      if (!desktopLayout.matches || reducedMotion) {
        cards.forEach((card) => {
          card.style.removeProperty("--orbit-x");
          card.style.removeProperty("--orbit-y");
          card.style.removeProperty("--orbit-z");
          card.style.removeProperty("--orbit-rotate");
          card.style.removeProperty("--orbit-scale");
          card.style.removeProperty("--orbit-opacity");
          card.style.removeProperty("z-index");
          card.classList.remove("is-front-review");
        });
        return;
      }

      const radiusX = Math.min(carousel.clientWidth * 0.29, 285);
      const radiusY = Math.min(carousel.clientHeight * 0.18, 115);
      const positions = cards.map((_, index) => {
        const angle = ((index - orbitPhaseRef.current) / cards.length) * Math.PI * 2;
        return { angle, depth: Math.cos(angle), side: Math.sin(angle) };
      });
      const frontIndex = positions.reduce(
        (bestIndex, position, index) => position.depth > positions[bestIndex].depth ? index : bestIndex,
        0,
      );

      cards.forEach((card, index) => {
        const { depth, side } = positions[index];
        const frontness = (depth + 1) / 2;
        const isFront = index === frontIndex;

        card.style.setProperty("--orbit-x", `${side * radiusX}px`);
        card.style.setProperty("--orbit-y", `${depth * radiusY}px`);
        card.style.setProperty("--orbit-z", isFront ? "240px" : `${-140 + frontness * 70}px`);
        card.style.setProperty("--orbit-rotate", `${side * -13}deg`);
        card.style.setProperty("--orbit-scale", `${0.78 + frontness * 0.24}`);
        card.style.setProperty("--orbit-opacity", isFront ? "1" : `${0.2 + frontness * 0.24}`);
        card.style.zIndex = isFront ? "1000" : `${Math.round(frontness * 100)}`;
        card.classList.toggle("is-front-review", isFront);
      });
    };

    const animate = (time: number) => {
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;

      if (!pausedRef.current && !reducedMotion) {
        if (desktopLayout.matches) {
          orbitPhaseRef.current = (orbitPhaseRef.current + elapsed * 0.0002) % cards.length;
        } else {
          carousel.scrollLeft = keepInLoop(carousel.scrollLeft + elapsed * 0.032);
        }
      }

      renderOrbit();

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    pausedRef.current = true;
    draggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = event.currentTarget.scrollLeft;
    dragStartPhaseRef.current = orbitPhaseRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    event.preventDefault();
    const distance = event.clientX - dragStartXRef.current;
    if (window.matchMedia("(min-width: 621px)").matches) {
      orbitPhaseRef.current = dragStartPhaseRef.current - distance / 220;
    } else {
      event.currentTarget.scrollLeft = keepInLoop(dragStartScrollRef.current - distance);
    }
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (event.pointerType !== "mouse") resumeSoon();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    pausedRef.current = true;
    const direction = event.key === "ArrowRight" ? 1 : -1;
    if (window.matchMedia("(min-width: 621px)").matches) {
      orbitPhaseRef.current += direction;
    } else {
      event.currentTarget.scrollLeft = keepInLoop(event.currentTarget.scrollLeft + direction * 320);
    }
    resumeSoon();
  };

  return (
    <div
      className="feedback-carousel"
      ref={carouselRef}
      aria-label="Customer reviews. Swipe or drag to browse."
      role="region"
      tabIndex={0}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") pausedRef.current = true;
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && !draggingRef.current) pausedRef.current = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onKeyDown={handleKeyDown}
    >
      <div className="feedback-track">
        <div className="feedback-set"><ReviewCards /></div>
        <div className="feedback-set" aria-hidden="true"><ReviewCards duplicate /></div>
      </div>
    </div>
  );
}
