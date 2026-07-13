const instagramUrl = "https://www.instagram.com/sheergiftsjaipur/";

const giftingCategories = [
  {
    title: "Custom hampers",
    note: "Curated around the person, the occasion and the feeling you want to send.",
    image: "/brand/bride-to-be-hamper.jpg",
    alt: "A personalised Sheer Gifts bride-to-be hamper",
    tag: "Made personal",
  },
  {
    title: "Memory gifts",
    note: "Photos, notes and tiny details come together in keepsakes that feel unmistakably theirs.",
    image: "/brand/best-friend-memory-board.jpg",
    alt: "A handmade birthday memory board by Sheer Gifts",
    tag: "Friendship & birthdays",
  },
  {
    title: "Celebration boxes",
    note: "A joyful mix of treats, flowers and personal touches for moments worth marking.",
    image: "/brand/love-basket.jpg",
    alt: "A love basket with snacks, flowers and photographs",
    tag: "Love & milestones",
  },
  {
    title: "Balloon hampers",
    note: "A playful statement gift, styled with favourite treats and messages from the heart.",
    image: "/brand/balloon-hamper.jpg",
    alt: "A customised balloon hamper with flowers and treats",
    tag: "Big little surprises",
  },
];

const signatureGifts = [
  "Custom hampers",
  "Personalised gifts",
  "Floral bouquets",
  "Wedding invitations",
  "Birthday gifting",
  "Friendship keepsakes",
];

