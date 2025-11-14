export const content = {
  hero: {
    label: "SOFTWARE ENGINEER",
    name: "Azad Patel",
    tagline: "I build clean, scalable systems - and ship fast.",
    intro:
      "Full-stack engineer specializing in React, Spring Boot, and cloud-native architecture. I turn complex problems into elegant solutions that scale.",
    resume: "Azad_Patel_resume.pdf",
    email: "azadpatelc@gmail.com",
    github: "https://github.com/zero-matter",
    linkedin: "https://linkedin.com/in/azadpatel5045",
  },

  about: {
    headline: "Building Full-Stack Systems That Scale",
    paragraphs: [
      "I'm a software engineer based in Dover, Delaware, with 3+ years of experience building production systems that handle millions of requests daily. I work across the full stack - from React interfaces to Spring Boot microservices to AWS infrastructure - and I love the challenge of making complex systems simple and reliable.",
      "Currently, I'm building the mobile app for Laundry Mobile, handling everything from React Native frontend to Stripe payment integration to backend APIs. Previously, I architected high-traffic betting platforms and optimized systems that reduced latency by 35% during peak loads.",
      "When I'm not coding, I'm exploring machine learning applications, or diving deep into system design patterns. I recently completed my Master's in Computer Science at CSULB, where I built NLP pipelines for text classification research.",
    ],
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "10+", label: "Projects Shipped" },
      { value: "3", label: "Countries Worked" },
    ],
    profileImage: "/profile.jpg",
  },

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Laundry Mobile",
      location: "Dover, DE",
      dates: "Jun 2025 - Present",
      type: "Full-time",
      bullets: [
        "Architected and developed a comprehensive React Native mobile application for on-demand laundry services, implementing 30+ RESTful APIs and 15+ interactive screens while managing the complete SDLC",
        "Engineered complex Stripe payment integration supporting 4 distinct payment models, processing 100+ weekly transactions through robust webhook handlers and real-time status synchronization",
      ],
      techStack: [
        "React Native",
        "TypeScript",
        "Node.js",
        "Stripe API",
        "JWT",
        "Google Places API",
        "REST",
        "PostgreSQL",
      ],
      details:
        "Built comprehensive mobile application for on-demand laundry services with complex payment integrations. Managed complete product lifecycle from architecture design through production deployment.",
    },
    {
      id: 2,
      title: "Research Assistant",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      dates: "Aug 2024 - May 2025",
      type: "Part-time",
      bullets: [
        "Developed an advanced NLP text classification system utilizing Python, scikit-learn, and NLTK, implementing TF-IDF vectorization with Naive Bayes classifier to categorize unstructured research documents with 92% accuracy",
        "Automated data preprocessing pipeline integrating tokenization, lemmatization, and stopword removal, streamlining the model training workflow and eliminating manual data preparation steps",
      ],
      techStack: [
        "Python",
        "scikit-learn",
        "NLTK",
        "Pandas",
        "NumPy",
        "Git",
        "Jupyter",
      ],
      details:
        "Developed NLP pipeline for text classification of research documents. Focused on automating preprocessing workflows and achieving high accuracy through optimized feature extraction.",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "56N Software Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      dates: "Jan 2023 - Jul 2023",
      type: "Full-time",
      bullets: [
        "Developed responsive web applications using TypeScript, ReactJS, and TailwindCSS, ensuring cross-browser compatibility and seamless mobile responsiveness across diverse device configurations",
        "Optimized database performance through MongoDB indexing strategies and query refinement, reducing API response times by 30% and supporting increased concurrent user loads",
        "Implemented secure authentication system using OAuth2 and JWT tokens with session management, ensuring robust security while handling thousands of daily active users",
      ],
      techStack: [
        "TypeScript",
        "React",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "Redis",
        "OAuth2",
        "JWT",
        "Jenkins",
        "Docker",
      ],
      details:
        "Focused on frontend development and database optimization for web applications. Implemented secure authentication flows and improved system performance through strategic caching and indexing.",
    },
    {
      id: 4,
      title: "Full Stack Software Engineer",
      company: "Rhythm Infosys",
      location: "Ahmedabad, Gujarat, India",
      dates: "Aug 2020 - Dec 2022",
      type: "Full-time",
      bullets: [
        "Designed and deployed scalable microservices architecture using Java, Spring Boot, and Node.js, handling millions of API requests daily across distributed systems",
        "Enhanced application performance by implementing Redis caching layer and PostgreSQL query optimization, achieving 35% latency reduction during peak traffic periods",
        "Established CI/CD pipelines using Jenkins, Docker, and Kubernetes on AWS EC2/S3, automating deployment processes and enabling continuous integration with zero-downtime deployments",
        "Configured real-time monitoring infrastructure with Prometheus and Grafana dashboards, enabling proactive incident detection and faster incident resolution",
        "Collaborated with cross-functional teams including QA, Product, and UX to deliver major features on schedule while maintaining high code quality standards",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "React",
        "Next.js",
        "Redux",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Jenkins",
        "Prometheus",
        "Grafana",
      ],
      details:
        "Architected microservices for high-traffic platform with focus on scalability and performance. Led DevOps initiatives including CI/CD implementation and monitoring infrastructure setup.",
    },
  ],

  // experience: [
  //   {
  //     id: 1,
  //     title: "Software Engineer",
  //     company: "Laundry Mobile",
  //     location: "Dover, DE",
  //     dates: "Jun 2025 - Present",
  //     type: "Full-time",
  //     bullets: [
  //       "Built full-stack React Native mobile app for on-demand laundry services, managing the complete product lifecycle from architecture to deployment with 50+ active users in beta",
  //       "Integrated Stripe Payment Sheet supporting multiple payment models (one-time, subscriptions, weight-based pricing) with real-time webhook processing—handling $10K+ in monthly transactions",
  //       "Designed dynamic subscription pricing system with state management logic that automatically calculates costs based on user tier and laundry weight, reducing manual price adjustments by 100%",
  //     ],
  //     techStack: [
  //       "React Native",
  //       "TypeScript",
  //       "Node.js",
  //       "Stripe API",
  //       "JWT",
  //       "Google Places API",
  //       "REST",
  //       "PostgreSQL",
  //     ],
  //     details:
  //       "Built RESTful APIs with JWT authentication, ensuring PCI compliance by keeping sensitive Stripe operations server-side. Proxied Google Places API through backend to protect API keys while maintaining smooth address autocomplete UX. Conducted competitive analysis of 8 local Delaware laundry services to optimize pricing strategy and feature prioritization.",
  //   },
  //   {
  //     id: 2,
  //     title: "Graduate Research Assistant",
  //     company: "California State University, Long Beach",
  //     location: "Long Beach, CA",
  //     dates: "Aug 2024 - May 2025",
  //     type: "Part-time",
  //     bullets: [
  //       "Built NLP text classification pipeline using Python, scikit-learn, and NLTK with TF-IDF vectorization and Naive Bayes classifier, achieving 87% accuracy on 5,000+ research documents",
  //       "Automated preprocessing workflows by integrating tokenization and stopword removal directly into the pipeline, reducing manual data prep time by 70%",
  //       "Maintained reproducible experiments using Git version control and Jupyter notebooks, enabling seamless collaboration across 3 research team members",
  //     ],
  //     techStack: [
  //       "Python",
  //       "scikit-learn",
  //       "NLTK",
  //       "Pandas",
  //       "NumPy",
  //       "Git",
  //       "Jupyter",
  //     ],
  //     details:
  //       "Experimented with multiple classification algorithms (Naive Bayes, SVM, Random Forest) and vectorization techniques. Documented model performance metrics and hyperparameter tuning in comprehensive research notes. Presented findings to faculty advisors and incorporated feedback for model improvements.",
  //   },
  //   {
  //     id: 3,
  //     title: "Software Engineer",
  //     company: "56N Software Pvt. Ltd.",
  //     location: "Ahmedabad, Gujarat, India",
  //     dates: "Jan 2023 - Jul 2023",
  //     type: "Full-time",
  //     bullets: [
  //       "Developed responsive web applications using TypeScript, React, and TailwindCSS, creating reusable component libraries that reduced development time by 40% across 5 product features",
  //       "Optimized RESTful API performance through Redis caching and MongoDB indexing, improving response times by 30% and reducing database load during peak traffic",
  //       "Implemented OAuth2 and JWT authentication flows with comprehensive unit and integration tests, securing user data for 10,000+ active accounts",
  //     ],
  //     techStack: [
  //       "TypeScript",
  //       "React",
  //       "TailwindCSS",
  //       "Node.js",
  //       "MongoDB",
  //       "Redis",
  //       "OAuth2",
  //       "JWT",
  //       "Jenkins",
  //       "Docker",
  //     ],
  //     details:
  //       "Collaborated with backend teams to design efficient API contracts and data models. Participated in code reviews and mentored junior developers on React best practices. Managed CI/CD pipelines with Jenkins, improving deployment reliability by automating test execution.",
  //   },
  //   {
  //     id: 4,
  //     title: "Full Stack Software Engineer",
  //     company: "Rhythm Infosys",
  //     location: "Ahmedabad, Gujarat, India",
  //     dates: "Aug 2020 - Dec 2022",
  //     type: "Full-time",
  //     bullets: [
  //       "Architected microservices using Java Spring Boot for high-traffic betting platform handling 5M+ daily API requests, implementing RESTful communication patterns with 99.9% uptime",
  //       "Reduced system latency by 35% during peak loads by introducing Redis caching layer and optimizing database queries, improving user experience for 100K+ concurrent users",
  //       "Built CI/CD pipelines with Jenkins, Docker, and AWS (EC2/S3), cutting deployment time by 25% and achieving zero-downtime releases across 15+ production deployments",
  //     ],
  //     techStack: [
  //       "Java",
  //       "Spring Boot",
  //       "React",
  //       "Next.js",
  //       "Redux",
  //       "PostgreSQL",
  //       "Redis",
  //       "AWS",
  //       "Docker",
  //       "Jenkins",
  //       "Prometheus",
  //       "Grafana",
  //     ],
  //     details:
  //       "Integrated AWS Cognito for secure user authentication with JWT token management. Set up monitoring dashboards using Prometheus and Grafana for real-time system health tracking. Collaborated with distributed teams across India and US, adapting communication for async collaboration. Led knowledge-sharing sessions on microservices architecture and container orchestration.",
  //   },
  // ],

  skills: {
    languages: [
      { name: "Java", level: 95, years: 3, description: "Spring Boot ecosystem" },
      {
        name: "JavaScript/TS",
        level: 95,
        years: 3,
        description: "React/Node/ES6+",
      },
      {
        name: "Python",
        level: 85,
        years: 2,
        description: "ML/Data Science",
      },
      {
        name: "SQL",
        level: 80,
        years: 3,
        description: "PostgreSQL/MongoDB",
      },
      { name: "C/C++", level: 60, years: 2, description: "Academic projects" },
    ],
    frontend: [
      { name: "React", level: 95, years: 3, description: "Production apps" },
      {
        name: "Redux",
        level: 85,
        years: 3,
        description: "State management",
      },
      {
        name: "Next.js",
        level: 80,
        years: 2,
        description: "SSR/SSG applications",
      },
      {
        name: "React Native",
        level: 75,
        years: 1,
        description: "Current mobile project",
      },
      {
        name: "TailwindCSS",
        level: 90,
        years: 2,
        description: "Rapid UI development",
      },
      {
        name: "Material-UI",
        level: 85,
        years: 3,
        description: "Component libraries",
      },
    ],
    backend: [
      {
        name: "Spring Boot",
        level: 95,
        years: 3,
        description: "Microservices architecture",
      },
      {
        name: "Node.js",
        level: 85,
        years: 3,
        description: "REST APIs, Express",
      },
      {
        name: "AWS",
        level: 80,
        years: 3,
        description: "EC2, S3, Cognito, Lambda",
      },
      {
        name: "Docker",
        level: 85,
        years: 3,
        description: "Containerization",
      },
      {
        name: "PostgreSQL",
        level: 85,
        years: 3,
        description: "Relational databases",
      },
      {
        name: "MongoDB",
        level: 80,
        years: 3,
        description: "NoSQL, indexing",
      },
      {
        name: "Redis",
        level: 75,
        years: 2,
        description: "Caching strategies",
      },
    ],
    devops: [
      {
        name: "Git",
        level: 95,
        years: 3,
        description: "Version control, branching",
      },
      {
        name: "Jenkins",
        level: 85,
        years: 3,
        description: "CI/CD pipelines",
      },
      {
        name: "Kubernetes",
        level: 65,
        years: 1,
        description: "Container orchestration",
      },
      {
        name: "Terraform",
        level: 55,
        years: 1,
        description: "Infrastructure as Code",
      },
      {
        name: "Prometheus",
        level: 75,
        years: 2,
        description: "Monitoring, metrics",
      },
    ],
    specialized: [
      {
        name: "OAuth2/JWT",
        level: 90,
        years: 3,
        description: "Authentication flows",
      },
      {
        name: "REST APIs",
        level: 95,
        years: 3,
        description: "Design, documentation",
      },
      {
        name: "Microservices",
        level: 85,
        years: 3,
        description: "Architecture patterns",
      },
      {
        name: "ML/NLP",
        level: 70,
        years: 1,
        description: "Scikit-learn, PyTorch",
      },
    ],
  },

  projects: [
    {
      id: 1,
      name: "Laundry Mobile App",
      tagline: "Full-stack mobile app revolutionizing local laundry services",
      description:
        "On-demand laundry service platform with dynamic pricing and payment processing",
      problem:
        "Local laundry businesses lacked digital presence, losing customers to competitors with online booking systems",
      approach:
        "Built React Native app with Stripe integration supporting one-time orders, subscriptions, and dynamic weight-based pricing",
      result:
        "Onboarded 50+ beta users, processed $10K+ in monthly transactions with 95% customer satisfaction rate",
      techStack: [
        "React Native",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "JWT",
        "Google Places API",
      ],
      image: "/projects/laundry-mobile.jpeg",
      demoLink: null,
      githubLink: null,
      isPrivate: true,
    },
    {
      id: 2,
      name: "Talkative",
      tagline: "High-performance chat platform with event-driven architecture",
      description:
        "Scalable real-time messaging system supporting thousands of concurrent users",
      problem:
        "Needed low-latency communication platform supporting thousands of concurrent users with message persistence",
      approach:
        "Engineered WebSocket-based real-time messaging with Spring Boot microservices using gRPC for inter-service communication",
      result:
        "Achieved <50ms message latency with 99.9% uptime, supporting 1,000+ concurrent connections in testing",
      techStack: [
        "Java",
        "Spring Boot",
        "WebSocket",
        "gRPC",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      image: "/projects/talkative.jpeg",
      demoLink: null,
      githubLink: "https://github.com/zero-matter/talkative",
      isPrivate: false,
    },
    {
      id: 3,
      name: "Advanced Image Classification CNNs",
      tagline: "State-of-the-art CNN models for complex image recognition",
      description:
        "Deep learning research project comparing CNN architectures on large-scale datasets",
      problem:
        "Explored performance differences between CNN architectures on CIFAR-100 and ImageNet datasets with 100+ classes",
      approach:
        "Implemented ResNet and EfficientNet using PyTorch, applying transfer learning, data augmentation, and hyperparameter tuning",
      result:
        "Achieved 85% accuracy on CIFAR-100 (20% improvement over baseline), documented findings with MLFlow experiment tracking",
      techStack: [
        "Python",
        "PyTorch",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "MLFlow",
        "Jupyter",
      ],
      image: "/projects/cnn-classification.jpeg",
      demoLink: null,
      githubLink: "https://github.com/zero-matter/cnn-image-classification",
      isPrivate: false,
    },
    {
      id: 4,
      name: "Automated Job Application Pipeline",
      tagline: "3-agent workflow automating job search and applications",
      description:
        "AI-powered system reducing job application time by 90% with intelligent automation",
      problem:
        "Manual job applications consume 10+ hours weekly with repetitive tasks like resume tailoring and form filling",
      approach:
        "Built multi-agent system using Python: (1) Scrapes job boards, (2) Uses LLM to tailor resumes, (3) Auto-fills applications via Selenium",
      result:
        "Reduced application time from 30 minutes to 3 minutes per job (90% reduction), processed 100+ applications in testing",
      techStack: [
        "Python",
        "LangChain",
        "Selenium",
        "BeautifulSoup",
        "OpenAI API",
        "PostgreSQL",
      ],
      image: "/projects/job-automation.jpeg",
      demoLink: null,
      githubLink: null,
      isPrivate: true,
    },
    {
      id: 5,
      name: "Interactive Developer Portfolio",
      tagline: "Next-generation portfolio with cursor-tracking animated robot",
      description:
        "Modern portfolio showcasing technical creativity and interactive design",
      problem:
        "Traditional portfolios fail to showcase technical creativity and interactive design skills",
      approach:
        "Built with Next.js 14, Framer Motion, and animated SVG; implemented custom cursor-tracking algorithm with smooth animations",
      result:
        "Lighthouse score 95+, fully accessible, demonstrates proficiency in modern web technologies and interactive design",
      techStack: [
        "Next.js 14",
        "React 18",
        "TailwindCSS",
        "Framer Motion",
        "TypeScript",
      ],
      image: "/projects/portfolio.jpeg",
      demoLink: "https://azadpatel.in",
      githubLink: "https://github.com/zero-matter/portfolio",
      isPrivate: false,
    },
    {
      id: 6,
      name: "Highpoint Construction Website",
      tagline: "Modern web presence for construction business operations",
      description:
        "Professional website with project showcases and client management features",
      problem:
        "Client needed professional website for project showcases, client leads, and operational efficiency",
      approach:
        "Developed responsive site with Next.js, integrated contact forms, project galleries, and admin CMS for content updates",
      result:
        "Increased client inquiries by 40% in first quarter, reduced project onboarding time with digital documentation",
      techStack: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Sanity CMS",
        "Nodemailer",
      ],
      image: "/projects/highpoint.jpeg",
      demoLink: null,
      githubLink: null,
      isPrivate: true,
    },
  ],

  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "California State University, Long Beach",
      location: "Long Beach, CA",
      dates: "Aug 2023 - May 2025",
      highlights: [
        "Graduate Research Assistant - NLP Lab",
        "Focus: Machine Learning, NLP, Distributed Systems",
        "Relevant Coursework: Advanced ML, Distributed Systems, Algorithm Design",
      ],
      logo: "/education/csulb.png",
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Gujarat Technological University",
      location: "Ahmedabad, Gujarat, India",
      dates: "Jul 2016 - Aug 2020",
      highlights: [
        "Foundation in Software Engineering",
        "Data Structures, Algorithms, Systems Programming",
        "Final Project: Web-based College Management System",
      ],
      logo: "/education/gtu.png",
    },
  ],

  contact: {
    headline: "Let's Work Together",
    description:
      "Whether you need a full-stack engineer for your team or a technical partner for your project, I'm always open to discussing new opportunities.",
    email: "azadpatelc@gmail.com",
    location: "Dover, Delaware, USA",
    locationNote: "(Open to remote opportunities)",
    timezone: "EST (UTC-5)",
    responseTime: "Usually within 24 hours",
    github: "https://github.com/zero-matter",
    linkedin: "https://linkedin.com/in/azadpatel5045",
  },

  footer: {
    copyright: "© 2025 Azad Patel. All rights reserved.",
    builtWith: "Built with Next.js, React, TailwindCSS, and Framer Motion",
    location: "Dover, Delaware",
    availability: "Available for opportunities",
  },
};

export type Experience = (typeof content.experience)[0];
export type Project = (typeof content.projects)[0];
export type Education = (typeof content.education)[0];
export type Skill = (typeof content.skills.languages)[0];
