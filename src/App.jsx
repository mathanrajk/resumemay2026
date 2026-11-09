import { useState, useEffect } from 'react'
import { profile, nav, aboutHighlights, experience, project, skills, certificates } from './data.js'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const techList = skills.flatMap(([, v]) => v.split(', '))

// --- Icons ---
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  )
}

function FeatureIcon({ type }) {
  if (type === 'react') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'stack') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  }
  if (type === 'shield') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    return 'dark'
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [activeCert, setActiveCert] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Apply theme to html root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll spy & back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sections = ['top', ...nav.map(([id]) => id)]
      const scrollPos = window.scrollY + 180

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Modal ESC handler & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCert(null)
      }
    }

    if (activeCert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCert])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2400)
    } catch {
      // Fallback
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-app">
      {/* Background Ambient Glow Orbs */}
      <div className="bg-glow-orb orb-primary" aria-hidden="true" />
      <div className="bg-glow-orb orb-secondary" aria-hidden="true" />
      <div className="bg-grid-overlay" aria-hidden="true" />

      {/* Top Navbar */}
      <header className="top-header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <span className="brand-avatar">MK</span>
            <span className="brand-info">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-role">Software Engineer</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Sections">
            {nav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            {/* Theme Toggle Button */}
            <button
              type="button"
              className="icon-btn theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Quick Contact CTA */}
            <a className="btn btn-sm btn-nav-cta" href={`mailto:${profile.email}`}>
              <span>Get in Touch</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="icon-btn mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <nav>
              {nav.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={activeSection === id ? 'active' : ''}
                >
                  {label}
                </a>
              ))}
              <div className="mobile-drawer-footer">
                <a
                  className="btn btn-primary btn-block"
                  href={`mailto:${profile.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MailIcon /> Send an Email
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              <span>Available for Full Stack & React Roles</span>
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I’m <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-role">
            <strong>Software Engineer Level 3</strong> · Ex-<em>Syncfusion</em> · Full Stack Developer (MERN)
          </p>

          <p className="hero-blurb">
            I specialize in architecting high-performance React UI components, building full-stack applications with Node.js & MongoDB, and engineering mobile apps with React Native — based in Tamil Nadu, India.
          </p>

          {/* Quick stats counter */}
          <div className="hero-stats-row">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <span>View Featured Project</span>
              <ArrowUpRightIcon />
            </a>
            <a className="btn btn-outline" href="#experience">
              <span>View Career Path</span>
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Profile Portrait Card */}
        <div className="hero-portrait-col">
          <div className="portrait-container">
            <div className="portrait-aura" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src={asset('profile.jpg')}
                alt={profile.name}
                width="340"
                height="340"
                className="portrait-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top">
              <span className="badge-icon">⚛️</span>
              <div className="badge-text">
                <strong>Ex-Syncfusion</strong>
                <span>React Component Team</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="badge-icon">📍</span>
              <div className="badge-text">
                <strong>Tamil Nadu, India</strong>
                <span>Open to Remote & Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Tech Marquee */}
      <section className="marquee-section" aria-label="Technologies">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...techList, ...techList].map((item, idx) => (
              <span key={`${item}-${idx}`} className="tech-pill">
                <span className="tech-dot" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* About Section */}
        <section id="about" className="content-section">
          <div className="section-header">
            <span className="section-kicker">OVERVIEW</span>
            <h2>About Me</h2>
            <p className="section-sub">
              Engineering enterprise React UI component libraries, scalable APIs, and modern user experiences.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-bio-card">
              <h3>Passionate about UI engineering and scalable system design</h3>
              <p>
                As a <strong>former Software Engineer Level 3 at Syncfusion</strong>, I developed and maintained enterprise React UI components trusted by developers globally. My background includes architecting modular components, solving complex edge cases, benchmarking rendering performance, and maintaining rigorous code review standards.
              </p>
              <p>
                Beyond component libraries, I build end-to-end applications across the <strong>MERN stack</strong> and <strong>React Native</strong>. Whether designing real-time audio playback systems or optimizing API endpoints, I focus on clean architecture, type safety, and delightful user ergonomics.
              </p>
              <div className="about-tags">
                <span className="about-tag">React Ecosystem</span>
                <span className="about-tag">TypeScript Strict Mode</span>
                <span className="about-tag">Enterprise UI Components</span>
                <span className="about-tag">RESTful Architecture</span>
                <span className="about-tag">State Management</span>
                <span className="about-tag">Performance Tuning</span>
              </div>
            </div>

            <div className="about-highlights-grid">
              {aboutHighlights.map((h) => (
                <div key={h.title} className="highlight-card">
                  <div className="highlight-icon">
                    <FeatureIcon type={h.icon} />
                  </div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="content-section">
          <div className="section-header">
            <span className="section-kicker">CAREER PATH</span>
            <h2>Work Experience</h2>
            <p className="section-sub">
              Consistent growth and progression at Syncfusion Software over 3 years and 11 months.
            </p>
          </div>

          <div className="timeline-container">
            {experience.map((e) => (
              <div key={e.title} className={`timeline-card ${e.current ? 'current-role' : ''}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <div className="marker-dot" />
                  <div className="marker-line" />
                </div>

                <div className="timeline-card-inner">
                  <div className="timeline-card-header">
                    <div className="role-titles">
                      <h3>{e.title}</h3>
                      <p className="timeline-company">{e.company}</p>
                    </div>
                    <div className="timeline-badge-wrap">
                      <span className="timeline-date">{e.when}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{e.text}</p>

                  {e.skills && (
                    <div className="timeline-skills">
                      {e.skills.map((s) => (
                        <span key={s} className="skill-chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Project Section */}
        <section id="projects" className="content-section">
          <div className="section-header">
            <span className="section-kicker">PORTFOLIO HIGHLIGHT</span>
            <h2>Featured Project</h2>
            <p className="section-sub">
              Production-ready mobile audio and social podcast streaming platform.
            </p>
          </div>

          <article className="featured-project-card">
            <div className="project-header-bar">
              <div className="project-title-area">
                <span className="project-badge">{project.badge}</span>
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.sub}</p>
              </div>

              <a
                className="btn btn-primary btn-project-cta"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Launch Live App</span>
                <ArrowUpRightIcon />
              </a>
            </div>

            <p className="project-description">{project.text}</p>

            {/* Feature Highlights Grid */}
            <div className="project-features-grid">
              {project.features.map((f) => (
                <div key={f.title} className="project-feature-card">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Project Tags */}
            <div className="project-tags-area">
              <span className="tags-label">Technologies:</span>
              <ul className="project-chips">
                {project.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* Skills Section */}
        <section id="skills" className="content-section">
          <div className="section-header">
            <span className="section-kicker">TECHNICAL ARSENAL</span>
            <h2>Skills & Technologies</h2>
            <p className="section-sub">
              Core technologies, frameworks, and engineering tools I leverage daily.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(([category, items]) => (
              <div key={category} className="skill-category-card">
                <div className="category-header">
                  <span className="category-accent-dot" aria-hidden="true" />
                  <h3>{category}</h3>
                </div>
                <ul className="chips-list">
                  {items.split(', ').map((tech) => (
                    <li key={tech} className="skill-pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="content-section">
          <div className="section-header">
            <span className="section-kicker">CREDENTIALS</span>
            <h2>Certifications & Courses</h2>
            <p className="section-sub">
              Verified certifications in React, TypeScript, React Native, Testing, and modern Web Standards.
            </p>
          </div>

          <div className="certificates-grid">
            {certificates.map((c) => (
              <figure
                key={c.file}
                className="cert-card"
                onClick={() => setActiveCert(c)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveCert(c)
                  }
                }}
              >
                <div className="cert-img-wrap">
                  <img
                    src={asset(`certificates/${c.file}`)}
                    alt={`Certificate: ${c.title}`}
                    loading="lazy"
                    className="cert-thumbnail"
                  />
                  <div className="cert-hover-overlay">
                    <span className="cert-zoom-btn">
                      <span>Click to preview</span>
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                </div>

                <figcaption className="cert-caption">
                  <div className="cert-meta-row">
                    <span className="cert-by-badge">{c.by}</span>
                    {c.category && <span className="cert-category">{c.category}</span>}
                  </div>
                  <h4 className="cert-title">{c.title}</h4>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="content-section">
          <div className="contact-banner">
            <div className="contact-banner-content">
              <span className="section-kicker kicker-bright">LET’S CONNECT</span>
              <h2>Ready to build something impactful?</h2>
              <p>
                I’m always open to discussing React frontend architecture, full-stack opportunities, or engineering collaborations. Feel free to reach out directly.
              </p>

              <div className="contact-cards-grid">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <MailIcon />
                  </div>
                  <div className="contact-card-info">
                    <span className="contact-card-lbl">Email Address</span>
                    <a href={`mailto:${profile.email}`} className="contact-card-val">
                      {profile.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <CheckIcon /> : <CopyIcon />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <LinkedInIcon />
                  </div>
                  <div className="contact-card-info">
                    <span className="contact-card-lbl">LinkedIn Profile</span>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-val"
                    >
                      mathanrajkanagaraj
                    </a>
                  </div>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    <span>Connect</span>
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-brand">{profile.name}</span>
            <p className="footer-tagline">
              Former Software Engineer Level 3 @ Syncfusion · React & Full Stack MERN
            </p>
          </div>

          <div className="footer-links">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer-right">
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUpIcon />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="built-with">Engineered with React & Vite</p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="floating-scroll-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUpIcon />
        </button>
      )}

      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          className="lightbox-overlay"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div>
                <span className="cert-by-badge">{activeCert.by}</span>
                <h3 className="lightbox-title">{activeCert.title}</h3>
              </div>
              <button
                type="button"
                className="icon-btn lightbox-close-btn"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate preview"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="lightbox-body">
              <img
                src={asset(`certificates/${activeCert.file}`)}
                alt={activeCert.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-footer">
              <a
                href={asset(`certificates/${activeCert.file}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
              >
                <span>Open Full Image</span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
