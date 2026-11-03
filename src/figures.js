// ─────────────────────────────────────────────────────────────────
// figures.js — the single illustration registry for harthik.dev
// One editorial drawing system, used by Selected Work AND Featured:
//   · viewBox 640×400, transparent ground (frames supply paper-dim)
//   · charcoal #141414 strokes @1.5 (3 for emphasis)
//   · dotted guides: dasharray 2 5 @ 25% · meaningful dashes: 5 5
//   · accent #2b45ff reserved for the "signal" of each diagram
//   · IBM Plex Mono labels, 13px, letter-spacing 1
// Technical content traces to project docs (ARC Project Log, Gemma
// competition context, résumé) — nothing implies unpublished results.
// ─────────────────────────────────────────────────────────────────

const INK = '#141414'
const ACC = '#2b45ff'
const MONO = 'IBM Plex Mono, monospace'
const svg = (label, body) =>
  `<svg viewBox="0 0 640 400" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg" fill="none">${body}</svg>`
const txt = (x, y, s, { fill = INK, size = 13, o = 1, anchor = 'start' } = {}) =>
  `<text x="${x}" y="${y}" fill="${fill}" fill-opacity="${o}" font-family="${MONO}" font-size="${size}" letter-spacing="1" text-anchor="${anchor}">${s}</text>`

