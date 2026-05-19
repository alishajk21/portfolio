import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({
  linkedin,
  scrolled,
  activeSection,
  navLinks,
  onNavigate,
  onResume,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (key) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  const isHobbies = (s) => s === 'hobbies';

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <img src="/src/assets/logo.png" alt="Logo" />
        </div>

        {/* Desktop links */}
        <div className={styles.desktopLinks}>
          {navLinks.map((s) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className={`${styles.navBtn} ${activeSection === s ? (isHobbies(s) ? styles.activePink : styles.activeGreen) : ''}`}
            >
              {s}
            </button>
          ))}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                color: 'var(--text-muted)',
                fontSize: 13,
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4ade8044';
                e.currentTarget.style.color = 'var(--green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <button onClick={onResume} className={styles.resumeBtn}>
            Resume ↓
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.logo}>
            <div className={styles.dot} />
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className={styles.drawerLinks}>
          {navLinks.map((s, i) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className={`${styles.drawerLink} ${activeSection === s ? (isHobbies(s) ? styles.drawerActivePink : styles.drawerActiveGreen) : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className={styles.drawerLinkNum}>0{i + 1}</span>
              <span className={styles.drawerLinkName}>{s}</span>
              {activeSection === s && (
                <span
                  className={styles.drawerActiveDot}
                  style={{
                    background: isHobbies(s) ? '#f472b6' : 'var(--green)',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className={styles.drawerFooter}>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              padding: '7px 16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text-muted)',
              fontSize: 13,
              transition: 'border-color 0.15s, color 0.15s',
              marginBottom: 12,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4ade8044';
              e.currentTarget.style.color = 'var(--green)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <button
            onClick={() => {
              onResume();
              setMenuOpen(false);
            }}
            className={styles.drawerResumeBtn}
          >
            Download Resume ↓
          </button>
        </div>
      </div>
    </>
  );
}
