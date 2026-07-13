import GiftingGallery from "./gifting-gallery";
import HeroVideo from "./hero-video";

const instagramUrl = "https://www.instagram.com/sheergiftsjaipur/";
const whatsappUrl =
  "https://wa.me/918209216121?text=Hi%20Sheer%20Gifts%20Jaipur!%20I%20would%20like%20to%20place%20an%20order.";

const signatureGifts = [
  "Custom hampers",
  "Personalised gifts",
  "Floral bouquets",
  "Wedding invitations",
  "Birthday gifting",
  "Friendship keepsakes",
];

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

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Order on WhatsApp <span aria-hidden="true">↗</span>
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
            <span className="signature-mark">S</span>
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
              src="/brand/client/branded-pink-box.jpeg"
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
          <div className="signature-list">
            {signatureGifts.map((gift, index) => (
              <div key={gift}>
                <span>0{index + 1}</span>
                <p>{gift}</p>
                <b aria-hidden="true">↗</b>
              </div>
            ))}
          </div>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Ask about your occasion <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="signature-gallery">
          <figure className="gallery-main">
            <img src="/brand/client/wellness-hamper.jpeg" alt="A cream and gold wellness hamper with bath and body products" width="960" height="1280" loading="lazy" />
          </figure>
          <figure className="gallery-small">
            <img src="/brand/client/pink-ribbon-gift-box.jpeg" alt="A pink gift box finished with a bright ribbon and pearl details" width="960" height="1280" loading="lazy" />
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

        <div className="feedback-grid">
          <article className="feedback-card feedback-card-1">
            <figure className="feedback-shot">
              <img
                src="/brand/client/customer-feedback-best-friend.jpeg"
                alt="WhatsApp feedback praising the thoughtful customisation and saying the recipient loved everything"
                width="739"
                height="1600"
                loading="lazy"
              />
            </figure>
            <blockquote>
              “You’re amazing—the way you create everything with so much effort and customise it to my preference. My best friend loved everything!”
            </blockquote>
            <p className="feedback-context">A best-friend surprise</p>
          </article>

          <article className="feedback-card feedback-card-2">
            <figure className="feedback-shot">
              <img
                src="/brand/client/customer-feedback-customisation.jpeg"
                alt="WhatsApp feedback saying the gift was exactly as requested and the detailing and customisation were top notch"
                width="739"
                height="1600"
                loading="lazy"
              />
            </figure>
            <blockquote>
              “The gift was exactly as I wanted. The detailing and customisation were top notch—really loved it!”
            </blockquote>
            <p className="feedback-context">Made exactly to the brief</p>
          </article>
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
