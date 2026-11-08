import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { title: 'SecureVault', type: 'Security Platform', summary: 'Privacy-first credentials manager with encrypted storage and security monitoring.', stack: ['React', 'Node.js', 'AES'], accent: 'cyan', featured: true },
  { title: 'Pulse Analytics', type: 'Data Application', summary: 'Interactive analytics dashboard turning operational data into clear decisions.', stack: ['Python', 'React', 'SQL'], accent: 'pink', featured: true },
  { title: 'FieldNotes Mobile', type: 'Mobile App', summary: 'Offline-first field reporting app with synced media and location capture.', stack: ['React Native', 'Firebase'], accent: 'purple', featured: true },
  { title: 'Sentinel API', type: 'Backend System', summary: 'Threat-aware API gateway with rate limiting, audit logs, and anomaly alerts.', stack: ['Go', 'PostgreSQL'], accent: 'cyan' },
  { title: 'Signal Tracker', type: 'Mobile App', summary: 'A focused personal insights app with private local-first storage.', stack: ['Flutter', 'SQLite'], accent: 'pink' },
  { title: 'Identity Lab', type: 'Security Research', summary: 'Authentication testing environment for vulnerability discovery and reporting.', stack: ['Burp Suite', 'Python'], accent: 'purple' },
  { title: 'Ops Command', type: 'Full-stack Tool', summary: 'Incident coordination workspace with live status and team handoffs.', stack: ['Next.js', 'Redis'], accent: 'cyan' },
  { title: 'Market Lens', type: 'Data Science', summary: 'Forecasting and visualization prototype for rapid market exploration.', stack: ['Pandas', 'Plotly'], accent: 'pink' },
]

const experience = [
  { period: '2024 — Present', role: 'Full-stack & Security Engineer', company: 'Independent / Freelance', detail: 'Designing secure applications, mobile experiences, and data tools.' },
  { period: '2022 — 2024', role: 'Software Engineer', company: 'Technology Projects', detail: 'Built and maintained production web systems across the stack.' },
]

const skills = [
  ['01', 'Software Engineering', 'TypeScript, React, Node.js, REST APIs, system design'],
  ['02', 'Mobile Development', 'React Native, Flutter, responsive interfaces, offline-first data'],
  ['03', 'Cybersecurity', 'Threat modeling, application security, testing, secure architecture'],
  ['04', 'Data & Analytics', 'Python, SQL, data visualization, dashboards, reporting'],
]

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [mouse, setMouse] = useState({ x: -100, y: -100 })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  useEffect(() => {
    const move = (event) => setMouse({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  const visibleProjects = showAll ? projects : projects.slice(0, 3)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="starfield" aria-hidden="true" />
      {/*<div className="cursor-glow" style={{ transform: `translate(${mouse.x - 100}px, ${mouse.y - 100}px)` }} aria-hidden="true" />*/}
      
    




      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu}><span>KO</span> Katoya_Ottley</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu} key={item}>{item}</a>
            ))}
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">
              <span>{dark ? '☀' : '☾'}</span>
            </button>
          </div>
        </nav>
      </header>
      





      <main id="top">
        <section className="hero-section container">
          
          <div className="hero-console" aria-label="Developer profile">
            <div className="console-bar"><i /><i /><i /><span>profile.exe</span></div>
            <div className="console-body">
              <div className="portrait-frame">
                <div className="portrait-placeholder">ADD<br />PHOTO</div>
              </div>
              <div className="console-output">
                {/*<p><b>&gt;</b> whoami</p>*/}
                <strong>Katoya Ottley</strong>
                {/*<p><b>&gt;</b> focus</p>*/}
                {/*<span>building secure products</span>*/}
                <div className="hero-copy">
                  {/*<div className="status"><span /> Available for opportunities</div>*/}

            {/*<h1>I build secure systems that <em>solve real problems.</em></h1>*/}
            <p className="hero-summary">Technology-driven problem solver passionate about building innovative solutions, analysing complex systems, exploring emerging technologies and developing practical skills through continuous learning, collaboration and hands-on experience.</p>
            <p className="eyebrow">FULL-STACK · MOBILE · CYBERSECURITY · DATA</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work</a>
              <a className="button secondary" href="#contact">Let&apos;s connect</a>
            </div>
          </div>
                {/*<div className="signal"><i /><i /><i /><i /><i /></div>*/}
              </div>
            </div>
          </div>
        </section>

        {/*<section className="proof-strip">
          <div className="container proof-grid">
            <div><strong>4</strong><span>Engineering disciplines</span></div>
            <div><strong>8+</strong><span>Projects to explore</span></div>
            <div><strong>100%</strong><span>Curious by default</span></div>
          </div>
        </section>*/}






        <section className="section container" id="about">
          {/*<div className="section-heading"><span>01</span><div><p className="eyebrow">ABOUT</p><h2>ABOUT</h2></div>{/*</div>*/}
          <div className="about-grid">
            <p className="lead">
              <div className="section-heading">{/*<span>01</span><div><p className="eyebrow">ABOUT</p>*/}<h2>ABOUT_ME</h2></div>{/*</div>*/}

            </p>
            <div>
              <p>My background in Computer Science has given me a foundation in programming, software development, database management and information systems. Through internships, academic projects and hands-on experience, I've worked with different technologies, explored different tools and developed solutions ranging from web applications and backend systems to AI-powered and data driven applications.</p>
              <p>Interested in exploring how software engineering, artificial intelligence, cybersecurity and data analytics can work together to solve complex real-world problems.</p>
            </div>
          </div>
        </section>






        <section className="section container" id="skills">
          <div className="section-heading"><span>02</span><div><p className="eyebrow">CAPABILITIES</p><h2>Skills built through doing.</h2></div></div>
          <div className="skills-grid">
            {skills.map(([number, title, detail]) => (
              <article className="skill-card" key={title}>
                <span>{number}</span><h3>{title}</h3><p>{detail}</p>
              </article>
            ))}
          </div>
        </section>






        <section className="section container" id="experience">
          <div className="section-heading"><span>03</span><div><p className="eyebrow">EXPERIENCE</p><h2>Where I’ve worked.</h2></div></div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`}>
                <time>{item.period}</time><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p></div>
                <span className="timeline-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading projects-heading">
            <span>04</span><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with evidence.</h2></div>
            <button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show less' : 'View all projects'} <span>→</span></button>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <a className={`project-card ${project.accent}`} href="#" key={project.title} onClick={(e) => e.preventDefault()}>
                <div className="project-preview">
                  <div className="preview-grid" />
                  <div className="preview-window"><i /><i /><i /><div /></div>
                  <span className="project-index">0{visibleProjects.indexOf(project) + 1}</span>
                </div>
                <div className="project-info">
                  <p>{project.type}</p><h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="demo-link">View demo ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">CONTACT</p>
            <h2>Have a role or an idea?</h2>
            <p>Tell me what you’re building. I’m open to engineering roles, product collaborations, and ambitious technical projects.</p>
            <a href="mailto:hello@example.com">hello@example.com ↗</a>
          </div>
          <form className="contact-form" action="mailto:hello@example.com" method="post" encType="text/plain">
            <label>Name<input name="name" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@email.com" required /></label>
            <label>Message<textarea name="message" rows="5" placeholder="Tell me about the opportunity..." required /></label>
            <button className="button primary" type="submit">Send message <span>↗</span></button>
          </form>
        </section>
      </main>

      <footer><div className="container"><span>YOUR_NAME © 2026</span><div><a href="#">GitHub ↗</a><a href="#">LinkedIn ↗</a></div></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
