const instagramUrl = "https://www.instagram.com/sheergiftsjaipur/";
const whatsappUrl =
  "https://wa.me/919636057292?text=Hi%20Sheer%20Gifts%20Jaipur!%20I%20would%20like%20to%20order%20a%20customised%20gift.";

const gifts = [
  {
    title: "Custom Hampers",
    text: "Thoughtfully curated hampers made around the person and the occasion.",
    image: "/brand/bride-to-be-hamper.jpg",
    alt: "A personalised hamper created by Sheer Gifts Jaipur",
  },
  {
    title: "Personalised Gifts",
    text: "Photos, notes and meaningful details turned into gifts they will remember.",
    image: "/brand/best-friend-memory-board.jpg",
    alt: "A handmade personalised memory board by Sheer Gifts Jaipur",
  },
  {
    title: "Gifts for Every Moment",
    text: "Birthdays, friendships, weddings and celebrations—made a little more special.",
    image: "/brand/love-basket.jpg",
    alt: "A celebration gift basket with treats, flowers and photographs",
  },
];

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">Bespoke gifting from Jaipur · Custom hampers & personalised gifts</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sheer Gifts Jaipur home">
          <img src="/brand/sheer-gifts-logo.jpg" alt="" width="52" height="52" />
          <span>
            <strong>Sheer Gifts</strong>
            <small>Jaipur</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#gifts">Our gifts</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-order" href={whatsappUrl} target="_blank" rel="noreferrer">
          Order on WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Thoughtful gifting, reimagined</p>
          <h1>Thoughtful gifts, <em>made personal.</em></h1>
          <p className="hero-text">
            Custom hampers, personalised gifts and beautiful little gestures—carefully put together for the people who matter to you.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Order on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="simple-link" href="#gifts">See our work <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-location">Based in Jaipur, Rajasthan</p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/brand/bride-to-be-hamper.jpg"
              alt="A bespoke gift hamper by Sheer Gifts Jaipur"
              width="760"
              height="900"
            />
          </div>
          <div className="hero-note">
            <span>SHEER · /ʃɪə/</span>
            <strong>Utter, Pure, Simple</strong>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span /> About us</p>
          <h2>Gifts that feel like<br /><em>they were made for them.</em></h2>
        </div>
        <div className="about-copy">
          <p>
            Sheer Gifts Jaipur is a bespoke gifting studio creating custom hampers and personalised gifts for life’s meaningful moments.
          </p>
          <p>
            Every creation is brought together with thought, care and personal details—from favourite treats and flowers to photographs and handwritten memories.
          </p>
          <blockquote>“Crafted for moments that matter.”</blockquote>
        </div>
      </section>

      <section className="gifts section" id="gifts">
        <div className="gifts-heading">
          <div>
            <p className="eyebrow"><span /> What we create</p>
            <h2>Made with care.<br /><em>Given with love.</em></h2>
          </div>
          <p>Every order can be different. Message us with your occasion and ideas to ask what is currently available.</p>
        </div>

        <div className="gift-grid">
          {gifts.map((gift) => (
            <article className="gift-card" key={gift.title}>
              <div className="gift-image">
                <img src={gift.image} alt={gift.alt} width="680" height="760" loading="lazy" />
              </div>
              <h3>{gift.title}</h3>
              <p>{gift.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="gallery-title">
          <p className="eyebrow"><span /> A few Sheer creations</p>
          <h2 id="gallery-title">A little look at<br /><em>our work.</em></h2>
        </div>
        <div className="gallery-grid">
          <img src="/brand/best-friend-memory-board.jpg" alt="Personalised friendship memory board" width="520" height="650" loading="lazy" />
          <img src="/brand/bride-to-be-hamper.jpg" alt="Personalised bride-to-be hamper" width="520" height="650" loading="lazy" />
          <img src="/brand/love-basket.jpg" alt="Custom love and celebration basket" width="520" height="650" loading="lazy" />
          <img src="/brand/balloon-hamper.jpg" alt="Custom balloon hamper" width="520" height="650" loading="lazy" />
        </div>
        <a className="simple-link gallery-link" href={instagramUrl} target="_blank" rel="noreferrer">
          See more on Instagram <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light"><span /> Contact & orders</p>
          <h2>Have a gift<br />in mind?</h2>
          <p>Tell us the occasion, who it is for and any ideas you have. We’ll take it from there.</p>
          <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            Order on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>

        <address className="contact-card">
          <img src="/brand/sheer-gifts-logo.jpg" alt="Sheer Gifts Jaipur" width="96" height="96" />
          <div>
            <span>Business</span>
            <strong>Sheer Gifts Jaipur</strong>
            <p>Bespoke Luxury Hampers & Gifts</p>
          </div>
          <div>
            <span>Location</span>
            <strong>Jaipur, Rajasthan</strong>
          </div>
          <div>
            <span>WhatsApp</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">+91 96360 57292 ↗</a>
          </div>
          <div>
            <span>Instagram</span>
            <a href={instagramUrl} target="_blank" rel="noreferrer">@sheergiftsjaipur ↗</a>
          </div>
        </address>
      </section>

      <footer>
        <p>© 2026 Sheer Gifts Jaipur</p>
        <p>Thoughtful gifting, reimagined.</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      <a className="mobile-order" href={whatsappUrl} target="_blank" rel="noreferrer">
        Order on WhatsApp <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
