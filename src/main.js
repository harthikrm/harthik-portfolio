import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { inject } from '@vercel/analytics'
import {
  site, toc, intro, work, archive, experience,
  education, programs, writing, competitions, about, featured,
} from './data'
import { FIGURES } from './figures'

inject()
gsap.registerPlugin(ScrollTrigger)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (reducedMotion) document.documentElement.classList.add('reduced-motion')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// ── Render ───────────────────────────────────────────────────────
const renderHeader = () => `
  <a class="skip-link" href="#work">Skip to work</a>
  <header>
    <div class="container nav-inner">
      <div class="nav-id">
        <a href="#intro" class="mono">HARTHIK_MALLICHETTY</a>
        <span class="mono nav-section-indicator" id="section-indicator" aria-hidden="true">/01 INTRO</span>
      </div>
      <nav class="nav-links" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#writing">Writing</a>
        <a href="#about">About</a>
        <a href="/Harthik_Mallichetty_Resume.pdf" class="nav-resume" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        <a href="mailto:${site.email}" class="nav-talk">Let's talk</a>
      </nav>
    </div>
  </header>`

const renderHero = () => `
  <section class="hero" id="intro" style="border-top:0">
    <div class="container hero-top">
      <nav class="hero-index mono" aria-label="Page index">
        ${toc.map((t) => `<a href="${t.href}">${t.label}</a><span class="mono-dim">P.${t.no}</span>`).join('')}
      </nav>
    </div>
    <div class="container hero-main">
      <h1 class="hero-name">
        <span class="line"><span>Harthik</span></span>
        <span class="line"><span>Mallichetty</span></span>
      </h1>
      <div class="hero-sub">
        <p class="hero-role">${site.role} — <em>${site.founderLine}</em><br>
          <span class="mono mono-dim" style="letter-spacing:.08em">BASED IN ${site.location.toUpperCase()}</span>
        </p>
        <div class="hero-status">
          <span class="mono"><span class="status-dot"></span>${site.status.toUpperCase()}</span>
          <span class="mono mono-dim">${site.version} · <span id="local-time">DAL --:--</span></span>
        </div>
      </div>
    </div>
    <div class="container hero-foot">
      <span class="mono mono-dim">[ SCROLL TO EXPLORE ]</span>
      <div class="hero-foot-links">
        ${site.links.map((l) => `<a class="mono mono-dim" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label.toUpperCase()} ↗</a>`).join('')}
      </div>
    </div>
  </section>`

const renderIntro = () => `
  <section id="statement" aria-label="Introduction">
    <div class="container">
      <p class="intro-statement reveal">${intro.statement
        .map((p) => (p.serif ? `<span class="serif-accent">${esc(p.t)}</span>` : esc(p.t)))
        .join('')}</p>
      <p class="intro-body reveal">${esc(intro.body)}</p>
    </div>
  </section>`

