import { useEffect, useState } from 'react'
import { auction } from './content/auction'
import { brand } from './content/brand'
import { listingsSourceUrl, properties } from './data/properties'
import './App.css'

function App() {
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      <header className={`nav${navScrolled ? ' nav-scrolled' : ''}`}>
        <div className="content-width nav-inner">
          <a className="nav-brand" href="#top" aria-label={`${brand.name} — ${auction.projectName}`}>
            <img src={brand.assets.logo} alt="" className="nav-logo" />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#lots">Lots</a>
            <a href="#auction">Auction</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Register
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Hero">
          <div className="hero-media" aria-hidden="true">
            <img src={brand.assets.hero} alt="" className="hero-img" />
            <div className="hero-veil" />
          </div>
          <div className="content-width hero-content">
            <img
              src={brand.assets.logo}
              alt={brand.name}
              className="hero-logo"
            />
            <p className="hero-kicker">
              {auction.projectName} · {auction.lotCountLabel}
            </p>
            <h1>{auction.headline}</h1>
            <p className="hero-lede">{auction.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#lots">
                View lots
              </a>
              <a className="btn btn-ghost" href="#contact">
                Register interest
              </a>
            </div>
          </div>
        </section>

        <section id="lots" className="section properties">
          <div className="content-width">
            <div className="section-intro">
              <p className="eyebrow">{auction.statusLabel}</p>
              <h2>Auction inventory</h2>
              <p>
                All {properties.length} parcels from this seller’s Land Concepts
                portfolio. Each card opens the full listing on Land.com.
              </p>
            </div>
            <ul className="lot-grid">
              {properties.map((property, index) => (
                <li
                  key={property.id}
                  className="lot-card"
                  style={{ animationDelay: `${0.03 * index}s` }}
                >
                  <a
                    className="lot-link"
                    href={property.landComUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="lot-media">
                      <img
                        src={property.image}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <span className="lot-badge">Lot {property.lot}</span>
                    </div>
                    <div className="lot-body">
                      <div className="property-meta">
                        <span className="price-tag">{property.price}</span>
                        <span className="acres">{property.acres} acres</span>
                      </div>
                      <h3>{property.name}</h3>
                      <p className="location">{property.location}</p>
                      <p className="blurb">{property.blurb}</p>
                      <span className="lot-cta">View on Land.com</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <p className="listings-link">
              {auction.disclaimer}{' '}
              <a href={listingsSourceUrl} target="_blank" rel="noreferrer">
                See all on Land.com
              </a>
            </p>
          </div>
        </section>

        <section id="auction" className="section auction-info">
          <div className="content-width">
            <div className="auction-inner">
              <p className="eyebrow">How it works</p>
              <h2>Bidding this portfolio</h2>
              <ol className="auction-steps">
                {auction.howItWorks.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="content-width">
            <div className="about-grid">
              <div className="about-copy">
                <p className="eyebrow">Offered by</p>
                <h2>{brand.name}</h2>
                <p>
                  This auction is marketed by {brand.name}, the ag and land
                  brokerage focused on farmers, growers, landowners, and land
                  buyers across the Central Valley.
                </p>
                {brand.about.slice(0, 2).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
                <blockquote className="values">
                  <p>{brand.values}</p>
                </blockquote>
              </div>
              <figure className="about-media">
                <img
                  src={brand.assets.about}
                  alt="J.P. Shamshoian and Paul Bal standing in an orchard"
                  loading="lazy"
                />
                <figcaption>Co-founders J.P. Shamshoian and Paul Bal</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="content-width">
            <div className="contact-inner">
              <h2>Register for the auction</h2>
              <p>
                Request the property packet, auction calendar, and bidding
                instructions for the {auction.projectName}.
              </p>
              <div className="contact-details">
                <a className="btn btn-primary" href={brand.phoneHref}>
                  {brand.phone}
                </a>
                <address>
                  {brand.address}
                  <br />
                  {brand.cityStateZip}
                </address>
              </div>
              <a
                className="site-link"
                href={brand.website}
                target="_blank"
                rel="noreferrer"
              >
                Land Concepts on mylandconcepts.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="content-width footer-inner">
          <div className="footer-brand">
            <img src={brand.assets.logo} alt={brand.name} className="footer-logo" />
            <p>
              © {new Date().getFullYear()} {brand.name} · {auction.projectName}
            </p>
          </div>
          <p className="footer-note">
            One-page auction site · {brand.tagline}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
