export const BOOT_SEQUENCE = [
  { msg: "BIOS CHECK...", status: "OK", delay: 200 },
  { msg: "Loading Kernel v5.14.0...", status: "OK", delay: 400 },
  { msg: "Mounting File Systems...", status: "MOUNTED", delay: 600 },
  { msg: "Scanning for new modules...", status: "COMPLETE", delay: 800 },
  { msg: "Starting User Session...", status: "READY", delay: 1000 },
];

export const RESUME_DATA = {
  about: {
    name: "Krishna Kumar Singh",
    role: "Software Engineer (Full Stack & AI/ML)",
    location: "Hyderabad, India",
    summary: "3+ years exp. Specializing in Java, Spring Boot, Kafka, and Generative AI Agents. Focus on scalable microservices & intelligent automation.",
    education: "B.Tech in CS @ IEST (NIT), Shibpur (CGPA: 8.64)",
    mission: "To engineer autonomous, fault-tolerant software systems that scale effortlessly."
  },
  system_config: {
    "IDE": "IntelliJ IDEA Ultimate / VS Code",
    "THEME": "Dracula (High Contrast)",
    "OS": "MacOS / Linux (Ubuntu)",
    "TERMINAL": "Zsh + Oh My Zsh",
    "COFFEE_DEPENDENCY": "true",
    "SLEEP_MODE": "Optimized",
    "DEBUGGING_STRATEGY": "Rubber Duck + Systematic Isolation"
  },
  experience: [
    {
      company: "Wells Fargo",
      role: "Software Engineer",
      period: "July 2022 - Present",
      location: "Hyderabad, India",
      stack: ["Java", "Spring Boot", "Kafka", "React", "GenAI"],
      logs: [
        "Analyzed real-time bond pricing pipeline (20k records/sec). Optimized via batching (30% efficiency gain).",
        "Deployed 'Jira Genie' AI Agent: Natural language -> Jira Stories. Reduced sprint planning effort by 50%.",
        "Built QMetry regression insights dashboard (React + GenAI). Cut debugging time by 80%.",
        "Modernized legacy .NET batch jobs to Java 17 Microservices.",
        "Refactored monolithic authentication module into stateless JWT microservices.",
        "Implemented distributed tracing (Zipkin/Sleuth) to resolve latency bottlenecks in production."
      ]
    },
    {
      company: "Satisfic Systems",
      role: "Software Developer Intern",
      period: "Sept 2020 - March 2021",
      location: "Remote",
      stack: ["NestJS", "PostgreSQL", "Docker", "Angular"],
      logs: [
        "Architected backend modules using NestJS & Postgres.",
        "Implemented bulk import feature, reducing lead onboarding time by 60%.",
        "Designed RESTful API standards (Swagger/OpenAPI) adopted by the frontend team.",
        "Automated deployment workflows using GitHub Actions and Docker Compose."
      ]
    }
  ],
  projects: [
    {
      id: "proj_01",
      name: "IntelliTest GenAI Agent",
      stack: "Python, OpenAI, LangChain, Playwright",
      desc: "Agent that analyzes DOM to auto-generate Gherkin scenarios. Cuts test design time by 50%. Features self-healing selectors.",
      link: "#"
    },
    {
      id: "proj_02",
      name: "Customer Echo Insights",
      stack: "Python, LLM, React, DevRev SDK",
      award: "Winner DevRev Forge Hackathon 2024",
      desc: "Classifies app reviews & auto-creates CRM issues. Reduced triage time by 80%. Uses RAG for context-aware responses.",
      link: "#"
    },
    {
      id: "proj_03",
      name: "Distributed Cache Visualizer (Placeholder)",
      stack: "Go, React, WebSockets, Redis",
      desc: "Real-time visualization of cache hits/misses in a distributed system. Helps debug cache stampede issues.",
      link: "#"
    },
    {
      id: "proj_04",
      name: "Neural Trade Bot (Placeholder)",
      stack: "Python, TensorFlow, Binance API",
      desc: "Algorithmic trading bot using LSTM networks to predict short-term price movements. Backtested with 15% ROI.",
      link: "#"
    }
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "C++", "SQL"],
    backend: ["Spring Boot", "NestJS", "Microservices", "Hibernate", "Node.js"],
    infrastructure: ["Kafka", "Docker", "Kubernetes", "AWS", "OpenShift", "Terraform"],
    ai_tech: ["LLMs", "LangChain", "LangGraph", "MCP", "Agents", "RAG", "Vector DBs"],
    tools: ["Git", "Jira", "Splunk", "Elastic APM", "Postman", "Linux"]
  },
  patches: [
    { id: "KB-202401", name: "Spotlight Award (Wells Fargo)", status: "INSTALLED", date: "2024" },
    { id: "KB-202402", name: "DevRev Forge Hackathon Winner", status: "INSTALLED", date: "2024" },
    { id: "KB-202201", name: "JEE Mains Top 1% Rank", status: "VERIFIED", date: "2018" },
    { id: "KB-2023XX", name: "AWS Certified Developer (Placeholder)", status: "PENDING", date: "2025" }
  ]
};