const renderWorkEntry = (w) => `
  <article class="work-entry" id="${w.id}">
    <div class="work-info reveal">
      <p class="work-no">/${w.no}
        <span class="mono-dim">${esc(w.meta)}</span>
        ${w.status ? `<span class="work-status mono ${w.status === 'LIVE' ? 'live' : ''}">${w.status}</span>` : ''}
      </p>
      <h3 class="work-title">${w.links.length
        ? `<a href="${w.links[0].url}" target="_blank" rel="noopener noreferrer">${esc(w.title)}</a>`
        : esc(w.title)}</h3>
      <p class="work-statement">${esc(w.statement)}</p>
      <ul class="work-points">${w.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      ${w.stats.length ? `<div class="work-stats">${w.stats
        .map((s) => `<div class="work-stat"><b>${esc(s.v)}</b><span>${esc(s.k)}</span></div>`)
        .join('')}</div>` : ''}
      ${w.stack ? `<p class="work-stack mono">${esc(w.stack)}</p>` : ''}
      ${w.links.length ? `<div class="work-links">${w.links
        .map((l) => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">↗ ${esc(l.label)}</a>`)
        .join('')}</div>` : ''}
      ${w.note ? `<p class="work-note">${esc(w.note)}</p>` : ''}
    </div>
    <figure class="work-figure reveal">
      <div class="figure-frame">${w.figure.type === 'img'
        ? `<img src="/projects/${w.figure.src}" alt="${esc(w.figure.alt)}" loading="lazy" width="1280" height="800">`
        : FIGURES[w.figure.svg]}</div>
      <figcaption class="figure-caption mono"><span>${esc(w.caption)}</span><span class="mono-dim">HM_26</span></figcaption>
    </figure>
  </article>`

const renderWork = () => `
  <section id="work">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">Selected <span class="serif-accent">work</span></h2>
        <span class="mono mono-dim">/02 — P.02</span>
      </div>
      ${work.map(renderWorkEntry).join('')}

      <div class="archive reveal">
        <div class="archive-head">
          <h3 class="mono">ARCHIVE — ${archive.length} PROJECTS</h3>
          <span class="mono mono-dim">2024 — 2026</span>
        </div>
        <div class="archive-table">
          ${archive.map((a, i) => {
            const inner = `
              <span class="mono mono-dim">${String(i + 1).padStart(2, '0')}</span>
              <span class="proj">${esc(a.title)}</span>
              <span class="mono mono-dim field">${esc(a.field)}</span>
              <span class="mono mono-dim stack">${esc(a.stack)}</span>
              <span class="arrow">${a.url ? '↗' : ''}</span>`
            return a.url
              ? `<a class="archive-row" href="${a.url}" target="_blank" rel="noopener noreferrer">${inner}</a>`
              : `<div class="archive-row">${inner}</div>`
          }).join('')}
        </div>
      </div>
    </div>
  </section>`

const renderExperience = () => `
  <section id="experience">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">Experience</h2>
        <span class="mono mono-dim">/03 — P.03</span>
      </div>
      ${experience.map((x) => `
        <div class="xp-block reveal">
          <div class="xp-meta">
            <h3 class="xp-company">${esc(x.company)}</h3>
            <span class="mono mono-dim">${esc(x.period)}</span>
            <span class="mono mono-dim">${esc(x.location).toUpperCase()}</span>
          </div>
          <div>
            ${x.roles.map((r) => `
              <div class="xp-role">
                <div class="xp-role-head">
                  <span class="xp-role-title">${esc(r.title)}</span>
                  ${r.period ? `<span class="mono mono-dim">${esc(r.period)}</span>` : ''}
                </div>
                <ul class="xp-points">${r.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
              </div>`).join('')}
          </div>
        </div>`).join('')}

      <div class="edu-grid reveal">
        ${education.map((e) => `
          <div class="edu-cell">
            <h3 class="edu-school">${esc(e.school)}</h3>
            <p class="edu-degree">${esc(e.degree)}</p>
            <div class="edu-foot">
              <span class="mono mono-dim">${esc(e.detail).toUpperCase()}</span>
              <span class="mono">${esc(e.date)}</span>
            </div>
          </div>`).join('')}
      </div>
      <div class="programs-line reveal">
        ${programs.map((p) => `<span class="mono mono-dim">${esc(p).toUpperCase()}</span>`).join('')}
      </div>
    </div>
  </section>`

const renderWriting = () => `
  <section id="writing">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">Writing <span class="serif-accent">&amp; research</span></h2>
        <span class="mono mono-dim">/04 — P.04</span>
      </div>
      <div class="writing-list reveal">
        ${writing.map((w) => `
          <a class="writing-row" href="${w.url}" target="_blank" rel="noopener noreferrer">
            <span class="mono mono-dim wdate">${esc(w.date)}</span>
            <span class="writing-title">${esc(w.title)}</span>
            <span class="writing-summary">${esc(w.summary)}</span>
            <span class="arrow">↗</span>
          </a>`).join('')}
      </div>
      <div class="writing-foot reveal">
        <a class="mono" href="https://medium.com/@hrmallichetty" target="_blank" rel="noopener noreferrer">ALL WRITING ON MEDIUM ↗</a>
      </div>

      <div class="comp-strip reveal">
        <h3 class="mono" style="margin-bottom:10px">COMPETITIONS — ACTIVE &amp; RECENT</h3>
        ${competitions.map((c) => `
          <div class="comp-row">
            <span class="comp-name">${esc(c.name)}</span>
            <span class="mono mono-dim">${esc(c.detail).toUpperCase()}</span>
          </div>`).join('')}
      </div>
    </div>
  </section>`

const renderAbout = () => `
  <section id="about">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">About</h2>
        <span class="mono mono-dim">/05 — P.05</span>
      </div>
      <div class="about-grid">
        <p class="about-body reveal">${esc(about.body)}</p>
        <div class="cap-list reveal">
          ${about.capabilities.map((c) => `
            <div class="cap-row">
              <span class="mono">${esc(c.label).toUpperCase()}</span>
              <p>${esc(c.items)}</p>
            </div>`).join('')}
        </div>
      </div>

    </div>
  </section>`

// ── Featured carousel ────────────────────────────────────────────
const renderPreview = (p, title) => {
  if (p.kind === 'img')
    return `<img src="/projects/${p.src}" alt="${esc(p.alt || title)}" loading="lazy" width="1280" height="800" draggable="false">`
  if (p.kind === 'svg') return FIGURES[p.svg]
  return `
    <div class="fc-cover ${p.plain ? 'plain' : ''} ${p.ruled ? 'ruled' : ''}">
      <span class="mono mono-dim">${esc(p.eyebrow || '')}</span>
      <span class="fc-cover-lines ${p.serif ? 'serif-accent' : ''}">${p.lines.map(esc).join('<br>')}</span>
    </div>`
}

const renderCard = (f) => {
  const body = `
    <div class="fc-preview">${renderPreview(f.preview, f.title)}</div>
    <div class="fc-body">
      <div class="fc-meta mono"><span>${esc(f.type)}</span><span class="mono-dim">${esc(f.status)}</span></div>
      <h3 class="fc-title">${esc(f.title)}</h3>
      <p class="fc-sum">${esc(f.summary)}</p>
      ${f.url
        ? `<span class="fc-action mono">${esc(f.linkLabel)}</span>`
        : `<span class="fc-action mono mono-dim">NOT YET PUBLIC</span>`}
    </div>`
  return f.url
    ? `<a class="fc-card" href="${f.url}" target="_blank" rel="noopener noreferrer" aria-label="${esc(f.title)} — ${esc(f.type.toLowerCase())}">${body}</a>`
    : `<article class="fc-card is-static">${body}</article>`
}

const renderFeatured = () => `
  <section id="featured">
    <div class="container section-head">
      <h2 class="section-title">Featured <span class="serif-accent">artifacts</span></h2>
      <span class="mono mono-dim">/06 — P.06</span>
    </div>
    <div class="container fc-sub">
      <span class="mono mono-dim">RÉSUMÉ · RESEARCH · WRITING · PRODUCTS · PROFILES — ${featured.length} ITEMS</span>
      <span style="display:flex;gap:16px;align-items:center">
        <span class="mono mono-dim fc-hint">[ DRAG OR HOVER TO PAUSE ]</span>
        <button type="button" class="fc-pause" aria-pressed="false" aria-controls="fc-region">PAUSE</button>
      </span>
    </div>
    <div class="fc-viewport" id="fc-region" role="region" aria-label="Featured work carousel">
      <div class="fc-track">
        <div class="fc-group">${featured.map(renderCard).join('')}</div>
        <div class="fc-group fc-clone" aria-hidden="true" inert>${featured.map(renderCard).join('')}</div>
      </div>
    </div>
  </section>`

const renderContact = () => `
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-head" style="margin-bottom:clamp(40px,6vh,80px)">
        <span class="mono" style="color:inherit">DIRECT ACCESS</span>
        <span class="mono" style="opacity:.5">/07 — P.07</span>
      </div>
      <h2 class="contact-head">Let's build<br><em>something real.</em></h2>
      <a class="contact-email" href="mailto:${site.email}">${site.email}</a>
      <div class="contact-links">
        ${site.links.map((l) => `<a class="mono" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label.toUpperCase()} ↗</a>`).join('')}
      </div>
      <div class="contact-foot mono">
        <span>© 2026 HARTHIK MALLICHETTY</span>
        <span>DALLAS, TX — <span id="footer-time">--:--</span></span>
        <span>SET IN SWITZER, INSTRUMENT SERIF &amp; IBM PLEX MONO</span>
        <span>DESIGNED &amp; BUILT BY HM</span>
      </div>
    </div>
  </section>`

