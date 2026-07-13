"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const giftingCategories = [
  {
    title: "Custom hampers",
    note: "Curated around the person, the occasion and the feeling you want to send.",
    description:
      "A one-of-a-kind hamper curated around the recipient, occasion and feeling you want to send. The theme, colours and personal touches can all begin with your brief.",
    image: "/brand/client/custom-bridal-hamper.jpeg",
    alt: "A personalised bridal hamper with flowers, photographs, chocolates and a teddy",
    tag: "Made personal",
    details: [
      "Recipient-led",
      "Theme & colour styling",
      "Personal notes or photos",
      "Treats & keepsakes",
      "Custom presentation",
    ],
    suitableFor:
      "Birthdays, anniversaries, thank-yous, proposals and thoughtful just-because gifts.",
  },
  {
    title: "Memory gifts",
    note: "Photos, notes and tiny details come together in keepsakes that feel unmistakably theirs.",
    description:
      "Favourite photographs, messages and shared moments are brought together as a keepsake that feels unmistakably theirs.",
    image: "/brand/client/birthday-memory-frame.jpeg",
    alt: "A framed birthday collage made with photographs and personal memories",
    tag: "Friendship & birthdays",
    details: [
      "Photo-led design",
      "Personal messages",
      "Milestone dates",
      "Collage styling",
      "Keepsake presentation",
    ],
    suitableFor:
      "Best friends, birthdays, anniversaries, farewells and long-distance surprises.",
  },
  {
    title: "Celebration boxes",
    note: "A joyful mix of treats, flowers and personal touches for moments worth marking.",
    description:
      "A joyful gift box styled around the moment, bringing together festive details and thoughtful touches in one cheerful surprise.",
    image: "/brand/client/celebration-memory-box.jpeg",
    alt: "An open celebration box with photographs, flowers, snacks and keepsakes",
    tag: "Love & milestones",
    details: [
      "Occasion styling",
      "Colour themes",
      "Treat selection",
      "Floral touches",
      "Personal message",
    ],
    suitableFor:
      "Birthdays, achievements, reunions, congratulations and surprise gifting.",
  },
  {
    title: "Wedding hampers",
    note: "First invitations and wedding moments, styled with keepsakes, treats and meaningful details.",
    description:
      "Elegant hampers created for wedding rituals and new beginnings, with the presentation tailored to the couple, family or occasion.",
    image: "/brand/client/wedding-invitation-hamper.jpeg",
    alt: "A red and gold first wedding invitation hamper with dry fruits and keepsakes",
    tag: "New beginnings",
    details: [
      "Invitation presentation",
      "Couple or family personalisation",
      "Traditional accents",
      "Keepsake styling",
      "Premium presentation",
    ],
    suitableFor:
      "First invitations, engagements, bride-and-groom gifting, bridal parties and family welcomes.",
  },
];

type GiftingGalleryProps = {
  whatsappUrl: string;
};

export default function GiftingGallery({ whatsappUrl }: GiftingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const page = document.querySelector("main");
    const previousOverflow = document.body.style.overflow;
    page?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";

    const focusCloseButton = window.requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLButtonElement>(".product-modal-close")
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusCloseButton);
      document.removeEventListener("keydown", handleKeyDown);
      page?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      triggerRefs.current[activeIndex]?.focus();
    };
  }, [activeIndex]);

  const activeGift = activeIndex === null ? null : giftingCategories[activeIndex];

  return (
    <>
      <div className="product-grid">
        {giftingCategories.map((category, index) => (
          <button
            className={`product-card product-card-${index + 1}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            ref={(element) => {
              triggerRefs.current[index] = element;
            }}
            key={category.title}
            aria-haspopup="dialog"
            aria-label={`View details about ${category.title}`}
          >
            <img src={category.image} alt={category.alt} width="700" height="780" loading="lazy" />
            <span className="product-tag">{category.tag}</span>
            <div className="product-card-copy">
              <div>
                <p>0{index + 1}</p>
                <h3>{category.title}</h3>
                <span>{category.note}</span>
              </div>
              <b aria-hidden="true">+</b>
            </div>
          </button>
        ))}
      </div>

      {mounted && activeGift && activeIndex !== null
        ? createPortal(
            <div
              className="product-modal-backdrop"
              onClick={(event) => {
                if (event.currentTarget === event.target) setActiveIndex(null);
              }}
            >
              <div
                className="product-modal"
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`product-modal-title-${activeIndex}`}
                aria-describedby={`product-modal-description-${activeIndex}`}
              >
                <button
                  className="product-modal-close"
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label={`Close ${activeGift.title} details`}
                >
                  <span aria-hidden="true">×</span>
                </button>

                <div className="product-modal-media">
                  <img src={activeGift.image} alt={activeGift.alt} width="700" height="780" />
                  <span>{activeGift.tag}</span>
                </div>

                <div className="product-modal-body">
                  <p className="product-modal-kicker">Sheer gifting · 0{activeIndex + 1}</p>
                  <h2 id={`product-modal-title-${activeIndex}`}>{activeGift.title}</h2>
                  <p
                    className="product-modal-lead"
                    id={`product-modal-description-${activeIndex}`}
                  >
                    {activeGift.description}
                  </p>

                  <div className="product-modal-group">
                    <h3>Possible details</h3>
                    <div className="product-modal-tags">
                      {activeGift.details.map((detail) => (
                        <span key={detail}>{detail}</span>
                      ))}
                    </div>
                  </div>

                  <div className="product-modal-group product-modal-suitable">
                    <h3>Lovely for</h3>
                    <p>{activeGift.suitableFor}</p>
                  </div>

                  <p className="product-modal-note">
                    Each Sheer creation is customised, so the final design and details may vary according to your preferences and current availability.
                  </p>

                  <a
                    className="button button-dark product-modal-cta"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss this gift on WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
