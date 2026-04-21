export const portfolioData = {
  profile: {
    name: "HARTHIK ROYAL MALLICHETTY",
    title: "DATA INTELLIGENCE ENGINEER",
    email: "harthikmallichetty@gmail.com",
    github: "github.com/harthikrm",
    linkedin: "linkedin.com/in/harthikrm",
    location: "Dallas, TX",
    summary: "I build data systems that turn ambiguous problems into decisions. From ML pipelines to financial risk models to LLM-powered workflows, every system I ship is designed to work in production, not just in notebooks.<br><br>Graduating May 2026. Ready to own problems from day one."
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
    { title: "Data Analyst", slug: "data_analyst" },
    { title: "Data Scientist", slug: "data_scientist" },
    { title: "Data Engineer", slug: "data_engineer" },
    { title: "BI Analyst", slug: "bi_analyst" },
    { title: "People Analytics", slug: "people_analytics" },
    { title: "Quant Analyst", slug: "quant_analyst" }
  ],

  experience: [
    {
      company: "Prolifics",
      role: "Graduate Intern - Data Engineering",
      period: "May 2024 - Aug 2024",
      highlights: ["Built dbt-driven analytical dashboards", "Automated SQL transformation pipelines", "Improved data quality by 30%"]
    }
  ]
};