document.querySelector('#app').innerHTML = [
  renderHeader(), '<main id="main">', renderHero(), renderIntro(),
  renderWork(), renderExperience(), renderWriting(), renderAbout(),
  renderFeatured(), '</main>', renderContact(),
].join('')

// ── Behaviour ────────────────────────────────────────────────────

// Dallas clock
const fmtTime = () =>
  new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Chicago',
  }).format(new Date())

const tick = () => {
  const t = fmtTime()
  const a = document.getElementById('local-time')
  const b = document.getElementById('footer-time')
  if (a) a.textContent = `DAL ${t}`
  if (b) b.textContent = `${t} CT`
}
tick()
setInterval(tick, 30_000)

// Header border on scroll
const header = document.querySelector('header')
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true })

// Current-section indicator
const indicator = document.getElementById('section-indicator')
const sections = [
  ['intro', '/01 INTRO'], ['statement', '/01 INTRO'], ['work', '/02 WORK'],
  ['experience', '/03 EXPERIENCE'], ['writing', '/04 WRITING'],
  ['about', '/05 ABOUT'], ['featured', '/06 FEATURED'], ['contact', '/07 CONTACT'],
]
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return
    const hit = sections.find(([id]) => id === en.target.id)
    if (hit && indicator) indicator.textContent = hit[1]
    document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
      a.setAttribute('aria-current', a.getAttribute('href') === `#${en.target.id}` ? 'true' : 'false')
    })
  })
}, { rootMargin: '-40% 0px -55% 0px' })
sections.forEach(([id]) => {
  const el = document.getElementById(id)
  if (el) io.observe(el)
})

