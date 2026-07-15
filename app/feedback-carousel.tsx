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
        <img src={review.image} alt={duplicate ? "" : review.alt} width="739" height="1600" loading="lazy" />
      </figure>
      <blockquote>“{review.quote}”</blockquote>
      <p className="feedback-context">{review.context}</p>
    </article>
  ));
}

export default function FeedbackCarousel() {
  return (
    <div className="feedback-carousel" aria-label="Customer reviews">
      <div className="feedback-track">
        <div className="feedback-set"><ReviewCards /></div>
        <div className="feedback-set" aria-hidden="true"><ReviewCards duplicate /></div>
      </div>
    </div>
  );
}
