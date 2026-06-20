import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createIcons, Monitor, PieChart, Users, Database, Cpu, Mail, ArrowRight, FileText, Download } from 'lucide'
import { portfolioData } from './data'
import { inject } from '@vercel/analytics'

// Initialize Vercel Analytics
inject()

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
              <a href="/resumes/${r.file}" download class="resume-card magnetic-wrap">
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
  if (hasInitialized) _initSectionPets()
  if (hasInitialized) _placePerchers()
}

const renderContent = () => {
  return `
    <main style="opacity: ${hasInitialized ? 1 : 0};">
      <section class="hero">
        <div class="container hero-content">
          <span class="hero-label">SYSTEM STATUS: OPERATIONAL // V.2.0.26</span>
          <h1>
            <span>AI <br>ENGINEER</span>
          </h1>
          <p class="hero-tagline">Production AI. Not Portfolio AI.</p>
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
                      <span class="detail-label">Graduated</span>
                      <span class="detail-value">May 2026 · UT Dallas</span>
                   </div>
                   <div class="detail-item">
                      <span class="detail-label">Domain</span>
                      <span class="detail-value">AI · ML · Data Engineering</span>
                   </div>
                   <div class="detail-item status-available">
                      <span class="detail-label">Status</span>
                      <span class="detail-value"><span class="status-dot"></span>Available for FTE Now</span>
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
      initializePixelPets()
    })
}

const GH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`
const EXT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`

const renderProjects = (role) => {
  const projects = role === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.includes(role))

  return projects.map((p, i) => `
    <div class="case-item ${i % 2 !== 0 ? 'reverse' : ''}${p.featured ? ' featured-item' : ''}" id="${p.id}">
      <div class="case-info">
        <div class="case-tag-row">
          <span class="case-tag">${p.tags.join(' / ')}</span>
          ${p.featured ? '<span class="featured-badge">★ FEATURED</span>' : ''}
        </div>
        <h2 class="project-title-wrap">
          ${p.title}
          <span class="project-links">
            ${p.link && p.link !== '#' ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-live-link" title="${p.link.includes('github') ? 'View on GitHub' : 'Live Demo'}">${p.link.includes('github') ? GH_ICON : EXT_ICON}</a>` : ''}
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-live-link project-gh-link" title="View on GitHub">${GH_ICON}</a>` : ''}
          </span>
        </h2>
        <p class="case-description">${p.description}</p>
        <div class="metric-grid">
          ${Object.entries(p.metrics).map(([label, value]) => `
            <div class="metric-item">
              <span class="metric-value">${value}</span>
              <span class="metric-label">${label}</span>
            </div>
          `).join('')}
        </div>
        ${p.tech && p.tech.length ? `
        <div class="tech-pills">
          ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>` : ''}
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

// ── Pixel Pets ────────────────────────────────────────────────────
// 0=transparent 1=body 2=shadow/dark 3=highlight/eye
const PET_S = 5

const PET_ART = {
  cat: {
    pal: ['#c084fc','#7c3aed','#f0abfc'],
    fr: [
      [[0,0,1,0,1,0,0],[0,1,1,1,1,1,0],[1,1,3,1,1,3,1],[1,1,1,1,1,1,1],[0,1,2,1,1,2,1],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0]],
      [[0,0,1,0,1,0,0],[0,1,1,1,1,1,0],[1,1,3,1,1,3,1],[1,1,1,1,1,1,1],[0,1,2,1,1,2,1],[0,0,1,0,1,0,0],[0,0,0,1,0,1,0]],
    ]
  },
  bot: {
    pal: ['#60a5fa','#1d4ed8','#bfdbfe'],
    fr: [
      [[0,1,1,1,1,1,0],[1,3,1,1,1,3,1],[1,1,1,1,1,1,1],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[0,1,0,1,0,1,0],[0,0,1,0,1,0,0]],
      [[0,1,1,1,1,1,0],[1,3,1,1,1,3,1],[1,1,1,1,1,1,1],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[0,0,1,0,0,1,0],[0,0,0,1,1,0,0]],
    ]
  },
  duck: {
    pal: ['#fbbf24','#d97706','#fef3c7'],
    fr: [
      [[0,0,1,1,0,0,0],[0,1,3,1,1,0,0],[0,1,1,1,1,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[0,1,1,1,1,0,0],[0,0,1,0,1,0,0]],
      [[0,0,1,1,0,0,0],[0,1,3,1,1,0,0],[0,1,1,1,1,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[0,1,1,1,1,0,0],[0,0,0,1,0,0,0]],
    ]
  },
  frog: {
    pal: ['#4ade80','#15803d','#bbf7d0'],
    fr: [
      [[0,1,0,0,0,1,0],[1,1,1,1,1,1,1],[1,1,3,1,1,3,1],[0,1,1,2,1,1,0],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1]],
      [[0,1,0,0,0,1,0],[1,1,1,1,1,1,1],[1,1,3,1,1,3,1],[0,1,1,2,1,1,0],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0]],
    ]
  },
  ghost: {
    pal: ['rgba(255,255,255,0.82)','rgba(147,197,253,0.65)','rgba(255,255,255,0.97)'],
    fr: [
      [[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,3,1,3,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,0,1,0,1,0,1]],
      [[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,3,1,3,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,1,0,1,0,1,0]],
    ]
  },
  bunny: {
    pal: ['#fbcfe8','#db2777','#fdf2f8'],
    fr: [
      [[0,1,0,0,0,1,0],[0,1,0,0,0,1,0],[0,1,1,1,1,1,0],[1,1,3,1,1,3,1],[1,1,1,2,1,1,1],[0,1,1,1,1,1,0],[0,1,0,0,0,1,0],[0,0,1,0,1,0,0]],
      [[1,1,0,0,0,0,0],[0,1,0,0,0,1,0],[0,1,1,1,1,1,0],[1,1,3,1,1,3,1],[1,1,1,2,1,1,1],[0,1,1,1,1,1,0],[0,0,1,0,0,1,0],[0,0,0,1,1,0,0]],
    ]
  },
}

const _makePetCanvas = (key, flip = false, yAnim = '') => {
  const art = PET_ART[key]
  const rows = art.fr[0].length, cols = art.fr[0][0].length
  const c = document.createElement('canvas')
  c.width = cols * PET_S
  c.height = rows * PET_S
  c.style.cssText = `image-rendering:pixelated;display:block;${flip ? 'transform:scaleX(-1);' : ''}${yAnim ? `animation:${yAnim};` : ''}`
  let f = 0
  const draw = () => {
    const ctx = c.getContext('2d')
    ctx.clearRect(0, 0, c.width, c.height)
    art.fr[f].forEach((row, y) => row.forEach((px, x) => {
      if (px) { ctx.fillStyle = art.pal[px - 1]; ctx.fillRect(x * PET_S, y * PET_S, PET_S, PET_S) }
    }))
  }
  draw()
  setInterval(() => { f = (f + 1) % art.fr.length; draw() }, 380)
  return c
}

// Section pets: attached to page sections so they scroll with the content
// Re-called after each renderApp() to handle role-switch re-renders
const _initSectionPets = () => {
  // Remove any existing section pets before re-adding
  document.querySelectorAll('[data-sp]').forEach(p => p.remove())

  // side: 'top'|'bottom', val: CSS value for that side
  const addPets = (sel, pets, noOverflowClip = false) => {
    const section = document.querySelector(sel)
    if (!section) return
    if (!section.style.position) section.style.position = 'relative'
    // Sections with overflow:hidden clip pets — punch through only when safe
    if (noOverflowClip) section.style.overflow = 'visible'
    pets.forEach(r => {
      const wrap = document.createElement('div')
      wrap.className = `pet-roamer pr-${r.dir} ${r.spd}`
      wrap.setAttribute('data-sp', '')
      const side = r.side || 'bottom'
      wrap.style.cssText = `${side}:${r.val};animation-delay:${r.delay};`
      wrap.appendChild(_makePetCanvas(r.key, r.flip, r.yAnim))
      section.appendChild(wrap)
    })
  }

  // Hero: cat and bot walk near the bottom (100vh section, no clipping issue at these positions)
  addPets('.hero', [
    { key:'cat', flip:false, dir:'ltr', spd:'pr-slow',   side:'bottom', val:'14%', yAnim:'', delay:'0s'  },
    { key:'bot', flip:true,  dir:'rtl', spd:'pr-medium', side:'bottom', val:'8%',  yAnim:'', delay:'-5s' },
  ], true) // hero has overflow:hidden — punch through so pets aren't clipped

  // Cases: one pet roughly every ~1 screenful throughout the long project list.
  // All use TOP so position is anchored to section start, not the distant floor.
  addPets('.cases', [
    { key:'duck',  flip:false, dir:'ltr', spd:'pr-medium', side:'top', val:'6%',  yAnim:'pet-bounce 1.1s ease-in-out infinite', delay:'-3s'  },
    { key:'bot',   flip:true,  dir:'rtl', spd:'pr-medium', side:'top', val:'20%', yAnim:'',                                     delay:'-7s'  },
    { key:'cat',   flip:false, dir:'ltr', spd:'pr-slow',   side:'top', val:'35%', yAnim:'',                                     delay:'-1s'  },
    { key:'frog',  flip:false, dir:'ltr', spd:'pr-slow',   side:'top', val:'50%', yAnim:'pet-jump 2.3s ease-in-out infinite',   delay:'-13s' },
    { key:'bunny', flip:true,  dir:'rtl', spd:'pr-fast',   side:'top', val:'65%', yAnim:'pet-bounce 0.9s ease-in-out infinite', delay:'-5s'  },
    { key:'duck',  flip:false, dir:'ltr', spd:'pr-slow',   side:'top', val:'80%', yAnim:'pet-bounce 1.4s ease-in-out infinite', delay:'-11s' },
  ])

  // About: ghost drifts through mid-section, bunny scurries along the floor
  addPets('.about', [
    { key:'ghost', flip:false, dir:'ltr', spd:'pr-vslow', side:'top',    val:'38%', yAnim:'pet-float 3.2s ease-in-out infinite',  delay:'-2s' },
    { key:'bunny', flip:true,  dir:'rtl', spd:'pr-fast',  side:'bottom', val:'6%',  yAnim:'pet-bounce 0.9s ease-in-out infinite', delay:'-7s' },
  ])

  // Resumes: duck trots across the resume picker
  addPets('.resumes', [
    { key:'duck', flip:true, dir:'rtl', spd:'pr-medium', side:'bottom', val:'8%', yAnim:'pet-bounce 1.3s ease-in-out infinite', delay:'-9s' },
  ])
}

// Perchers sit on specific DOM elements; re-called after each renderApp()
const _placePerchers = () => {
  document.querySelectorAll('.pet-percher').forEach(p => p.remove())

  // Cat perches on top of the hero h1.
  // hero has overflow:visible now (set by addPets) so the cat won't be clipped.
  const h1 = document.querySelector('.hero h1')
  if (h1) {
    const p = document.createElement('div')
    p.className = 'pet-percher'
    // bottom:100% sits the pet right above the h1's top edge
    p.style.cssText = 'position:absolute;bottom:100%;left:3%;z-index:15;pointer-events:none;'
    p.appendChild(_makePetCanvas('cat', false, 'pet-idle-bob 2.1s ease-in-out infinite'))
    h1.style.position = 'relative'
    h1.appendChild(p)
  }

  // Duck perches on the bio statement in the About section
  const bio = document.querySelector('.bio-statement')
  if (bio) {
    const p = document.createElement('div')
    p.className = 'pet-percher'
    p.style.cssText = 'position:absolute;top:-42px;right:6%;z-index:5;pointer-events:none;'
    p.appendChild(_makePetCanvas('duck', false, 'pet-idle-bob 2.6s ease-in-out infinite 0.5s'))
    bio.style.position = 'relative'
    bio.appendChild(p)
  }

  // Ghost floats above the footer email
  const footerEmail = document.querySelector('.footer-email')
  if (footerEmail) {
    const p = document.createElement('div')
    p.className = 'pet-percher'
    p.style.cssText = 'position:absolute;bottom:110%;right:2%;z-index:5;pointer-events:none;'
    p.appendChild(_makePetCanvas('ghost', false, 'pet-float 3.5s ease-in-out infinite'))
    const footer = footerEmail.closest('footer')
    if (footer) { footer.style.position = 'relative'; footer.appendChild(p) }
  }
}

const initializePixelPets = () => {
  _initSectionPets()
  _placePerchers()
}

// Final bootstrap
renderApp(true)
