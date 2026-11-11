import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  {
    title: 'Coming Soon',
    summary: 'Details Pending.',
    stack: ['Pending', 'Pending', 'Pending'],
    coverArt: `${import.meta.env.BASE_URL}coverArt.jpeg`,
    transport: 'https://youtu.be/Hfm94aHAbYQ?si=0zocskRScTJjfvuE',
  },
]

const experience = [
  { period: 'November, 2026 — Present', role: 'Tech Generalist Developer', company: 'Freelance', detail: 'Full Stack, Software Engineer, Cybersecurity, Data & Analytics, Mobile Development, etc.' },
  { period: 'July - September, 2025', role: 'Developer Intern', company: 'TRINRE Insurance', detail: 'Implemented caching into an application.' },
  /*{ period: '2020 — 2022', role: 'Junior Software Engineer', company: 'Technology Projects', detail: 'Developed web features, maintained databases, and supported application releases.' },
  { period: '2018 — 2020', role: 'IT Support Technician', company: 'Technology Support', detail: 'Resolved technical issues, maintained systems, and documented support procedures.' },*/
]

/*const skills = [
  ['01', 'Software Engineering', 'TypeScript, React, Node.js, REST APIs, system design'],
  ['02', 'Mobile Development', 'React Native, Flutter, responsive interfaces, offline-first data'],
  ['03', 'Cybersecurity', 'Threat modeling, application security, testing, secure architecture'],
  ['04', 'Data & Analytics', 'Python, SQL, data visualization, dashboards, reporting'],
]*/

const skills = [
  ['Software Engineering', 'React, pending, pending'],
  ['Mobile Development', 'pending, pending, pending'],
  ['Cybersecurity', 'pending, pending, pending'],
  ['Data & Analytics', 'pending, pending, pending'],
]

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [showAllExperience, setShowAllExperience] = useState(false)
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
  const visibleExperience = showAllExperience ? experience : experience.slice(0, 3)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      {/*<div className="starfield" aria-hidden="true" />*/}
      {/*<div className="cursor-glow" style={{ transform: `translate(${mouse.x - 100}px, ${mouse.y - 100}px)` }} aria-hidden="true" />*/}
      
    




      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu}><span>KO</span> Katoya_Ottley</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', /*'Skills',*/ 'Experience', 'Projects', 'Contact'].map((item) => (
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu} key={item}>{item}</a>
            ))}
            {/*<button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">
              <span>{dark ? '☀' : '☾'}</span>
            </button>*/}
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
              <p>My background in Computer Science has given me a foundation in programming, software development, database management and information systems. Through internships, academic projects and hands-on experience, I&apos;ve worked with different technologies, explored different tools and developed solutions ranging from web applications and backend systems to AI-powered and data driven applications.</p>
              <p>Interested in exploring how software engineering, artificial intelligence, cybersecurity and data analytics can work together to solve complex real-world problems.</p>
            </div>
          </div>
        </section>






        <section className="section container" id="experience">
          <div className="section-heading experience-heading">
            <div>{/*<p className="eyebrow">EXPERIENCE</p>*/}<h2>WORK_EXPERIENCE</h2></div>
            {/*<button className="text-button" onClick={() => setShowAllExperience(!showAllExperience)}>
              {showAllExperience ? 'Show less' : 'View all experiences'}
            </button> {/*Temp remove until I have more than 3 experiences*/}
          </div>
          <div className="timeline">
            {visibleExperience.map((item) => (
              <article key={`${item.company}-${item.period}`}>
                <time>{item.period}</time><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p></div>
                {/*<span className="timeline-arrow">↗</span>*/}
              </article>
            ))}
          </div>
        </section>






        <section className="section container" id="projects">
          <div className="section-heading projects-heading">
            {/*<span>04</span><div><p className="eyebrow">SELECTED WORK</p>*/}<h2>PROJECTS</h2>{/*</div>*/}
           {/*} <button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show less' : 'View all projects'}</button> {/*Temp remove until I have more than 3 projects*/}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <a className="project-card" href={project.transport} key={project.title} aria-label={`Open ${project.title}`}>
                <div className="project-preview">
                  <img className="project-cover" src={project.coverArt} alt={`${project.title} cover`} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            ))}
          </div>
        </section>






        <section className="section container contact-section" id="contact">
          <div className="contact-copy">
            {/*<p className="eyebrow">CONTACT</p>*/}
            <div className="section-heading"><h2>CONTACT</h2></div>
            <p>Have a role or an idea?</p>
            <p>Tell me what you&apos;re building. I&apos;m open to engineering roles, product collaborations, and ambitious technical projects.</p>
            {/*<a href="mailto:hello@example.com">hello@example.com ↗</a>*/}
          </div>
          <form className="contact-form" action="mailto:hello@example.com" method="post" encType="text/plain">
            <label>Name<input name="name" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@email.com" required /></label>
            <label>Message<textarea name="message" rows="5" placeholder="Tell me about the opportunity..." required /></label>
            <button className="button primary" type="submit">Send message {/*<span>↗</span>*/}</button>
          </form>
        </section>
      </main>

      <footer><div className="container"><span>Katoya_Ottley © 2026</span><div><a href="#">GitHub</a><a href="#">LinkedIn</a></div></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
