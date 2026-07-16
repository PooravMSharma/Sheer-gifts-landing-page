import GiftingGallery from "./gifting-gallery";
import HeroVideo from "./hero-video";
import FeedbackCarousel from "./feedback-carousel";

const instagramUrl = "https://www.instagram.com/sheergiftsjaipur/";
const whatsappUrl =
  "https://wa.me/918209216121?text=Hi%20Sheer%20Gifts%20Jaipur!%20I%20would%20like%20to%20place%20an%20order.";

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>Thoughtful gifting, reimagined</p>
        <span aria-hidden="true">✦</span>
        <p>Custom-made in Jaipur</p>
        <span aria-hidden="true">✦</span>
        <p>WhatsApp to order</p>
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
          <a href="#feedback">Kind words</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          Follow on Instagram <span aria-hidden="true">↗</span>
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
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Order on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#gifting">
              Explore our gifting <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-signature" aria-label="Sheer brand definition">
            {/* <span className="signature-mark">S</span> */}
            <p><strong>SHEER</strong> /ʃɪə/ <br />Utter, Pure, Simple</p>
          </div>
        </div>

        <div className="hero-art" aria-label="A selection of Sheer Gifts creations">
          <div className="hero-arch">
            <HeroVideo />
            <span className="image-note image-note-top">Made for their moment</span>
            <span className="image-note image-note-bottom">Curated in Jaipur</span>
          </div>
          <figure className="hero-polaroid">
            <img
              src="/brand/client/pink-box.jpeg"
              alt="A Sheer Gifts box wrapped with a pink ribbon"
              width="280"
              height="350"
            />
            <figcaption>beautifully wrapped, always personal</figcaption>
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
            A glimpse into past Sheer creations. Every order can begin with a different story—WhatsApp us to ask what is currently available.
          </p>
        </div>

        <GiftingGallery whatsappUrl={whatsappUrl} />
      </section>

      <section className="signature section">
        <div className="signature-panel">
          <p className="eyebrow eyebrow-light"><span /> Signature gifting</p>
          <h2>There is always a<br /><em>reason to gift.</em></h2>
          <p className="signature-intro">
            From intimate keepsakes to celebration-ready hampers, tell us the feeling and we’ll start there.
          </p>
          <figure className="signature-feature-image">
            <img
              src="/brand/client/signature-bride-celebration.png"
              alt="A bride celebration room decorated with balloons, flowers and a personalised gift hamper"
              width="860"
              height="1280"
              loading="lazy"
            />
          </figure>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Ask about your occasion <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="signature-gallery">
          <div className="signature-message">
            <p className="signature-message-kicker">Your story, thoughtfully wrapped</p>
            <h3>
              More than a gift.<br />
              <em>A feeling made visible.</em>
            </h3>
            <p>
              Every Sheer creation is shaped around the person receiving it—their favourites,
              their memories and the little details that make them feel truly known.
            </p>
            <span aria-hidden="true">Made personal · Made with care · Made in Jaipur</span>
          </div>
          <figure className="gallery-small">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A close-up of a custom Sheer Gifts hamper"
            >
              <source src="/brand/client/small-image-video.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
      </section>

      <section className="feedback section" id="feedback">
        <div className="feedback-heading">
          <p className="eyebrow"><span /> Kind words</p>
          <h2>Made with care.<br /><em>Felt in return.</em></h2>
          <p className="feedback-intro">
            The sweetest part of every order is hearing how the details made someone feel.
          </p>
          <div className="feedback-rating" aria-label="Five-star customer feedback">
            <span aria-hidden="true">★★★★★</span>
            <p>Real messages from Sheer customers</p>
          </div>
        </div>

        <FeedbackCarousel />
      </section>

      <section className="faq section">
        <div>
          <p className="eyebrow"><span /> Good to know</p>
          <h2>A few little<br /><em>details.</em></h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Can the gifts be customised?<span>+</span></summary>
            <p>Yes. Custom hampers and personalised gifts are at the heart of Sheer. Share your ideas, memories and preferences with us on WhatsApp.</p>
          </details>
          <details>
            <summary>Where is Sheer Gifts based?<span>+</span></summary>
            <p>Sheer Gifts is based in Jaipur, Rajasthan.</p>
          </details>
          <details>
            <summary>Do you make seasonal or corporate hampers?<span>+</span></summary>
            <p>Sheer has created seasonal and corporate gifts in the past. Please WhatsApp us to ask about current availability for your occasion or brief.</p>
          </details>
        </div>
      </section>

      <section className="closing-cta" id="contact">
        <div className="closing-monogram" aria-hidden="true">S</div>
        <p>Have a moment in mind?</p>
        <h2>Let’s make it feel<br /><em>like them.</em></h2>
        <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
          Order on WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <span className="closing-note">Thoughtfully curated in Jaipur</span>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <img src="/brand/sheer-gifts-logo.jpg" alt="Sheer Gifts" width="88" height="88" />
        </a>
        <div>
          <p>Custom hampers · Personalised gifts · Jaipur</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <p>Crafted for moments that matter.</p>
      </footer>

      <a className="mobile-order" href={whatsappUrl} target="_blank" rel="noreferrer">
        Order on WhatsApp <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
