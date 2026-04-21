import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createIcons, Monitor, PieChart, Users, Database, Cpu, Mail, ArrowRight, FileText, Download } from 'lucide'
import { portfolioData } from './data'

gsap.registerPlugin(ScrollTrigger)

// --- STATE MANAGEMENT ---
let currentRole = 'ALL'
let hasInitialized = false

// --- UI COMPONENTS ---

const renderApp = (isInitial = false) => {
  const root = document.querySelector('#app')

  if (isInitial) {
    root.innerHTML = `
      <div class="intro-overlay">
        <div class="intro-panel"></div>
        <div class="logo" style="z-index: 10001; opacity: 0; transform: translateY(20px);">HARTHIK.SYS</div>
      </div>
      <div class="cursor-dot"></div>
      <div class="cursor-outline"></div>
      <div class="bg-grid"></div>
      
      <header>
        <div class="container nav-inner">
          <div class="logo">HARTHIK.SYS</div>
          <nav class="nav-links">
            <a href="#projects">Work</a>
            <a href="#about">Bio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div id="content-wrap">
         ${renderContent()}
      </div>

       <section id="resumes" class="resumes">
        <div class="container">
          <span class="case-tag">Portfolio Access</span>
          <h2 class="section-title">Which role are you hiring for?</h2>
          <div class="resume-grid">
            ${portfolioData.resumes.map(r => `
              <a href="/resumes/harthik_mallichetty_${r.slug}.pdf" download class="resume-card magnetic-wrap">
                <div class="resume-card-inner">
                  <i data-lucide="file-text"></i>
                  <span class="resume-role">${r.title}</span>
                  <i data-lucide="download" class="download-icon"></i>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <footer id="contact" style="opacity: ${hasInitialized ? 1 : 0};">
        <div class="container">
          <span class="case-tag">Direct Access</span>
          <a href="mailto:${portfolioData.profile.email}" class="footer-email">${portfolioData.profile.email}</a>
          <div class="nav-links" style="justify-content: flex-start;">
             <a href="https://${portfolioData.profile.github}" target="_blank" class="magnetic-wrap">GITHUB</a>
             <a href="https://${portfolioData.profile.linkedin}" target="_blank" class="magnetic-wrap">LINKEDIN</a>
          </div>
        </div>
      </footer>
    `
    initializeIntro()
  } else {
    document.querySelector('#content-wrap').innerHTML = renderContent()
    // Scroll to top or handle transitions
  }

  initializeInteractions()
  initializeIcons()
  if (hasInitialized) initializeAnimations()
}

const renderContent = () => {
  return `
    <main style="opacity: ${hasInitialized ? 1 : 0};">
      <section class="hero">
        <div class="container hero-content">
          <span class="hero-label">SYSTEM STATUS: OPERATIONAL // V.2.0.26</span>
          <h1>
            <span>DATA ANALYST</span>
          </h1>
          <p class="hero-tagline">Pipelines. Models. Decisions. May 2026.</p>
          <div class="role-switcher">
            <button class="role-btn ${currentRole === 'ALL' ? 'active' : ''}" data-role="ALL">All Categories</button>
            ${portfolioData.roles.map(r => `
              <button class="role-btn ${currentRole === r.id ? 'active' : ''}" data-role="${r.id}">
                ${r.label}
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="projects" class="cases">
        <div class="container">
          ${renderProjects(currentRole)}
        </div>
      </section>

      <section id="about" class="about">
        <div class="container">
          <span class="case-tag">Bio // Narrative</span>
          <div class="about-grid">
             <div class="about-text">
                <p class="bio-statement">${portfolioData.profile.summary}</p>
                <div class="bio-details">
                   <div class="detail-item">
                      <span class="detail-label">Graduation</span>
                      <span class="detail-value">May 2026</span>
                   </div>
                   <div class="detail-item">
                      <span class="detail-label">Domain</span>
                      <span class="detail-value">Analytics · ML · Data Engineering</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  `
}

const initializeIntro = () => {
  if (hasInitialized) return

  const tl = gsap.timeline()

  tl.to('.intro-overlay .logo', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
    .to('.intro-panel', { scaleY: 1, duration: 1, ease: "power4.inOut" }, "+=0.2")
    .to('.intro-overlay', { yPercent: -100, duration: 1, ease: "power4.inOut" })
    .to('main, footer', { opacity: 1, duration: 0.4 }, "-=0.5")
    .call(() => {
      hasInitialized = true
      initializeAnimations()
    })
}

const renderProjects = (role) => {
  const projects = role === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.includes(role))

  return projects.map((p, i) => `
    <div class="case-item ${i % 2 !== 0 ? 'reverse' : ''}" id="${p.id}">
      <div class="case-info">
        <span class="case-tag">${p.tags.join(' / ')}</span>
        <h2>${p.title}</h2>
        <p class="case-description">${p.description}</p>
        <div class="metric-grid">
          ${Object.entries(p.metrics).map(([label, value]) => `
            <div class="metric-item">
              <span class="metric-value">${value}</span>
              <span class="metric-label">${label}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="case-visual">
         <img src="/projects/${p.image}" alt="${p.title}" class="project-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="visual-placeholder" style="display: none;">VISUALIZING ${p.id.toUpperCase()} // PENDING RENDER</div>
      </div>
    </div>
  `).join('')
}

const initializeAnimations = () => {
  // Only animate hero if we just initialized or switched roles
  const heroLines = document.querySelectorAll('.hero h1 span')
  gsap.from(heroLines, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out"
  })

  gsap.from('.role-btn', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.02,
    ease: "power2.out"
  })

  // Case Scrollytelling
  document.querySelectorAll('.case-item').forEach(el => {
    gsap.from(el.querySelector('.case-info'), {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    })
  })
}

const initializeInteractions = () => {
  const dot = document.querySelector('.cursor-dot')
  const outline = document.querySelector('.cursor-outline')

  if (dot && outline) {
    window.addEventListener('mousemove', (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0, opacity: 1 })
      gsap.to(outline, { x: e.clientX, y: e.clientY, duration: 0.15, opacity: 1 })
    })
  }

  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentRole = e.target.dataset.role

      const roleData = portfolioData.roles.find(r => r.id === currentRole)
      if (roleData) {
        document.documentElement.style.setProperty('--accent', roleData.color)
        document.documentElement.style.setProperty('--accent-rgb', hexToRgb(roleData.color))
      } else {
        document.documentElement.style.setProperty('--accent', '#3b82f6')
        document.documentElement.style.setProperty('--accent-rgb', '59, 130, 246')
      }

      renderApp()
    })

    btn.addEventListener('mousemove', (e) => {
      const position = btn.getBoundingClientRect()
      const x = e.clientX - position.left - position.width / 2
      const y = e.clientY - position.top - position.height / 2
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" })
      if (outline) gsap.to(outline, { scale: 2, duration: 0.3 })
    })

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" })
      if (outline) gsap.to(outline, { scale: 1, duration: 0.3 })
    })
  })
}

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

const initializeIcons = () => {
  try {
    createIcons({
      icons: { Monitor, PieChart, Users, Database, Cpu, Mail, ArrowRight }
    })
  } catch (e) {
    console.warn('Lucide icons load bypass')
  }
}

// Final bootstrap
renderApp(true)
