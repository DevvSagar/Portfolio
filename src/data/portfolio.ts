import { Project, ServiceItem, ExperienceItem, SocialLink } from '@/types';

export const portfolioData = {
  profile: {
    firstNameOutline: "DEV",
    lastNameSolid: "VX",
    handle: "devvx",
    domain: "devvx.in",
    role: "Advanced AI & Backend Engineer",
    secondaryRole: "Python, FastAPI & Full-Stack Developer",
    tagline: "Building high-performance AI intelligence pipelines, clean REST APIs, secure authentication systems, and cloud architectures with Python, FastAPI, PostgreSQL & Docker.",
    statusBadgeText: "Available for New Project",
    yearsOfExperience: "6+ Months",
    projectsCount: 4,
    servicesCount: 5,
    location: "Kota, Rajasthan, India / Remote",
    avatar: "/images/devvx-photo.png",
    avatarHeadshot: "/images/devvx-headshot.png",
    bio: "Sagar Pratap Singh (Devvx) is an Advanced AI & Backend Engineer specializing in building production-ready AI pipelines, scalable FastAPI microservices, and robust cloud-backed web applications.",
  },

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/DevvSagar",
      icon: "Github",
      ariaLabel: "Visit GitHub profile",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/devvsag",
      icon: "Linkedin",
      ariaLabel: "Connect on LinkedIn",
    },
    {
      name: "Discord",
      href: "https://discord.com/users/devvx.",
      icon: "Discord",
      ariaLabel: "Connect with Sagar (@devvx.) on Discord",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/devvxsagar",
      icon: "Twitter",
      ariaLabel: "Follow on X (Twitter)",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sagarssinghh?igsi=MTdjbmQ5Z3dtMnBweA==",
      icon: "Instagram",
      ariaLabel: "Follow on Instagram",
    },
    {
      name: "Resume",
      href: "#contact",
      icon: "FileText",
      ariaLabel: "View developer resume",
    },
  ] as SocialLink[],

  projects: [
    {
      id: "devlog",
      title: "DevLog - High-Performance Developer Blogging & Publishing Platform",
      category: "microservices",
      type: "Real Project",
      status: "In Progress",
      subtitle: "Modern blogging platform engineered with FastAPI, PostgreSQL, AWS S3, Jinja2, and Nginx",
      description: "Full-stack developer blogging platform built with FastAPI, PostgreSQL, Jinja2 server-side rendering, AWS S3 object storage via Boto3, Nginx reverse proxy, and Docker containerization.",
      fullDescription: "DevLog is a high-performance developer blogging and technical publishing platform currently under active development. Engineered with FastAPI for asynchronous performance, PostgreSQL for relational article storage, AWS S3 via Boto3 for media assets, Jinja2 templates, Nginx reverse proxy, and secure JWT authentication.",
      architectureHighlights: [
        "FastAPI asynchronous backend with Jinja2 server-side rendering for optimal SEO and rapid page loads.",
        "AWS S3 cloud asset pipeline leveraging Boto3 for media uploads and image delivery.",
        "Relational article, tags, and comments schema backed by PostgreSQL and SQLAlchemy ORM.",
        "Nginx reverse proxy configuration with SSL termination, caching, and Docker containerization.",
        "JWT-based authentication with role permissions, secure password hashing, and session management."
      ],
      metrics: [
        { label: "Backend", value: "FastAPI" },
        { label: "Cloud Storage", value: "AWS S3 / Boto3" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Web Server", value: "Nginx + Docker" }
      ],
      tags: ["FastAPI", "PostgreSQL", "AWS S3 / Boto3", "Jinja2", "Nginx / Docker"],
      image: "/images/projects/devlog.svg",
      githubUrl: "https://github.com/DevvSagar",
      featured: true,
    },
    {
      id: "scribo",
      title: "Scribo - AI Meeting Summarization & Intelligence Platform",
      category: "data-pipelines",
      type: "Real Project",
      status: "Completed",
      subtitle: "Turn uploaded audio or video into transcripts, summaries, highlights, and action items",
      description: "Full-stack AI meeting summarization app powered by AssemblyAI, Express, MongoDB, and React with secure httpOnly cookie authentication and per-user chat history.",
      fullDescription: "Scribo is an AI meeting summarization app that turns uploaded audio or video into transcripts, summaries, highlights, and action items. Features a full-stack authentication flow, per-user chat history, dedicated results view, and robust backend security protections.",
      architectureHighlights: [
        "Frontend built with React, Vite, Tailwind CSS, and Framer Motion with dedicated workspace and formatted results view.",
        "Express backend with MongoDB, Mongoose, and Multer handling multi-format media uploads (MP3, WAV, M4A, MP4) up to 250MB.",
        "AI speech-to-text transcription and structured meeting summarization powered by AssemblyAI with SSRF protection.",
        "Security hardening with Helmet, CORS credential whitelisting, rate limiting, and JWT stored in secure httpOnly cookies.",
        "User-specific chat history persistence in MongoDB allowing interactive conversation with meeting transcripts."
      ],
      metrics: [
        { label: "Audio Uploads", value: "Up to 250MB" },
        { label: "AI Engine", value: "AssemblyAI" },
        { label: "Auth & Storage", value: "JWT + Mongo" },
        { label: "Deployment", value: "Vercel + Render" }
      ],
      tags: ["React / Vite", "Node / Express", "MongoDB", "AssemblyAI"],
      image: "/images/projects/scribo.svg",
      githubUrl: "https://github.com/DevvSagar/scribo",
      liveUrl: "https://scribo-five.vercel.app/",
      featured: true,
    },
    {
      id: "dsa-solutions",
      title: "DSA Solutions - Data Structures & Algorithms Problem Repository",
      category: "distributed-systems",
      type: "Exploration",
      status: "In Progress",
      subtitle: "Daily commitment solving Data Structures & Algorithms with manual logic & complexity breakdown",
      description: "Curated open-source repository of Data Structures & Algorithms solutions solved manually with step-by-step logic, complexity analysis, and daily progress tracking.",
      fullDescription: "DSA Solutions is a dedicated repository committed to solving Data Structures & Algorithms problems consistently. Every solution is written manually to strengthen algorithmic thinking, time/space complexity analysis (Big-O), and software engineering interview problem-solving readiness.",
      architectureHighlights: [
        "Handcrafted solutions covering Arrays, Strings, Binary Trees, Graphs, Dynamic Programming, and Recursion.",
        "Daily progress workflow documenting time and space complexity optimizations.",
        "Clean code patterns with step-by-step logic walkthroughs and edge-case handling.",
        "LeetCode and algorithmic pattern classifications for high-scale backend engineering."
      ],
      metrics: [
        { label: "Commit Cadence", value: "Daily Progress" },
        { label: "Problem Solving", value: "Handcrafted" },
        { label: "Complexity", value: "Time & Space" },
        { label: "Track", value: "DSA & LeetCode" }
      ],
      tags: ["Python", "Algorithms", "DSA", "LeetCode"],
      image: "/images/projects/dsa-solutions.svg",
      githubUrl: "https://github.com/DevvSagar/DSA-Solutions",
      featured: true,
    },
    {
      id: "role-forum",
      title: "RoleForum - Role-Based Blog & Forum REST API",
      category: "microservices",
      type: "Exploration",
      status: "Completed",
      subtitle: "Public content, private permissions, and admin moderation REST API built with FastAPI",
      description: "Role-based blog and forum REST API built with FastAPI, PostgreSQL, SQLAlchemy, Alembic, and JWT with comprehensive authorization paths and admin override moderation.",
      fullDescription: "RoleForum is a role-based blog and forum REST API built with FastAPI. Features public content discovery, authenticated user writes, ownership-based post/comment management, and full admin moderation overrides with secure JWT authentication.",
      architectureHighlights: [
        "FastAPI asynchronous REST endpoints with Pydantic schema validation and Swagger UI documentation.",
        "Granular RBAC permission matrix (public read, authenticated write, author edit, admin override).",
        "Relational database modeling with PostgreSQL, SQLAlchemy ORM, and Alembic schema migrations.",
        "JWT authentication with password hashing, signed expiring access tokens, and Docker Compose orchestration."
      ],
      metrics: [
        { label: "Framework", value: "FastAPI" },
        { label: "Database", value: "Postgres + ORM" },
        { label: "Auth & RBAC", value: "JWT Auth" },
        { label: "Container", value: "Docker Ready" }
      ],
      tags: ["Python / FastAPI", "PostgreSQL", "SQLAlchemy", "JWT / RBAC"],
      image: "/images/projects/role-forum.svg",
      githubUrl: "https://github.com/DevvSagar/Role-Forum",
      featured: true,
    },
  ] as Project[],

  services: [
    {
      id: "service-1",
      number: "01",
      title: "FASTAPI & PYTHON BACKEND ENGINEERING",
      slug: "fastapi-python-backend",
      shortDescription: "High-performance asynchronous REST APIs built with Python, FastAPI, Pydantic, and clean architecture.",
      fullDescription: "Designing and implementing clean, type-safe REST APIs using FastAPI. Engineering modular backends with structured error handling, request validation via Pydantic, automated OpenAPI/Swagger documentation, and background async workflows.",
      deliverables: [
        "Production-ready FastAPI REST endpoints with OpenAPI & Swagger documentation",
        "Strict request validation and data serialization using Pydantic models",
        "Asynchronous request handling, dependency injection, and background task execution",
        "Clean modular codebase architecture with environment-driven configurations"
      ],
      technologies: ["Python", "FastAPI", "Pydantic", "Uvicorn", "AsyncIO"]
    },
    {
      id: "service-2",
      number: "02",
      title: "AUTHENTICATION & RBAC SECURITY",
      slug: "auth-rbac-security",
      shortDescription: "Secure JWT authentication, password hashing, and granular role-based permission matrices.",
      fullDescription: "Implementing robust authentication and authorization architectures. From stateless JWT tokens and secure httpOnly cookies to role-based access control (RBAC), bcrypt password hashing, and endpoint security hardening.",
      deliverables: [
        "JWT token generation, signature validation, and secure session lifecycle management",
        "Granular RBAC permission matrices (Public, Authenticated Users, Admin moderation)",
        "Secure password hashing and salting using bcrypt",
        "Security hardening (Rate limiting, CORS whitelisting, Helmet HTTP headers, SSRF defense)"
      ],
      technologies: ["JWT", "FastAPI Security", "Bcrypt", "RBAC", "Helmet", "CORS"]
    },
    {
      id: "service-3",
      number: "03",
      title: "DATABASE DESIGN & ORM INTEGRATION",
      slug: "database-orm-integration",
      shortDescription: "Relational schema design with PostgreSQL / SQLAlchemy and document storage with MongoDB.",
      fullDescription: "Structuring maintainable database schemas, relational data modeling, and configuring ORMs for long-term scalability. Handling automated database migrations with Alembic and object document modeling with Mongoose.",
      deliverables: [
        "Relational data modeling, table relationships, and constraints with PostgreSQL",
        "SQLAlchemy ORM integration with automated schema migrations via Alembic",
        "NoSQL document schema design and indexing with MongoDB and Mongoose",
        "Database connection pooling, query structuring, and transaction management"
      ],
      technologies: ["PostgreSQL", "SQLAlchemy", "Alembic", "MongoDB", "Mongoose"]
    },
    {
      id: "service-4",
      number: "04",
      title: "AI INTEGRATION & MEDIA PIPELINES",
      slug: "ai-media-pipelines",
      shortDescription: "Speech-to-text transcription, meeting summarization with AssemblyAI, and AWS S3 cloud storage.",
      fullDescription: "Building automated media ingestion and AI intelligence pipelines. Integrating multi-format audio/video upload workflows, AWS S3 object storage with Python's Boto3 SDK, and speech transcription with AssemblyAI for summaries and action items.",
      deliverables: [
        "Multi-format audio/video upload pipelines (MP3, WAV, MP4) with size & type validation",
        "Speech-to-text transcription and structured meeting intelligence using AssemblyAI",
        "Cloud object storage pipeline with AWS S3 via Python Boto3 SDK",
        "Asynchronous media processing with error handling and secure file streaming"
      ],
      technologies: ["AssemblyAI", "AWS S3", "Boto3", "Multer", "Python", "Node.js"]
    },
    {
      id: "service-5",
      number: "05",
      title: "FULL-STACK WEB APPS & CONTAINERIZATION",
      slug: "fullstack-containerization",
      shortDescription: "Modern web applications with React or Jinja2, containerized with Docker and Nginx.",
      fullDescription: "Developing end-to-end web applications by connecting responsive frontends (React, Vite, Tailwind CSS, Jinja2 SSR) with reliable backend services, containerized with Docker and served behind an Nginx reverse proxy.",
      deliverables: [
        "Full-stack web application development (FastAPI + Jinja2 / Node + React + Vite)",
        "Docker containerization and multi-container Docker Compose environments",
        "Nginx reverse proxy configuration with SSL termination and routing",
        "Deployment setups targeting Vercel (frontend) and Render / Cloud (backend)"
      ],
      technologies: ["Docker", "Nginx", "React", "Tailwind CSS", "Jinja2", "Vercel / Render"]
    }
  ] as ServiceItem[],

  experience: [
    {
      id: "exp-present",
      company: "Independent Engineering",
      role: "Backend & Systems Engineer",
      period: "Jul 2026 - Present",
      location: "Remote",
      isCurrent: true,
      summary: "Building high-performance full-stack and backend projects (DevLog, Scribo), mastering Data Structures & Algorithms daily in Python, and advancing deep practical knowledge in RAG systems, Kubernetes orchestration, Apache Kafka streaming, Redis caching, and System Design concepts.",
      achievements: [
        "Architecting production-ready applications including DevLog (FastAPI/PostgreSQL/AWS S3) and Scribo (AI Meeting Intelligence).",
        "Solving and documenting DSA problem patterns daily in Python with optimal time & space complexity analysis.",
        "Engineering distributed backend architectures exploring Apache Kafka event pipelines, Redis caching layers, Kubernetes, and RAG workflows."
      ],
      techStack: ["Python", "FastAPI", "DSA", "System Design", "Kubernetes", "Apache Kafka", "Redis", "RAG"]
    },
    {
      id: "exp-1",
      company: "Etech Global Services",
      role: "Customer Service Specialist",
      period: "May 2026 - Jul 2026 · 3 mos",
      location: "Kota, Rajasthan, India (Remote)",
      summary: "Customer Associate Manager at Etech Global Services, handling inbound customer support calls for clients across the US. Assisted customers with their queries, provided accurate solutions, and ensured a positive customer experience through clear communication and effective problem-solving in a fast-paced support environment.",
      achievements: [
        "Handled high-volume inbound customer support calls for clients across the US with high first-contact resolution.",
        "Assisted customers with queries, provided accurate solutions, and ensured positive customer satisfaction.",
        "Communicated clearly and solved complex customer problems effectively in a fast-paced environment."
      ],
      techStack: ["Customer Support", "Client Management", "Inbound Support", "Problem Solving", "CRM"]
    },
    {
      id: "exp-2",
      company: "Etech Global Services",
      role: "Customer Service Specialist",
      period: "Nov 2025 - Jan 2026 · 3 mos",
      location: "Kota, Rajasthan, India (Remote)",
      summary: "Customer Associate Manager at Etech Global Services, handling inbound customer support calls for clients across the US. Assisted customers with their queries, provided accurate solutions, and ensured a positive customer experience through clear communication and effective problem-solving in a fast-paced support environment.",
      achievements: [
        "Delivered accurate and timely resolutions for US customer inquiries across inbound support lines.",
        "Maintained high quality of service and positive CSAT ratings through effective communication.",
        "Handled customer escalation workflows and documented issue trends."
      ],
      techStack: ["Customer Experience", "Technical Support", "Communication", "Problem Solving", "CRM"]
    },
  ] as ExperienceItem[],

  contact: {
    badgeText: "Available for New Project",
    headline: "HAVE A PROJECT IN MIND?",
    subheadline: "Together, we can architect scalable, reliable, and high-performance backend systems. Let's collaborate to bring your ideas to life.",
    ctaButtonText: "Contact Me",
    email: "hello@devvx.in",
    responseTime: "Usually responds within 24 hours",
  }
};