// Motion
const showAllReveals = () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    el.style.opacity = 1
    el.style.visibility = 'visible'
    el.style.transform = 'none'
  })
}

if (!reducedMotion) {
  try {
    gsap.from('.hero-name .line > span', {
      yPercent: 110, duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.15,
    })
    gsap.from('.hero-sub, .hero-foot, .hero-top', {
      opacity: 0, y: 18, duration: 0.9, stagger: 0.08, ease: 'power3.out', delay: 0.7,
    })

    document.querySelectorAll('.reveal').forEach((el) => {
      gsap.to(el, {
        autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 95%', once: true },
      })
    })

    // Keyboard users can Tab into content whose reveal hasn't fired yet —
    // make anything receiving focus visible immediately.
    document.addEventListener('focusin', (e) => {
      const r = e.target.closest('.reveal')
      if (r && getComputedStyle(r).visibility === 'hidden') gsap.set(r, { autoAlpha: 1, y: 0 })
    })
  } catch (err) {
    console.warn('Reveal animations unavailable, showing content directly', err)
    showAllReveals()
  }
} else {
  showAllReveals()
}

// ── Featured carousel engine ─────────────────────────────────────
// Seamless infinite drift: track holds two identical groups; offset wraps
// by one group-width, so the loop never visibly resets. Clone group is
// aria-hidden + inert (no duplicate announcements, no focus trap).
const initCarousel = () => {
  const section = document.getElementById('featured')
  const viewport = section?.querySelector('.fc-viewport')
  const track = section?.querySelector('.fc-track')
  const group = section?.querySelector('.fc-group')
  if (!viewport || !track || !group) return

  if (reducedMotion) {
    // No auto-movement: native horizontal scrolling over the single group.
    section.querySelector('.fc-clone')?.remove()
    viewport.classList.add('fc-manual')
    const hint = section.querySelector('.fc-hint')
    if (hint) hint.textContent = '[ SCROLL TO BROWSE ]'
    section.querySelector('.fc-pause')?.remove() // nothing to pause
    return
  }

  const SPEED = 26 // px per second — quiet, not distracting
  let offset = 0
  let groupW = 0
  let hovered = false
  let focused = false
  let dragging = false
  let inView = false
  let lastT = null
  let moved = 0
  let userPaused = false

  // Persistent pause control — keyboard- and touch-reachable (WCAG 2.2.2)
  const pauseBtn = section.querySelector('.fc-pause')
  pauseBtn?.addEventListener('click', () => {
    userPaused = !userPaused
    pauseBtn.setAttribute('aria-pressed', String(userPaused))
    pauseBtn.textContent = userPaused ? 'PLAY' : 'PAUSE'
  })

  const measure = () => { groupW = group.getBoundingClientRect().width }
  measure()
  new ResizeObserver(measure).observe(group)

  const wrap = () => {
    if (groupW <= 0) return
    offset = -(((-offset % groupW) + groupW) % groupW)
  }
  const apply = () => { track.style.transform = `translate3d(${offset}px,0,0)` }

  const step = (t) => {
    if (lastT !== null) {
      const dt = Math.min((t - lastT) / 1000, 0.1) // clamp: no jump after tab switch
      if (inView && !userPaused && !hovered && !focused && !dragging && !document.hidden && groupW > viewport.clientWidth) {
        offset -= SPEED * dt
        wrap()
        apply()
      }
    }
    lastT = t
    requestAnimationFrame(step)
  }
  requestAnimationFrame(step)

  new IntersectionObserver((e) => { inView = e[0].isIntersecting }, { rootMargin: '60px' }).observe(section)

  // Hover / focus pause
  viewport.addEventListener('pointerenter', () => { hovered = true })
  viewport.addEventListener('pointerleave', () => { hovered = false })
  viewport.addEventListener('focusin', (e) => {
    focused = true
    // Bring the focused card fully into view (it may be translated off-screen).
    const card = e.target.closest('.fc-card')
    if (card) {
      const pad = 24
      const vw = viewport.clientWidth
      const left = card.offsetLeft + offset
      const right = left + card.offsetWidth
      if (left < 0) offset += pad - left
      else if (right > vw) offset -= right - vw + pad
      wrap()
      apply()
    }
  })
  viewport.addEventListener('focusout', () => { focused = false })

  // Drag / swipe (pointer events cover mouse + touch; vertical page scroll stays native)
  let startX = 0
  let startOffset = 0
  viewport.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return
    dragging = true
    moved = 0
    startX = e.clientX
    startOffset = offset
    viewport.classList.add('fc-dragging')
  })
  viewport.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const dx = e.clientX - startX
    moved = Math.max(moved, Math.abs(dx))
    if (moved > 8) { try { viewport.setPointerCapture(e.pointerId) } catch { /* stale pointer */ } }
    offset = startOffset + dx
    wrap()
    apply()
  })
  const endDrag = () => {
    dragging = false
    viewport.classList.remove('fc-dragging')
  }
  // Window-level: a release outside the viewport must still end the drag.
  window.addEventListener('pointerup', endDrag)
  window.addEventListener('pointercancel', endDrag)

  // A real drag should not trigger the card's link on release.
  // e.detail > 0 keeps keyboard-synthesized clicks (detail 0) working.
  viewport.addEventListener('click', (e) => {
    if (moved > 8 && e.detail > 0) {
      e.preventDefault()
      e.stopPropagation()
      moved = 0
    }
  }, true)
}
initCarousel()