export const FIGURES = {
  // Room — three model streams converging into one project memory.
  room: svg('Diagram: GPT, Claude and Gemini streams converging into one project memory line', `
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M60 80 H300 Q340 80 360 130 L380 180"/>
      <path d="M60 200 H340 L380 200"/>
      <path d="M60 320 H300 Q340 320 360 270 L380 220"/>
      <path d="M380 200 H580" stroke-width="3"/>
    </g>
    ${txt(60, 66, 'GPT')}${txt(60, 186, 'CLAUDE')}${txt(60, 306, 'GEMINI')}${txt(420, 186, 'PROJECT MEMORY')}
    <g fill="${ACC}"><circle cx="60" cy="80" r="4"/><circle cx="60" cy="200" r="4"/><circle cx="60" cy="320" r="4"/><circle cx="580" cy="200" r="5"/></g>
    <g stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5">
      <path d="M60 120 H280"/><path d="M60 240 H280"/><path d="M60 280 H280"/>
    </g>`),

  // Mylonite — two interleavings of the same program, diverging.
  mylonite: svg('Diagram: two thread interleavings of the same program diverging from the expected result', `
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M60 130 H230 L290 190 H400 L460 130 H580"/>
      <path d="M60 190 H230 L290 130 H400 L460 190 H510"/>
      <path d="M60 270 H580" stroke-opacity="0.3"/>
    </g>
    <path d="M510 190 L580 250" stroke="${ACC}" stroke-width="2"/>
    ${txt(60, 116, 'T1')}${txt(60, 176, 'T2')}${txt(60, 256, 'EXPECTED', { o: 0.4 })}${txt(470, 286, 'DIVERGENCE', { fill: ACC })}
    <circle cx="580" cy="250" r="5" fill="${ACC}"/>
    <g stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"><path d="M230 90 V310"/><path d="M400 90 V310"/></g>`),

  // Signal — EDGAR + market data through Airflow into Postgres, dbt
  // layers computing metrics; a query retrieves a cited answer.
  signal: svg('Diagram: SEC EDGAR and market data flow through Airflow into PostgreSQL and dbt layers; a query retrieves a cited answer', `
    <g stroke="${INK}" stroke-width="1.5">
      <rect x="50" y="128" width="104" height="34"/><rect x="50" y="218" width="104" height="34"/>
      <path d="M154 145 H180 L206 178"/><path d="M154 235 H180 L206 202"/>
      <rect x="206" y="172" width="84" height="36"/>
      <path d="M290 190 H330"/>
      <ellipse cx="368" cy="172" rx="38" ry="11"/>
      <path d="M330 172 V236 M406 172 V236"/><ellipse cx="368" cy="236" rx="38" ry="11"/>
      <path d="M406 204 H444"/>
      <rect x="444" y="162" width="76" height="14"/><rect x="444" y="184" width="76" height="14"/><rect x="444" y="206" width="76" height="14"/>
    </g>
    ${txt(58, 149, 'SEC EDGAR', { size: 12 })}${txt(58, 239, 'MARKET', { size: 12 })}${txt(214, 194, 'AIRFLOW', { size: 12 })}
    ${txt(338, 268, 'POSTGRES', { size: 12 })}${txt(444, 240, 'DBT × 3', { size: 12 })}${txt(540, 194, '65', { size: 22 })}${txt(540, 212, 'METRICS/CO', { size: 10, o: 0.55 })}
    <g stroke="${ACC}" stroke-width="1.5">
      <path d="M560 60 V96 H390 V158"/><path d="M400 120 H560 V330 H480" stroke-dasharray="5 5"/>
    </g>
    <circle cx="390" cy="158" r="4" fill="${ACC}"/><circle cx="480" cy="330" r="4" fill="${ACC}"/>
    ${txt(432, 52, 'QUERY', { fill: ACC })}${txt(56, 334, 'CITED ANSWER ·  10-STEP RAG · LANGGRAPH', { fill: ACC, size: 11 })}
    <path d="M470 330 H120" stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"/>`),

  // Code Sentinel — 143K review pairs fine-tune Mistral-7B (QLoRA,
  // <1% params); deployed service posts review comments on a PR diff.
  codeSentinel: svg('Diagram: 143K review pairs fine-tune Mistral-7B with QLoRA; the deployed model posts review comments on a pull-request diff', `
    <g stroke="${INK}" stroke-width="1.5">
      <rect x="62" y="162" width="104" height="52"/><rect x="54" y="154" width="104" height="52"/><rect x="46" y="146" width="104" height="52"/>
      <path d="M166 190 H228"/>
      <rect x="228" y="130" width="124" height="120"/>
      <path d="M352 190 H414"/>
      <rect x="414" y="96" width="172" height="208"/>
      <path d="M414 126 H586"/>
    </g>
    <rect x="229" y="231" width="122" height="18" fill="${ACC}" fill-opacity="0.9"/>
    ${txt(46, 232, '143K PAIRS', { size: 11 })}${txt(240, 160, 'MISTRAL-7B', { size: 12 })}${txt(240, 180, 'QLORA · H100', { size: 10, o: 0.55 })}
    ${txt(236, 244, '&lt;1% TRAINED', { size: 10, fill: '#f3f1eb' })}
    ${txt(424, 116, 'PULL REQUEST', { size: 11 })}
    <g font-family="${MONO}" font-size="12" letter-spacing="1">
      <text x="430" y="152" fill="${INK}" fill-opacity="0.55">- old_check()</text>
      <text x="430" y="172" fill="${INK}">+ new_check()</text>
      <text x="430" y="192" fill="${INK}" fill-opacity="0.55">- retries = 0</text>
      <text x="430" y="212" fill="${INK}">+ retries = 3</text>
    </g>
    <circle cx="594" cy="168" r="4" fill="${ACC}"/>
    <path d="M594 172 V252 H586" stroke="${ACC}" stroke-width="1.5"/>
    <rect x="430" y="238" width="140" height="28" stroke="${ACC}" stroke-width="1.5"/>
    ${txt(440, 256, 'AI REVIEW', { size: 11, fill: ACC })}
    ${txt(166, 176, 'FINE-TUNE', { size: 9, o: 0.55 })}${txt(46, 330, 'VERTEX AI · GITHUB ACTION ON EVERY PR', { size: 11, o: 0.55 })}
    <path d="M46 344 H394" stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"/>`),

  // Résumé — an abstract single page: structure, not fabricated text.
  resume: svg('Abstract illustration of a one-page document: ruled sections, no readable content', `
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M230 60 H386 L410 84 V340 H230 Z"/><path d="M386 60 V84 H410"/>
    </g>
    <g fill="${INK}">
      <rect x="252" y="92" width="86" height="7"/><rect x="252" y="106" width="58" height="5" fill-opacity="0.55"/>
    </g>
    <path d="M252 128 H388" stroke="${INK}" stroke-width="1.5"/>
    <g fill="${INK}" fill-opacity="0.35">
      <rect x="252" y="146" width="120" height="4"/><rect x="252" y="158" width="136" height="4"/><rect x="252" y="170" width="104" height="4"/>
      <rect x="252" y="196" width="128" height="4"/><rect x="252" y="208" width="88" height="4"/>
      <rect x="252" y="234" width="136" height="4"/><rect x="252" y="246" width="112" height="4"/><rect x="252" y="258" width="120" height="4"/>
      <rect x="252" y="284" width="96" height="4"/><rect x="252" y="296" width="124" height="4"/>
    </g>
    <circle cx="252" cy="92" r="0"/><circle cx="398" cy="96" r="4" fill="${ACC}"/>
    ${txt(96, 206, 'DOCUMENT', { o: 0.55, size: 11 })}${txt(452, 206, 'A4 · 1 PAGE', { o: 0.55, size: 11 })}
    <g stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"><path d="M96 220 H214"/><path d="M426 220 H544"/></g>`),

  // ARC-AGI-2 — the actual two-system approach from the project log:
  // induction writes transform(), a 4-level verifier proves it; pass@2.
  arc: svg('Diagram: ARC grids pass through an induced transform() program and a four-level verifier toward pass@2', `
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M70 130 H214 M70 178 H214 M70 226 H214 M70 274 H214 M70 130 V274 M118 130 V274 M166 130 V274 M214 130 V274"/>
    </g>
    <g fill="${INK}"><rect x="70" y="130" width="48" height="48"/><rect x="118" y="178" width="48" height="48"/><rect x="166" y="226" width="48" height="48"/></g>
    <path d="M214 202 H258" stroke="${INK}" stroke-width="1.5"/>
    <rect x="258" y="170" width="128" height="64" stroke="${INK}" stroke-width="1.5"/>
    ${txt(272, 198, 'transform()', { size: 13 })}${txt(272, 218, 'INDUCED', { size: 10, o: 0.55 })}
    <path d="M386 202 H430" stroke="${INK}" stroke-width="1.5"/>
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M430 130 H574 M430 178 H574 M430 226 H574 M430 274 H574 M430 130 V274 M478 130 V274 M526 130 V274 M574 130 V274"/>
    </g>
    <g fill="${ACC}"><rect x="526" y="130" width="48" height="48"/><rect x="478" y="178" width="48" height="48"/><rect x="430" y="226" width="48" height="48"/></g>
    ${txt(70, 112, 'DEMO PAIRS', { size: 11, o: 0.55 })}${txt(430, 112, 'PREDICTED', { size: 11, o: 0.55 })}
    ${txt(70, 330, 'VERIFIER L0–L3 · TRANSDUCTION ∪ INDUCTION · PASS@2', { size: 11 })}
    <path d="M70 344 H574" stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"/>`),

  // Gemma 4 — the actual SWE-bench-style loop: repo+issue in, agent
  // cycles retrieve/run via tools, ends by calling submit_patch.
  gemma: svg('Diagram: a coding agent loops between repo retrieval and sandbox runs, then calls submit_patch', `
    <g stroke="${INK}" stroke-width="1.5">
      <rect x="48" y="166" width="124" height="68"/>
      <path d="M172 200 H226"/>
      <circle cx="320" cy="200" r="64"/>
      <path d="M384 200 H454"/>
      <rect x="454" y="178" width="92" height="44"/>
    </g>
    ${txt(60, 192, 'REPO@COMMIT', { size: 11 })}${txt(60, 212, '+ ISSUE', { size: 11, o: 0.55 })}
    ${txt(320, 196, 'AGENT', { anchor: 'middle' })}${txt(320, 216, 'GEMMA 4', { size: 10, o: 0.55, anchor: 'middle' })}
    ${txt(466, 204, 'PATCH', { size: 12 })}
    ${txt(500, 246, 'submit_patch', { size: 11, fill: ACC })}
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M268 158 A66 66 0 0 1 372 158"/><path d="M372 242 A66 66 0 0 1 268 242"/>
    </g>
    <path d="M369 155 l6 -8 M369 155 l10 1 M271 245 l-6 8 M271 245 l-10 -1" stroke="${INK}" stroke-width="1.5"/>
    ${txt(320, 96, 'PLAN → ACT → OBSERVE', { size: 10, o: 0.55, anchor: 'middle' })}
    <rect x="236" y="320" width="168" height="30" stroke="${INK}" stroke-opacity="0.45" stroke-width="1.5"/>
    ${txt(248, 339, 'GRAPH RETRIEVAL · SANDBOX', { size: 10, o: 0.55 })}
    <path d="M320 264 V320" stroke="${INK}" stroke-opacity="0.45" stroke-width="1.5" stroke-dasharray="5 5"/>
    <circle cx="546" cy="200" r="4" fill="${ACC}"/>`),

  // AEIL — genuine task success vs optimizing the evaluator's score.
  aeil: svg('Diagram: an agent can genuinely complete the task, or take a dashed shortcut that only optimizes the evaluator score', `
    <circle cx="120" cy="200" r="30" stroke="${INK}" stroke-width="1.5"/>
    ${txt(120, 205, 'AGENT', { size: 11, anchor: 'middle' })}
    <path d="M148 186 L464 112" stroke="${INK}" stroke-width="1.5"/>
    <rect x="464" y="88" width="104" height="44" stroke="${INK}" stroke-width="1.5"/>
    ${txt(480, 114, 'TASK ✓', { size: 12 })}
    ${txt(240, 128, 'GENUINE SUCCESS', { size: 10, o: 0.55 })}
    <path d="M516 132 V268" stroke="${INK}" stroke-opacity="0.45" stroke-width="1.5"/>
    ${txt(528, 206, 'EVALUATED', { size: 9, o: 0.45 })}
    <rect x="452" y="268" width="128" height="44" stroke="${INK}" stroke-width="1.5"/>
    ${txt(464, 288, 'EVALUATOR', { size: 11 })}${txt(464, 304, 'SCORE 0.98', { size: 10, fill: ACC })}
    <path d="M144 220 Q310 352 452 300" stroke="${ACC}" stroke-width="1.5" stroke-dasharray="5 5"/>
    ${txt(200, 330, 'SCORE OPTIMIZATION', { size: 10, fill: ACC })}
    <path d="M60 60 H580" stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"/>
    ${txt(60, 48, 'EVALUATION INTEGRITY — WHICH PATH DID THE REWARD TEACH?', { size: 10, o: 0.55 })}`),

  // GitHub — a restrained commit graph: branch off main, merge back.
  github: svg('Illustration: a commit graph — a branch leaves the main line and merges back', `
    <path d="M70 240 H570" stroke="${INK}" stroke-width="1.5"/>
    <path d="M160 240 C200 240 200 160 240 160 H380 C420 160 420 240 460 240" stroke="${INK}" stroke-width="1.5"/>
    <g fill="${INK}"><circle cx="100" cy="240" r="5"/><circle cx="160" cy="240" r="5"/><circle cx="280" cy="160" r="5"/><circle cx="350" cy="160" r="5"/><circle cx="530" cy="240" r="5"/></g>
    <circle cx="460" cy="240" r="6" fill="${ACC}"/>
    ${txt(70, 272, 'MAIN', { size: 11, o: 0.55 })}${txt(240, 140, 'BRANCH', { size: 11, o: 0.55 })}${txt(442, 276, 'MERGE', { size: 11, fill: ACC })}
    ${txt(70, 330, '@HARTHIKRM · 18 PUBLIC REPOSITORIES', { size: 11 })}
    <path d="M70 344 H570" stroke="${INK}" stroke-opacity="0.25" stroke-dasharray="2 5"/>`),

  // LinkedIn — a minimal profile: portrait mark, rules, a small network.
  linkedin: svg('Illustration: a minimal professional profile — portrait mark, text rules and a small network of contacts', `
    <circle cx="150" cy="150" r="38" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="150" cy="138" r="12" stroke="${INK}" stroke-width="1.5"/>
    <path d="M128 172 A26 26 0 0 1 172 172" stroke="${INK}" stroke-width="1.5"/>
    <g fill="${INK}"><rect x="220" y="124" width="150" height="8"/><rect x="220" y="144" width="96" height="6" fill-opacity="0.55"/></g>
    <path d="M220 180 H560" stroke="${INK}" stroke-width="1.5"/>
    <g fill="${INK}" fill-opacity="0.35"><rect x="220" y="200" width="240" height="4"/><rect x="220" y="212" width="190" height="4"/></g>
    <g stroke="${INK}" stroke-width="1.5">
      <path d="M150 188 V280 H360 M360 280 H470 M470 280 L530 250 M470 280 L520 316"/>
    </g>
    <g fill="${INK}"><circle cx="360" cy="280" r="5"/><circle cx="530" cy="250" r="5"/><circle cx="520" cy="316" r="5"/></g>
    <circle cx="470" cy="280" r="6" fill="${ACC}"/>
    ${txt(150, 330, 'PROFILE — DALLAS, TX', { size: 11, o: 0.55 })}`),
}