const steps = [
  {
    number: "01",
    title: "Tell us the moment",
    text: "DM us the occasion, who it is for and the date you have in mind.",
  },
  {
    number: "02",
    title: "Make it personal",
    text: "Share the details that matter—favourite things, memories, notes and your ideas.",
  },
  {
    number: "03",
    title: "Curate it together",
    text: "We’ll continue the conversation on Instagram and shape a gift around your brief.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>Thoughtful gifting, reimagined</p>
        <span aria-hidden="true">✦</span>
        <p>Custom-made in Jaipur</p>
        <span aria-hidden="true">✦</span>
        <p>DM to order</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sheer Gifts home">
          <img src="/brand/sheer-gifts-logo.jpg" alt="" width="52" height="52" />
          <span>
            <strong>Sheer Gifts</strong>
            <small>Jaipur</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#gifting">Our gifting</a>
          <a href="#story">Our story</a>
          <a href="#order">How to order</a>
        </nav>

        <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          DM to order <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Bespoke gifting studio · Jaipur</p>
          <h1>
            Gifts that say what words <em>sometimes can’t.</em>
          </h1>
          <p className="hero-intro">
            Custom hampers, personalised keepsakes and floral gestures—thoughtfully curated for the people and moments that matter.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href={instagramUrl} target="_blank" rel="noreferrer">
              Start your order <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#gifting">
              Explore our gifting <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-signature" aria-label="Sheer brand definition">
            <span className="signature-mark">S</span>
            <p><strong>SHEER</strong> /ʃɪə/ <br />Utter, Pure, Simple</p>
          </div>
        </div>

        <div className="hero-art" aria-label="A selection of Sheer Gifts creations">
          <div className="hero-arch">
            <img
              className="hero-primary-image"
              src="/brand/bride-to-be-hamper.jpg"
              alt="A personalised hamper by Sheer Gifts"
              width="640"
              height="800"
            />
            <span className="image-note image-note-top">Made for their moment</span>
            <span className="image-note image-note-bottom">Curated in Jaipur</span>
          </div>
          <figure className="hero-polaroid">
            <img
              src="/brand/best-friend-memory-board.jpg"
              alt="A personalised friendship memory board"
              width="280"
              height="350"
            />
            <figcaption>memories, made tangible</figcaption>
          </figure>
          <div className="hero-stamp" aria-hidden="true">
            <span>Crafted for</span>
            <strong>moments</strong>
            <span>that matter</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Sheer Gifts specialties">
        <div>
          <span>Custom hampers</span><b>✦</b>
          <span>Personalised gifts</span><b>✦</b>
          <span>Floral gestures</span><b>✦</b>
          <span>Wedding moments</span><b>✦</b>
          <span>Birthday surprises</span><b>✦</b>
        </div>
      </div>

      <section className="story section" id="story">
        <div className="section-label">
          <span>01</span>
          <p>Why Sheer</p>
        </div>
        <div className="story-copy">
          <p className="story-kicker">SHEER · /ʃɪə/ · adjective</p>
          <h2>Utter. Pure. Simple.</h2>
          <p className="story-lead">
            We believe the best gifts feel less like things and more like a person saying, “I know you.”
          </p>
          <div className="story-detail">
            <p>
              That is why every Sheer creation begins with a moment: a birthday, a friendship, a wedding, a quiet thank-you—or simply a reason to make someone feel seen.
            </p>
            <p>
              From personal notes and photographs to favourite treats and flowers, the details are brought together with intention and an unmistakably personal touch.
            </p>
          </div>
        </div>
      </section>

      <section className="gifting section" id="gifting">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow"><span /> Our gifting</p>
            <h2>Made around the person,<br /><em>not pulled from a shelf.</em></h2>
          </div>
          <p>
            A glimpse into past Sheer creations. Every order can begin with a different story—DM us to ask what is currently available.
          </p>
        </div>

        <div className="product-grid">
          {giftingCategories.map((category, index) => (
            <a
              className={`product-card product-card-${index + 1}`}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              key={category.title}
              aria-label={`${category.title} — enquire on Instagram`}
            >
              <img src={category.image} alt={category.alt} width="700" height="780" loading="lazy" />
              <span className="product-tag">{category.tag}</span>
              <div className="product-card-copy">
                <div>
                  <p>0{index + 1}</p>
                  <h3>{category.title}</h3>
                  <span>{category.note}</span>
                </div>
                <b aria-hidden="true">↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="signature section">
        <div className="signature-panel">
          <p className="eyebrow eyebrow-light"><span /> Signature gifting</p>
          <h2>There is always a<br /><em>reason to gift.</em></h2>
          <p className="signature-intro">
            From intimate keepsakes to celebration-ready hampers, tell us the feeling and we’ll start there.
          </p>
          <div className="signature-list">
            {signatureGifts.map((gift, index) => (
              <div key={gift}>
                <span>0{index + 1}</span>
                <p>{gift}</p>
                <b aria-hidden="true">↗</b>
              </div>
            ))}
          </div>
          <a className="button button-light" href={instagramUrl} target="_blank" rel="noreferrer">
            Ask about your occasion <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="signature-gallery">
          <figure className="gallery-main">
            <img src="/brand/love-basket.jpg" alt="A personalised celebration hamper" width="700" height="700" loading="lazy" />
          </figure>
          <figure className="gallery-small">
            <img src="/brand/balloon-hamper.jpg" alt="A balloon hamper by Sheer Gifts" width="420" height="520" loading="lazy" />
          </figure>
          <p className="gallery-caption">Tiny details.<br />Big feelings.</p>
        </div>
      </section>

      <section className="order section" id="order">
        <div className="order-intro">
          <p className="eyebrow"><span /> How to order</p>
          <h2>From “I have an idea”<br />to <em>something unforgettable.</em></h2>
          <p>Ordering starts with a conversation—simple, personal and entirely on Instagram.</p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <div className="step-line" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="order-prompt">
          <p>Helpful things to include in your first DM</p>
          <div>
            <span>Occasion</span>
            <span>Recipient</span>
            <span>Date</span>
            <span>Your ideas</span>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div>
          <p className="eyebrow"><span /> Good to know</p>
          <h2>A few little<br /><em>details.</em></h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Can the gifts be customised?<span>+</span></summary>
            <p>Yes. Custom hampers and personalised gifts are at the heart of Sheer. Send your ideas, memories and preferences by DM so the conversation can begin.</p>
          </details>
          <details>
            <summary>Where is Sheer Gifts based?<span>+</span></summary>
            <p>Sheer Gifts is based in Jaipur, Rajasthan.</p>
          </details>
          <details>
            <summary>How do I place an order?<span>+</span></summary>
            <p>Message @sheergiftsjaipur on Instagram with the occasion, recipient, date and any personalisation ideas. Availability and next steps are confirmed there.</p>
          </details>
          <details>
            <summary>Do you make seasonal or corporate hampers?<span>+</span></summary>
            <p>Sheer has created seasonal and corporate gifts in the past. Please DM to ask about current availability for your occasion or brief.</p>
          </details>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-monogram" aria-hidden="true">S</div>
        <p>Have a moment in mind?</p>
        <h2>Let’s make it feel<br /><em>like them.</em></h2>
        <a className="button button-dark" href={instagramUrl} target="_blank" rel="noreferrer">
          DM @sheergiftsjaipur <span aria-hidden="true">↗</span>
        </a>
        <span className="closing-note">Thoughtfully curated in Jaipur</span>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <img src="/brand/sheer-gifts-logo.jpg" alt="Sheer Gifts" width="88" height="88" />
        </a>
        <div>
          <p>Custom hampers · Personalised gifts · Jaipur</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <p>Crafted for moments that matter.</p>
      </footer>

      <a className="mobile-order" href={instagramUrl} target="_blank" rel="noreferrer">
        DM to order <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
