import { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolioData';
import GlowCursor from './components/GlowCursor';
import Typewriter from './components/Typewriter';
import FloatingPhoto from './components/FloatingPhoto';
import SkillsEditor from './components/SkillsEditor';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import SectionHeader from './components/SectionHeader';
import HobbiesSection from './components/HobbiesSection';
import './index.css';
import Navbar from './components/Navbar';

const TYPEWRITER_WORDS = [
  'scalable systems.',
  'beautiful UIs.',
  'pixel-perfect interfaces.',
  'responsive web experiences.',
  'accessible user journeys.',
  'your next big idea.',
  'robust APIs.',
];

export default function App() {
  const data = portfolioData;
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const hobbiesRef = useRef();
  const contactRef = useRef();
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    hobbies: hobbiesRef,
    contact: contactRef,
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowScrollTop(window.scrollY > 400);

      const scrollY = window.scrollY + window.innerHeight * 0.35;

      const offsets = Object.entries(sectionRefs).map(([key, ref]) => ({
        key,
        top: ref.current
          ? ref.current.getBoundingClientRect().top + window.scrollY
          : Infinity,
      }));

      const sorted = offsets.sort((a, b) => a.top - b.top);
      let current = sorted[0].key;
      for (const { key, top } of sorted) {
        if (top <= scrollY) current = key;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      if (nearBottom) current = 'contact';

      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (key) => {
    setActiveSection(key);
    sectionRefs[key].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    'home',
    'about',
    'skills',
    'projects',
    'hobbies',
    'contact',
  ];

  return (
    <div
      style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <GlowCursor />

      {/* NAVBAR */}
      <Navbar
        linkedin={data.linkedin}
        scrolled={scrolled}
        activeSection={activeSection}
        navLinks={navLinks}
        onNavigate={scrollTo}
        onResume={() => setShowResume(true)}
      />

      {/* HERO */}
      <section
        ref={homeRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 2rem 4rem',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, #4ade8009 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '18%',
            left: '8%',
            width: 200,
            height: 200,
            background: '#4ade8008',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '18%',
            right: '8%',
            width: 160,
            height: 160,
            background: '#22d3ee08',
            borderRadius: '50%',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 8vw, 88px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 16,
            animation: 'fadeUp 0.6s 0.1s ease both',
          }}
        >
          <span
            tag="span"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'inherit',
            }}
          >
            {data.name}
          </span>
        </h1>

        <h2
          style={{
            fontSize: 'clamp(20px, 3.5vw, 36px)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginBottom: 24,
            animation: 'fadeUp 0.6s 0.2s ease both',
          }}
        >
          I build <Typewriter words={TYPEWRITER_WORDS} />
        </h2>

        <p
          style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            maxWidth: 500,
            lineHeight: 1.8,
            marginBottom: 40,
            animation: 'fadeUp 0.6s 0.3s ease both',
          }}
        >
          <span
            tag="span"
            multiline
            style={{
              color: 'var(--text-muted)',
              fontSize: 16,
              lineHeight: 1.8,
              display: 'block',
            }}
          >
            {data.bio}
          </span>
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.4s ease both',
          }}
        >
          <button
            onClick={() => scrollTo('projects')}
            style={{
              padding: '14px 32px',
              background: 'var(--green)',
              border: 'none',
              borderRadius: 12,
              color: '#022c0f',
              fontWeight: 700,
              fontSize: 15,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px #4ade8044';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo('contact')}
            style={{
              padding: '14px 32px',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 12,
              color: 'var(--text-secondary)',
              fontSize: 15,
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4ade8044';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            Get In Touch
          </button>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '14px 32px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                color: 'var(--text-secondary)',
                fontSize: 15,
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
        </div>
      </section>

      {/* ABOUT */}
      <section
        ref={aboutRef}
        style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}
      >
        <SectionHeader label="About Me" title="Who I am" />
        <div
          style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <FloatingPhoto src={data.photo} />
          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                fontSize: 13,
                color: 'var(--cyan)',
                marginBottom: 12,
                letterSpacing: '0.05em',
              }}
            >
              <span style={{ color: 'var(--cyan)', fontSize: 13 }}>
                {data.title}
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              <span
                tag="span"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'inherit',
                }}
              >
                {data.name}
              </span>{' '}
            </h2>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 15,
                lineHeight: 1.9,
                marginBottom: 28,
              }}
            >
              <span
                tag="span"
                multiline
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 15,
                  lineHeight: 1.9,
                  display: 'block',
                }}
              >
                {data.bio2}
              </span>{' '}
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        ref={skillsRef}
        style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}
      >
        <SectionHeader label="Skills & Technologies" title="What I work with" />
        <SkillsEditor skills={data.skills} />
      </section>

      {/* PROJECTS */}
      <section
        ref={projectsRef}
        style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 20,
                fontSize: 12,
                color: 'var(--green)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              <div
                style={{ width: 32, height: 1, background: 'var(--green)' }}
              />
              <span>Projects</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Selected Work
            </h2>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {data.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* HOBBIES */}
      <section
        ref={hobbiesRef}
        style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}
      >
        <SectionHeader
          label="Beyond the Code"
          title={
            <>
              Side quests &amp;{' '}
              <span style={{ color: '#f472b6' }}>happy places.</span>
            </>
          }
          subtitle="The things that keep me curious, creative, and human outside of work."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          <HobbiesSection hobbies={data.hobbies} />
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={contactRef}
        style={{ padding: '6rem 2rem', maxWidth: 800, margin: '0 auto' }}
      >
        <SectionHeader
          label="Contact"
          title={
            <>
              Let's build something
              <br />
              <span style={{ color: 'var(--green)' }}>together.</span>
            </>
          }
          subtitle="Have a project in mind or just want to say hi? Draft a message below — it'll open in your mail client."
        />
        <ContactSection email={data.email} />
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid #0f172a',
          padding: '2.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        <div style={{ fontSize: 13, color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()}{' '}
          <span style={{ color: 'var(--text-faint)', fontSize: 13 }} />
          {data.name}· Built with ♥
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a
            href={data.linkedin}
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </footer>

      {showResume && (
        <ResumeModal
          resumeUrl={data.resumeUrl}
          onClose={() => setShowResume(false)}
        />
      )}

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 90,
            width: 44,
            height: 44,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: '50%',
            color: 'var(--green)',
            fontSize: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
            animation: 'fadeIn 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#4ade8066';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(74,222,128,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}
