// ─────────────────────────────────────────────────────────────────
// harthik.dev — content model
// Single source of truth for everything rendered on the page.
// All claims trace to the resume (Nov 2026) or live, verified sources.
// ─────────────────────────────────────────────────────────────────

export const site = {
  name: "Harthik Mallichetty",
  role: "AI Engineer & Data Engineer",
  founderLine: "Founder, Room",
  location: "Dallas, Texas",
  email: "hrmallichetty@gmail.com",
  url: "https://www.harthik.dev",
  version: "PORTFOLIO_26 / V3.0",
  status: "Open to AI, Data & ML engineering roles",
  links: [
    { label: "GitHub", url: "https://github.com/harthikrm" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/harthikmallichetty" },
    { label: "Medium", url: "https://medium.com/@hrmallichetty" },
  ],
};

export const toc = [
  { no: "01", label: "Intro", href: "#intro" },
  { no: "02", label: "Selected Work", href: "#work" },
  { no: "03", label: "Experience", href: "#experience" },
  { no: "04", label: "Writing", href: "#writing" },
  { no: "05", label: "About", href: "#about" },
  { no: "06", label: "Featured", href: "#featured" },
  { no: "07", label: "Contact", href: "#contact" },
];

export const intro = {
  statement: [
    { t: "I build AI systems that survive contact with " },
    { t: "production", serif: true },
    { t: " — the data infrastructure underneath, the models in the middle, and the product on top." },
  ],
  body:
    "Founder of Room, a multi-model AI workspace. Previously data engineering at Prolifics and analytics at HeiDigi. MS in Business Analytics & Artificial Intelligence, UT Dallas, May 2026 — Scholar With Distinction.",
};

export const work = [
  {
    no: "01",
    id: "room",
    title: "Room",
    meta: "2026 — PRESENT · AI ENGINEER & FOUNDER",
    status: "PRIVATE EARLY ACCESS",
    statement:
      "Explain yourself once. Work with whichever AI you want. Room is a multi-model AI workspace that keeps a project's confirmed decisions, constraints and context available across conversations — so GPT, Claude and Gemini work side by side from the same understanding.",
    points: [
      "Streams up to three LLMs in parallel over SSE with targeted @-routing, fault isolation and server-side cancellation — running on your own OpenRouter key.",
      "PostgreSQL-backed project memory that extracts source-linked decisions, constraints and facts. Nothing becomes authoritative without user confirmation.",
      "Secure multi-tenant persistence on Supabase with Row-Level Security, transactional updates and retry-safe recovery.",
    ],
    stats: [
      { k: "AUTOMATED TESTS", v: "971" },
      { k: "MEMORY-RECALL EVALS", v: "24/24" },
      { k: "CROSS-MODEL CONTINUITY", v: "26/26" },
      { k: "PROMPT INJECTIONS SUCCEEDED", v: "0/30" },
    ],
    stack: "Next.js · TypeScript · OpenRouter · Supabase · PostgreSQL · SSE",
    links: [{ label: "JOINAROOM.APP", url: "https://joinaroom.app" }],
    note: "The marketing site is public; the app itself is in private early access.",
    figure: { type: "svg", svg: "room" },
    caption: "FIG.01 — THREE MODELS, ONE PROJECT MEMORY",
  },
  {
    no: "02",
    id: "signal",
    title: "Signal",
    meta: "2025 · FINANCIAL INTELLIGENCE · END-TO-END BUILD",
    status: "LIVE",
    statement:
      "Hours of SEC-filing research, compressed into seconds of natural-language Q&A across 70 S&P 500 companies.",
    points: [
      "10-step RAG pipeline with a self-correcting LangGraph reasoning agent; answers cite back to the underlying filings.",
      "Data foundation on GCP — Airflow-orchestrated ingestion of SEC EDGAR filings and market data into PostgreSQL.",
      "Three-layer dbt transformations computing 65 financial metrics per company.",
    ],
    stats: [
      { k: "REQUESTS / FIRST 30 DAYS", v: "800+" },
      { k: "S&P 500 COMPANIES", v: "70" },
      { k: "METRICS PER COMPANY", v: "65" },
      { k: "RAG PIPELINE", v: "10-STEP" },
    ],
    stack: "Python · FastAPI · PostgreSQL · pgvector · dbt · Airflow · LangGraph · GCP · React",
    links: [
      { label: "SIGNAL.HARTHIK.DEV", url: "https://signal.harthik.dev" },
      { label: "GITHUB", url: "https://github.com/harthikrm/signal-financial-intelligence" },
    ],
    figure: { type: "svg", svg: "signal" },
    caption: "FIG.02 — DATA FOUNDATION & RETRIEVAL",
  },
  {
    no: "03",
    id: "code-sentinel",
    title: "Code Sentinel",
    meta: "2026 · LLM FINE-TUNING & MLOPS",
    statement:
      "A fine-tuned Mistral-7B that writes first-pass code review on every pull request — and outscores GPT-4o-mini doing it.",
    points: [
      "Fine-tuned Mistral-7B-Instruct on 143K real code-review pairs with QLoRA on an NVIDIA H100 — under 1% of parameters trained.",
      "6.1% higher BERTScore F1 than GPT-4o-mini on held-out review generation.",
      "Deployed as a FastAPI inference service on Vertex AI, with a GitHub Action that posts model-generated review comments on every PR.",
    ],
    stats: [
      { k: "TRAINING PAIRS", v: "143K" },
      { k: "BERTSCORE F1 VS GPT-4O-MINI", v: "+6.1%" },
      { k: "PARAMETERS TRAINED", v: "<1%" },
      { k: "HARDWARE", v: "1× H100" },
    ],
    stack: "PyTorch · Mistral-7B · QLoRA · PEFT · FastAPI · Vertex AI · W&B · GitHub Actions",
    links: [{ label: "GITHUB", url: "https://github.com/harthikrm/code-sentinel" }],
    figure: { type: "svg", svg: "codeSentinel" },
    caption: "FIG.03 — FINE-TUNE → REVIEW ON EVERY PR",
  },
  {
    no: "04",
    id: "mylonite",
    title: "Mylonite",
    meta: "RESEARCH · CONCURRENCY TESTING",
    status: "IN DEVELOPMENT",
    statement:
      "Metamorphic testing for concurrent systems — hunting the bugs that only appear between the threads.",
    points: [
      "An independent research project applying metamorphic testing to concurrency: generating semantically equivalent interleavings and flagging divergent behaviour.",
      "Current findings are experimental and unvalidated. This entry will grow as results hold up.",
    ],
    stats: [],
    stack: "",
    links: [],
    figure: { type: "svg", svg: "mylonite" },
    caption: "FIG.04 — INTERLEAVINGS UNDER TEST",
  },
];

export const archive = [
  { title: "Quant Risk Desk", field: "Quant / Risk", stack: "Python · Pandas · SQL · Tableau", url: "https://github.com/harthikrm/quant-risk-desk" },
  { title: "F1 Race Intelligence", field: "Data Engineering", stack: "Python · PostgreSQL · FastAPI · React", url: "https://github.com/harthikrm/f1-race-intelligence" },
  { title: "Global Supply Chain Intelligence", field: "ML / Graph", stack: "Python · NetworkX", url: "https://github.com/harthikrm/global-supply-chain-intelligence" },
  { title: "Smart Home IoT Analytics", field: "ML / Telemetry", stack: "Python · MQTT · Grafana", url: "https://github.com/harthikrm/smart-home-analytics" },
  { title: "NLP Fake News Detection", field: "Deep Learning", stack: "TensorFlow · Transformers", url: "" },
  { title: "Merchant Credit Risk", field: "ML / Fraud", stack: "SQL · Python · Tableau", url: "https://github.com/harthikrm/merchant-credit-risk-fraud-monitoring" },
  { title: "Recruiting & People Systems Analytics", field: "People Analytics", stack: "Power BI · SQL · Python", url: "https://github.com/harthikrm/recruiting-funnel-analytics" },
  { title: "ATS Data Integrity & SLA Monitoring", field: "Data Quality", stack: "Python · PostgreSQL · Power BI", url: "https://github.com/harthikrm/data-integrity-sla-monitoring-framework" },
  { title: "Customer Churn Analysis", field: "ML / Retention", stack: "Python · Scikit-Learn", url: "https://github.com/harthikrm/churn-analytics-project" },
  { title: "Retail Sales Forecasting", field: "Forecasting", stack: "Python · Statsmodels", url: "" },
  { title: "Job Search Automation Pipeline", field: "AI / Automation", stack: "Python · GPT-4o · n8n · Docker", url: "" },
];

export const experience = [
  {
    company: "Room",
    location: "Dallas, TX",
    period: "MAY 2026 — PRESENT",
    roles: [
      {
        title: "AI Engineer & Founder",
        period: "",
        points: [
          "Building a multi-model AI workspace: parallel LLM streaming over SSE, a user-confirmed project-memory pipeline on PostgreSQL, and an LLM evaluation suite — validated by 971 automated tests.",
          "Live at joinaroom.app; the app is in private early access.",
        ],
      },
    ],
  },
  {
    company: "Prolifics",
    location: "Hyderabad, India",
    period: "FEB 2023 — JUL 2024",
    roles: [
      {
        title: "Associate Data Engineer",
        period: "JUN 2023 — JUL 2024",
        points: [
          "Designed and deployed a TensorFlow-based sprint-risk prediction service as a Flask REST API, giving 15+ engineering managers one to two weeks' advance visibility into at-risk sprints.",
          "Built SQL ETL pipelines integrating 250K+ Jira and QA records into datasets for risk modelling and analytics.",
          "Integrated risk predictions into dashboards for delivery teams of 200+ developers, with documentation and onboarding.",
        ],
      },
      {
        title: "Data Engineer Intern",
        period: "FEB 2023 — MAY 2023",
        points: [
          "Consolidated 100K+ Jira and PostgreSQL records into reusable engineering analytics datasets through SQL ETL pipelines.",
          "Standardised sprint-health, defect-trend and delivery KPIs, giving QA and delivery teams one shared reporting framework.",
        ],
      },
    ],
  },
  {
    company: "HeiDigi",
    location: "Hyderabad, India",
    period: "MAR 2022 — AUG 2022",
    roles: [
      {
        title: "Data Analyst Intern",
        period: "",
        points: [
          "Automated KPI reporting for 20+ marketing campaigns using Python and SQL, standardising measurement.",
          "Analysed campaign experiments to find top audiences and creatives, contributing to 20% higher ROI and 18% higher CTR.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "University of Texas at Dallas",
    degree: "MS, Business Analytics & Artificial Intelligence",
    detail: "Scholar With Distinction · GPA 3.8/4.0",
    date: "MAY 2026",
  },
  {
    school: "GITAM University",
    degree: "BTech, Computer Science & Business Systems",
    detail: "GPA 8.52/10",
    date: "APR 2024",
  },
];

export const programs = [
  "McKinsey.org Forward Program — 2026",
  "IBM Data Analytics Academic Internship — 2023",
];

export const writing = [
  {
    title: "From Code Review to ARC-AGI-2: Reusing the Same ML Muscle on a Harder Reasoning Problem",
    date: "OCT 2026",
    summary: "What fine-tuning Code Sentinel taught me, applied to abstract reasoning on ARC-AGI-2.",
    url: "https://medium.com/@hrmallichetty/from-code-review-to-arc-agi-2-reusing-the-same-ml-muscle-on-a-harder-reasoning-problem-a4be66501d3b",
  },
  {
    title: "When Feedback Backfires: Can Better Feedback Teach AI Agents to Game the System?",
    date: "SEP 2026",
    summary: "Reward hacking and evaluation integrity — does telling an agent exactly why it failed teach it to fix the task, or to game the grader?",
    url: "https://medium.com/@hrmallichetty/when-feedback-backfires-can-better-feedback-teach-ai-agents-to-game-the-system-5a03d05d9262",
  },
];

export const competitions = [
  { name: "ARC Prize 2026", detail: "ARC-AGI-2" },
  { name: "Kaggle", detail: "Gemma 4 Developer Agent Competition" },
  { name: "Meta Global AI Developer Hackathon", detail: "2026" },
];

export const about = {
  body:
    "I'm Harthik — an engineer who likes the unglamorous parts of AI: the ingestion jobs, the eval suites, the memory models, the deployment plumbing. I'd rather ship one system that holds up under real users than ten demos. Away from the keyboard: golf, poker, chess, fishing, camping, cooking, cricket, soccer and Formula 1.",
  capabilities: [
    { label: "Languages & Databases", items: "Python, SQL, R, JavaScript, TypeScript, PostgreSQL, MySQL, pgvector, DuckDB" },
    { label: "Data Engineering & Analytics", items: "ETL/ELT, data modelling, Airflow, dbt, Pandas, Power BI, Tableau, A/B testing" },
    { label: "Cloud & Backend", items: "GCP (Cloud Run, Vertex AI, Cloud SQL), Next.js, Supabase, Docker, FastAPI, Git, GitHub Actions" },
    { label: "Machine Learning & AI", items: "TensorFlow, PyTorch, Scikit-learn, Hugging Face, QLoRA, LangChain, RAG, LLM evaluation" },
  ],
};

// ── Featured carousel ────────────────────────────────────────────
// One continuous shelf of professional artifacts. `url: ""` renders a
// deliberately non-interactive card (no invented links, no fake PDFs).
// preview: { kind: "img", src } | { kind: "svg", svg } | { kind: "cover", eyebrow, lines }
export const featured = [
  {
    id: "feat-resume",
    type: "DOCUMENT",
    title: "Résumé",
    summary: "Single-page professional résumé covering Room, Prolifics, HeiDigi and selected systems work.",
    status: "PDF — ONE PAGE",
    url: "/Harthik_Mallichetty_Resume.pdf",
    linkLabel: "OPEN PDF ↗",
    preview: { kind: "svg", svg: "resume" },
  },
  {
    id: "feat-room",
    type: "PRODUCT",
    title: "Room",
    summary: "Multi-model AI workspace — GPT, Claude and Gemini working side by side from one confirmed project memory.",
    status: "PRIVATE EARLY ACCESS",
    url: "https://joinaroom.app",
    linkLabel: "JOINAROOM.APP ↗",
    preview: { kind: "svg", svg: "room" },
  },
  {
    id: "feat-article-feedback",
    type: "ARTICLE",
    title: "When Feedback Backfires: Can Better Feedback Teach AI Agents to Game the System?",
    summary: "Reward hacking and evaluation integrity — does precise failure feedback fix the task, or train the agent to game the grader?",
    status: "MEDIUM — SEP 2026",
    url: "https://medium.com/@hrmallichetty/when-feedback-backfires-can-better-feedback-teach-ai-agents-to-game-the-system-5a03d05d9262",
    linkLabel: "READ ON MEDIUM ↗",
    preview: { kind: "cover", eyebrow: "ESSAY — 01", lines: ["When feedback", "backfires."], serif: true },
  },
  {
    id: "feat-signal",
    type: "PRODUCT",
    title: "Signal",
    summary: "Natural-language Q&A over SEC filings for 70 S&P 500 companies — 10-step RAG pipeline, cited answers.",
    status: "LIVE",
    url: "https://signal.harthik.dev",
    linkLabel: "SIGNAL.HARTHIK.DEV ↗",
    preview: { kind: "svg", svg: "signal" },
  },
  {
    id: "feat-research-aeil",
    type: "RESEARCH",
    title: "AEIL — Agent Evaluation Integrity",
    summary: "Working research on evaluation integrity: how feedback and reward signals teach autonomous agents to game their graders.",
    status: "WORKING PAPER",
    url: "",
    linkLabel: "",
    preview: { kind: "svg", svg: "aeil" },
  },
  {
    id: "feat-article-arc",
    type: "ARTICLE",
    title: "From Code Review to ARC-AGI-2: Reusing the Same ML Muscle on a Harder Reasoning Problem",
    summary: "What fine-tuning Code Sentinel taught me, applied to abstract reasoning on ARC-AGI-2.",
    status: "MEDIUM — OCT 2026",
    url: "https://medium.com/@hrmallichetty/from-code-review-to-arc-agi-2-reusing-the-same-ml-muscle-on-a-harder-reasoning-problem-a4be66501d3b",
    linkLabel: "READ ON MEDIUM ↗",
    preview: { kind: "cover", eyebrow: "ESSAY — 02", lines: ["Code review →", "ARC-AGI-2."], serif: true },
  },
  {
    id: "feat-research-arc",
    type: "RESEARCH",
    title: "ARC-AGI-2 — Abstract Reasoning",
    summary: "ARC Prize 2026 entry: applying the fine-tuning discipline behind Code Sentinel to abstract reasoning.",
    status: "RESEARCH IN PROGRESS",
    url: "",
    linkLabel: "",
    preview: { kind: "svg", svg: "arc" },
  },
  {
    id: "feat-research-gemma",
    type: "RESEARCH",
    title: "Gemma 4 Developer Agent",
    summary: "Developer agent built for Kaggle's Gemma 4 Developer Agent competition.",
    status: "IN PROGRESS",
    url: "",
    linkLabel: "",
    preview: { kind: "svg", svg: "gemma" },
  },
  {
    id: "feat-github",
    type: "PROFILE",
    title: "GitHub",
    summary: "18 public repositories — AI systems, data engineering, analytics.",
    status: "@HARTHIKRM",
    url: "https://github.com/harthikrm",
    linkLabel: "GITHUB.COM/HARTHIKRM ↗",
    preview: { kind: "svg", svg: "github" },
  },
  {
    id: "feat-linkedin",
    type: "PROFILE",
    title: "LinkedIn",
    summary: "Professional profile, experience and recommendations.",
    status: "PROFILE",
    url: "https://www.linkedin.com/in/harthikmallichetty",
    linkLabel: "LINKEDIN ↗",
    preview: { kind: "svg", svg: "linkedin" },
  },
];
