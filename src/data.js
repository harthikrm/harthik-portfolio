export const portfolioData = {
  profile: {
    name: "HARTHIK MALLICHETTY",
    title: "DATA ENGINEER & AI/ML ENGINEER",
    email: "hrmallichetty@gmail.com",
    github: "github.com/harthikrm",
    linkedin: "linkedin.com/in/harthikrm",
    location: "Dallas, TX",
    summary: "I build the data foundations and the AI systems on top of them — from SQL ETL pipelines and Airflow/dbt data platforms to fine-tuned open-source LLMs and production RAG pipelines. Every system I ship runs in production, not just notebooks.<br><br>MS Business Analytics & AI, UT Dallas (May 2026). Available for full-time roles now."
  },

  roles: [
    { id: "AN", label: "Analytics", color: "#3b82f6" },
    { id: "ML", label: "Machine Learning", color: "#10b981" },
    { id: "DE", label: "Data Engineering", color: "#8b5cf6" },
    { id: "BI", label: "BI & Visualization", color: "#ec4899" },
    { id: "HR", label: "HR & Operations", color: "#f59e0b" },
    { id: "AI", label: "AI & Automation", color: "#ef4444" }
  ],

  projects: [
    {
      id: "signal",
      title: "Signal — Financial Intelligence Platform",
      description: "Production RAG system where any investor asks a question in plain English and gets a verified, cited answer from SEC filings in seconds. No analyst required.",
      image: "signal_financial_intelligence_platform.png",
      tags: ["AI", "DE"],
      metrics: {
        "S&P 500 COVERAGE": "70 Companies",
        "RAG PIPELINE": "10-Step",
        "METRICS/COMPANY": "65"
      },
      tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "dbt", "Airflow", "LangGraph", "Voyage AI", "GPT-4o-mini", "GCP", "React", "LangSmith"],
      link: "https://signal.harthik.dev",
      github: "https://github.com/harthikrm/signal-financial-intelligence"
    },
    {
      id: "code-sentinel",
      title: "Code Sentinel",
      description: "Fine-tuned Mistral-7B on 143K real reviewer comments using QLoRA on an NVIDIA H100 — training under 1% of parameters — to automate first-pass code review. Outperforms GPT-4o-mini. Deployed on Google Vertex AI with a GitHub Action that posts AI-generated reviews on every pull request.",
      image: "code-sentinel.png",
      tags: ["ML", "AI"],
      featured: true,
      metrics: {
        "BERTScore F1": "0.7470",
        "vs GPT-4o-mini": "+6.1%",
        "TRAINING EXAMPLES": "143K"
      },
      tech: ["Python", "PyTorch", "Mistral-7B", "QLoRA", "PEFT", "FastAPI", "Vertex AI", "W&B", "GitHub Actions"],
      link: "https://github.com/harthikrm/code-sentinel"
    },
    {
      id: "job-search-auto",
      title: "Job Search Automation Pipeline",
      description: "Automated end-to-end job discovery pipeline using GPT-4o-mini for hyper-personalized resume tailoring.",
      image: "job_search_automation_pipeline.png",
      tags: ["AI", "DE"],
      metrics: {
        "JOBS": "1,400+",
        "COST/RESUME": "$0.002",
        "ATS SCORE": "90+"
      },
      tech: ["Python", "GPT-4o", "n8n", "Docker"],
      link: "#"
    },
    {
      id: "quant-risk",
      title: "Quant Risk Desk",
      description: "Automated financial risk desk providing real-time VaR, Sharpe, and Beta monitoring across cross-asset portfolios and market regimes.",
      image: "quant_risk_desk.png",
      tags: ["DE", "AN"],
      metrics: {
        "VaR CONFIDENCE": "99th %ile",
        "VIOLATIONS": "ZERO",
        "RECORDS": "21K/DAY"
      },
      tech: ["Python", "Pandas", "SQL", "Tableau"],
      github: "https://github.com/harthikrm/quant-risk-desk"
    },
    {
      id: "f1-intel",
      title: "F1 Race Intelligence",
      description: "Predictive race strategy engine using historical lap data to model pit-stop timing and degradation curves for Formula 1 teams.",
      image: "f1_race_intelligence.png",
      tags: ["DE", "AN"],
      metrics: {
        "DATASET": "200MB",
        "FILES": "459",
        "ACCURACY": "94%"
      },
      tech: ["Python", "PostgreSQL", "FastAPI", "React"],
      github: "https://github.com/harthikrm/f1-race-intelligence"
    },
    {
      id: "supply-chain",
      title: "Global Supply Chain Intelligence",
      description: "Global disruption detection system mapping trade-value-at-risk and path-length optimization across multi-tier logistics networks.",
      image: "global_supply_chain_intelligence.png",
      tags: ["ML", "AN"],
      metrics: {
        "RECORDS": "78K",
        "RECALL": "70.9%",
        "DISRUPTION DETECTION": "100%"
      },
      tech: ["Python", "NetworkX", "GraphDB"],
      github: "https://github.com/harthikrm/global-supply-chain-intelligence"
    },
    {
      id: "iot-analytics",
      title: "Smart Home IoT Analytics",
      description: "Real-time sensor telemetry platform processing 240Hz data streams for anomaly detection and energy optimization.",
      image: "smart_home_iot_analytics.png",
      tags: ["ML", "BI"],
      metrics: {
        "RECORDS": "830K",
        "CHURN LIFT": "11.95X",
        "ROC-AUC": "0.96"
      },
      tech: ["Python", "MQTT", "Grafana"],
      github: "https://github.com/harthikrm/smart-home-analytics"
    },
    {
      id: "nlp-fake-news",
      title: "NLP Fake News Detection",
      description: "Deep Learning pipeline using BERT Transformers to classify real-time political news streams with high semantic accuracy.",
      image: "nlp_fake_news_detection.png",
      tags: ["ML", "AI"],
      metrics: {
        "F1 SCORE": "0.93",
        "EPOCHS": "15",
        "PARAMS": "110M"
      },
      tech: ["TensorFlow", "Transformers", "Python"],
      link: "#"
    },
    {
      id: "merchant-risk",
      title: "Merchant Credit Risk",
      description: "Credit risk monitoring platform detecting high-risk merchant behavior and fraud patterns in real-time transaction streams.",
      image: "merchant_credit_risk.png",
      tags: ["ML", "AN"],
      metrics: {
        "TRANSACTIONS": "400K+",
        "PR-AUC": "0.44",
        "MERCHANTS": "1200"
      },
      tech: ["SQL", "Python", "Tableau"],
      github: "https://github.com/harthikrm/merchant-credit-risk-fraud-monitoring"
    },
    {
      id: "recruiting-analytics",
      title: "Recruiting & People Systems Analytics",
      description: "People analytics dashboard for optimizing the recruiting funnel, offer acceptance rates, and candidate experience metrics.",
      image: "recruiting_people_systems_analytics.png",
      tags: ["HR", "BI"],
      metrics: {
        "MID-FUNNEL DROP-OFF": "79.3%",
        "TIME-TO-HIRE": "49.5d",
        "OFFER ACCEPTANCE": "75%"
      },
      tech: ["Power BI", "SQL", "Python"],
      github: "https://github.com/harthikrm/recruiting-funnel-analytics"
    },
    {
      id: "ats-integrity",
      title: "ATS Data Integrity & SLA Monitoring",
      description: "Enterprise-grade SLA monitoring framework for Applicant Tracking Systems, ensuring 100% relational integrity and stage-time compliance.",
      image: "ats_data_integrity_sla_monitoring.png",
      tags: ["HR", "DE"],
      metrics: {
        "INTEGRITY": "100.0%",
        "ANOMALY RATE DETECTED": "3%",
        "STAGE EVENTS": "30K+"
      },
      tech: ["Python", "PostgreSQL", "Power BI"],
      github: "https://github.com/harthikrm/data-integrity-sla-monitoring-framework"
    },
    {
      id: "customer-churn",
      title: "Customer Churn Analysis",
      description: "Predictive retention system using ensemble models to identify high-risk accounts and trigger proactive intervention strategies.",
      image: "customer_churn_analysis.png",
      tags: ["ML", "AN"],
      metrics: {
        "ACCURACY": "90%",
        "HIGH-RISK COHORTS": "65%",
        "MODEL": "XGBoost"
      },
      tech: ["Python", "Scikit-Learn", "Matplotlib"],
      github: "https://github.com/harthikrm/churn-analytics-project"
    },
    {
      id: "retail-forecast",
      title: "Retail Sales Forecasting",
      description: "Multi-store sales forecasting system using seasonal decomposition and MASE-optimized regression models.",
      image: "retail_sales_forecasting.png",
      tags: ["AN", "BI"],
      metrics: {
        "ACCURACY LIFT": "+18%",
        "SEASONAL PATTERNS": "3",
        "PRICING SEGMENTS": "2"
      },
      tech: ["Python", "Scikit-Learn", "Statsmodels"],
      link: "#"
    }
  ],

  resumes: [
    { title: "Data Engineer", file: "HarthikMallichetty_DataEngineer.pdf" },
    { title: "AI Engineer", file: "HarthikMallichetty_AIEngineer.pdf" },
    { title: "Data Analyst", file: "HarthikMallichetty_DataAnalyst.pdf" },
    { title: "Quant Research Analyst", file: "HarthikMallichetty_QuantAnalyst.pdf" },
    { title: "Analytics Engineer", file: "HarthikMallichetty_AnalyticsEngineer.pdf" },
    { title: "People Analytics", file: "HarthikMallichetty_PeopleAnalytics.pdf" }
  ],

  experience: [
    {
      company: "Prolifics",
      location: "Hyderabad, India",
      period: "Feb 2023 — Jul 2024",
      roles: [
        {
          title: "Associate Data Engineer",
          period: "Jun 2023 — Jul 2024",
          highlights: [
            "Designed and deployed a TensorFlow-based sprint risk prediction service as a Flask REST API, giving 15+ engineering managers 1–2 weeks' advance visibility into at-risk sprints.",
            "Unified 250K+ JIRA and QA execution records through scalable SQL ETL pipelines, creating the trusted dataset that powered both predictive modeling and engineering analytics.",
            "Drove adoption across 200+ developers by integrating predictions into engineering dashboards, backed by documentation and onboarding across delivery teams."
          ]
        },
        {
          title: "Data Engineer Intern",
          period: "Feb 2023 — May 2023",
          highlights: [
            "Engineered SQL ETL pipelines that consolidated 100K+ JIRA and PostgreSQL engineering records into reusable analytics datasets, establishing the data foundation for delivery analytics.",
            "Standardized engineering KPIs for sprint health, defect trends, and delivery performance, creating a shared reporting framework across QA and delivery teams.",
            "Validated engineering datasets by identifying data quality issues across QA and project systems, improving the reliability of downstream analytics and reporting."
          ]
        }
      ]
    },
    {
      company: "HeiDigi",
      location: "Hyderabad, India",
      period: "Mar 2022 — Aug 2022",
      roles: [
        {
          title: "Data Analyst Intern",
          period: "Mar 2022 — Aug 2022",
          highlights: [
            "Built campaign measurement across 20+ marketing campaigns, defining KPIs and automating recurring client reporting through reusable Python and SQL data pipelines.",
            "Ran experimentation workflows and statistical analyses that identified high-performing audiences and creatives, driving 20% higher ROI and 18% higher CTR."
          ]
        }
      ]
    }
  ],

  education: [
    {
      school: "University of Texas at Dallas",
      location: "Richardson, TX",
      degree: "MS, Business Analytics & Artificial Intelligence",
      distinction: "Scholar With Distinction",
      gpa: "3.8 / 4.0",
      date: "May 2026"
    },
    {
      school: "GITAM University",
      location: "Hyderabad, India",
      degree: "BTech, Computer Science & Business Systems",
      distinction: "",
      gpa: "3.7 / 4.0",
      date: "Apr 2024"
    }
  ],

  skills: [
    { label: "Languages & Databases", items: ["Python", "SQL", "R", "JavaScript", "TypeScript", "PostgreSQL", "MySQL", "pgvector", "DuckDB"] },
    { label: "Data Engineering & Analytics", items: ["ETL", "Data Modeling", "Airflow", "dbt", "Pandas", "Power BI", "Tableau", "A/B Testing"] },
    { label: "Cloud & Backend", items: ["GCP", "Cloud Run", "Vertex AI", "Cloud SQL", "Docker", "FastAPI", "Flask", "Git", "GitHub Actions"] },
    { label: "Machine Learning & AI", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "LangGraph", "OpenAI"] }
  ]
};
