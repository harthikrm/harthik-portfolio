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
      "Explain yourself once. Work with whichever AI you want. Room is a multi-model AI workspace that preserves important project decisions and context across independent AI conversations, so developers can work with different models without repeatedly explaining their projects.",
    points: [
      "Built a multi-model AI workspace using Next.js, TypeScript and OpenRouter, streaming up to three LLMs in parallel through Server-Sent Events (SSE), with targeted routing, failure isolation and server-side cancellation.",
      "Engineered a source-linked project-memory system that extracts decisions, constraints and facts into PostgreSQL, allowing users to approve what becomes shared knowledge across independent AI conversations.",
      "Implemented secure multi-tenant persistence with Supabase Row-Level Security, transactional updates and retry-safe recovery; validated through 971 automated tests and controlled memory, continuity and prompt-injection evaluations.",
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
      "Signal is an AI-powered financial research platform that turns company filings and market data into accessible, source-grounded answers to natural-language questions.",
    points: [
      "Built a financial research platform combining SEC filings, company fundamentals and market data for 70 S&P 500 companies, enabling natural-language analysis of financial performance and business risks.",
      "Engineered Airflow-orchestrated ingestion pipelines, dbt transformations and PostgreSQL/pgvector retrieval, calculating 65 financial metrics per company and supporting source-grounded financial analysis.",
      "Developed a 10-step retrieval-augmented generation (RAG) workflow with LangGraph and finance-specific embeddings, connecting retrieval, AI reasoning and citations in a deployed application on Google Cloud.",
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
      "Code Sentinel is a fine-tuned AI code reviewer that generates first-pass feedback on pull requests, connecting custom language-model training with an automated GitHub review workflow.",
    points: [
      "Fine-tuned Mistral-7B-Instruct on 143K code-review examples using QLoRA and parameter-efficient training on an NVIDIA H100, adapting the model to generate actionable code-review feedback.",
      "Evaluated the fine-tuned model against GPT-4o-mini on held-out review generation, achieving a 6.1% relative improvement in BERTScore F1.",
      "Deployed model inference through FastAPI and Vertex AI, integrating GitHub Actions to automatically generate review comments on pull requests.",
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
    // Repo is public at github.com/harthikrm/mylonite (built + evaluated per its
    // README) — entry kept at IN DEVELOPMENT pending the user's go-ahead to upgrade.
    status: "IN DEVELOPMENT",
    statement:
      "Mylonite is an experimental concurrency-testing tool that uncovers bugs caused by the order in which concurrent operations reach shared state — failures that conventional tests can miss.",
    points: [
      "Developing a concurrency-testing tool for services that keep shared state in Redis or Valkey: a delay-only proxy controls the order in which store commands execute, surfacing race conditions and lost updates that unit tests and memory race detectors miss.",
      "Comparing execution behavior under controlled schedule variations, with a written per-target contract and a plain-code oracle — never the model — deciding whether an outcome is a bug.",
      "Designing reproducible experiments — every candidate bug is replayed from a recorded schedule — to evaluate bug-detection effectiveness, execution efficiency, and the trade-offs of AI-guided test selection against non-AI baselines.",
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
  { title: "F1 Race Intelligence", field: "Data Engineering", stack: "Python · DuckDB · XGBoost · Streamlit", url: "https://github.com/harthikrm/f1-race-intelligence" },
  { title: "Global Supply Chain Intelligence", field: "ML / Graph", stack: "Python · NetworkX", url: "https://github.com/harthikrm/global-supply-chain-intelligence" },
  { title: "Smart Home IoT Analytics", field: "ML / Telemetry", stack: "Python · Scikit-Learn · SQL", url: "https://github.com/harthikrm/smart-home-analytics" },
  { title: "NLP Fake News Detection", field: "Deep Learning", stack: "TensorFlow · Transformers", url: "" },
  { title: "Merchant Credit Risk", field: "ML / Fraud", stack: "SQL · Python · XGBoost · Power BI", url: "https://github.com/harthikrm/merchant-credit-risk-fraud-monitoring" },
  { title: "Recruiting & People Systems Analytics", field: "People Analytics", stack: "Power BI · SQL · Python", url: "https://github.com/harthikrm/recruiting-funnel-analytics" },
  { title: "ATS Data Integrity & SLA Monitoring", field: "Data Quality", stack: "Python · PostgreSQL · Power BI", url: "https://github.com/harthikrm/data-integrity-sla-monitoring-framework" },
  { title: "Customer Churn Analysis", field: "Analytics / Retention", stack: "SQL", url: "https://github.com/harthikrm/churn-analytics-project" },
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
        title: "Founder & AI Engineer",
        period: "",
        points: [
          "Founded and independently developed Room, a full-stack AI workspace designed to preserve project knowledge across multiple models and independent conversations.",
          "Architected parallel LLM orchestration, user-confirmed project memory and secure PostgreSQL persistence, using controlled evaluations and automated testing to validate reliability.",
          "Deployed the application to private staging, verified live multi-model interactions and source-attributed memory retrieval, and launched the public Room website for early-access interest.",
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
          "Developed SQL ETL pipelines consolidating 250K+ Jira and QA records into structured datasets for engineering analytics, sprint-risk prediction and delivery reporting.",
          "Built and deployed a TensorFlow-based sprint-risk prediction service through a Flask REST API, giving engineering managers advance visibility into potentially delayed or problematic sprints.",
          "Integrated predictive insights into engineering dashboards used by delivery teams supporting 200+ developers, enabling consistent monitoring of sprint health, defects and delivery performance.",
        ],
      },
      {
        title: "Data Engineering Intern",
        period: "FEB 2023 — MAY 2023",
        points: [
          "Developed SQL ETL pipelines processing 100K+ PostgreSQL and engineering records into reusable analytics datasets for sprint health and quality reporting.",
          "Standardized defect, delivery and sprint-performance metrics to improve reporting consistency and support data-quality validation.",
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
          "Automated KPI tracking and reporting across 20+ digital marketing campaigns using Python and SQL, consolidating campaign performance into actionable analytics.",
          "Analyzed audience segments, advertising creatives and campaign experiments to identify optimization opportunities, contributing to a reported 20% improvement in ROI and 18% increase in click-through rate.",
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
    summary: "ARC Prize 2026 paper: solver-in-the-loop curation of synthetic tasks by likelihood band — and why held-out loss is the wrong signal.",
    status: "PAPER — NOV 2026",
    url: "/papers/arc2026_let_the_solver_choose_its_data.pdf",
    linkLabel: "READ PAPER ↗",
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
