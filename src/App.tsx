import { properties } from './data/properties'
import './App.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="nav-brand" href="#top">
          Land Concepts <span>Hundal</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#properties">Properties</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="nav-cta">
            Inquire
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Hero">
          <div className="hero-media" aria-hidden="true">
            <img src={HERO_IMAGE} alt="" className="hero-img" />
            <div className="hero-veil" />
          </div>
          <div className="hero-content">
            <p className="brand-mark">Land Concepts Hundal</p>
            <h1>Open land, thoughtfully offered.</h1>
            <p className="hero-lede">
              A curated portfolio of acreage, ranch parcels, and build-ready sites
              across Northern California.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#properties">
                View properties
              </a>
              <a className="btn btn-ghost" href="#contact">
                Request a briefing
              </a>
            </div>
          </div>
        </section>

        <section id="properties" className="section properties">
          <div className="section-intro">
            <h2>Current portfolio</h2>
            <p>Select parcels available for purchase. Details upon request.</p>
          </div>
          <ul className="property-list">
            {properties.map((property, index) => (
              <li
                key={property.id}
                className="property"
                style={{ animationDelay: `${0.08 * index}s` }}
              >
                <div className="property-media">
                  <img src={property.image} alt="" loading="lazy" />
                </div>
                <div className="property-body">
                  <div className="property-meta">
                    <span className={`status status-${property.status.toLowerCase().replace(' ', '-')}`}>
                      {property.status}
                    </span>
                    <span className="acres">{property.acres} acres</span>
                  </div>
                  <h3>{property.name}</h3>
                  <p className="location">{property.location}</p>
                  <p className="blurb">{property.blurb}</p>
                  <p className="price">{property.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="approach" className="section approach">
          <div className="approach-inner">
            <h2>Land with intention</h2>
            <p>
              We represent owners and buyers who value quiet acreage, clear title,
              and sites that reward patience. Every listing is vetted for access,
              water, zoning, and long-term use — so you can buy with confidence.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <h2>Start a conversation</h2>
            <p>
              Looking for a specific acreage, region, or use? Tell us what you need
              and we will prepare a private briefing.
            </p>
            <a className="btn btn-primary" href="mailto:inquire@landconceptshundal.com">
              inquire@landconceptshundal.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Land Concepts Hundal</p>
        <p className="footer-note">Land properties for sale · Portfolio inquiries welcome</p>
      </footer>
    </div>
  )
}

export default App
