export const portfolioData = {
  name: "Mohamed Yahya",
  title: "Full-Stack Software Engineer",
  description: "I design and develop scalable web applications using modern backend and frontend technologies.",
  heroSubtitle: "Spring Boot • Node.js • Django • Angular • React",
  
  about: {
    title: "About Me",
    description: `I am a Software Engineering graduate specializing in Full-Stack Web Development. With professional experience working with international teams in Germany, France, and Mauritania, I build secure and scalable applications using modern technologies. My expertise includes backend development, REST API design, database architecture, authentication systems, and responsive frontend applications.`,
    skills: ["Full-Stack Development", "REST APIs", "Database Design", "Microservices", "DevOps"],
  },

  experience: [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "SISTA Design Office",
      location: "Nouakchott, Mauritania",
      period: "Feb 2026 - Jun 2026",
      description: "Developed subscription and digital payment management solutions with secure payment processing and user authentication.",
      technologies: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "JWT"],
      highlight: true,
    },
    {
      id: 2,
      title: "Software Developer Intern",
      company: "Camphire",
      location: "Berlin, Germany",
      period: "Jun 2025 - Nov 2025",
      description: "Developed backend services for a job marketplace platform with real-time notifications and advanced search capabilities.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "OAuth"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "Self-Initiated",
      description: "Built multiple full-stack applications including e-commerce platforms with product management and admin dashboards.",
      technologies: ["Node.js", "JavaScript", "PostgreSQL", "React", "Docker"],
    },
  ],

  skills: {
    frontend: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Sass", "HTML5", "CSS3"],
    backend: ["Spring Boot", "Node.js", "Express.js", "Django", "REST APIs", "Microservices"],
    database: ["PostgreSQL", "MySQL", "MongoDB", "Hibernate", "Sequelize"],
    devops: ["Docker", "Git", "GitHub", "Nginx", "Linux", "CI/CD"],
  },

  projects: [
    {
      id: 1,
      title: "Restaurant Ordering System",
      description: "Full-stack restaurant management platform with online ordering, admin dashboard, and real-time order tracking.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
      features: [
        "Online food ordering",
        "Admin dashboard for menu management",
        "JWT authentication",
        "Real-time order updates",
        "Payment integration",
      ],
      github: "https://github.com/mohamedyahyadk",
      image: "restaurant.jpg",
    },
    {
      id: 2,
      title: "Subscription Payment Platform",
      description: "Secure payment management system for subscription-based services with billing automation and user management.",
      technologies: ["Spring Boot", "PostgreSQL", "Angular", "Stripe API", "Docker"],
      features: [
        "Subscription management",
        "Automated billing",
        "Payment processing",
        "User dashboard",
        "Invoice generation",
      ],
      github: "https://github.com/mohamedyahyadk",
      image: "payment.jpg",
    },
    {
      id: 3,
      title: "Leave Management Microservices",
      description: "Microservices-based HR system for managing employee leave requests with approval workflows and reporting.",
      technologies: ["Node.js", "PostgreSQL", "Docker", "RabbitMQ", "Express.js"],
      features: [
        "Leave request submission",
        "Manager approval workflow",
        "Leave balance tracking",
        "Reporting dashboard",
        "Email notifications",
      ],
      github: "https://github.com/mohamedyahyadk",
      image: "leave.jpg",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce application with product catalog, shopping cart, checkout, and admin management.",
      technologies: ["Node.js", "React", "PostgreSQL", "Stripe", "Redux"],
      features: [
        "Product catalog with search",
        "Shopping cart & wishlist",
        "Secure checkout",
        "Order tracking",
        "Admin panel",
        "Responsive design",
      ],
      github: "https://github.com/mohamedyahyadk",
      image: "ecommerce.jpg",
    },
  ],

  certifications: [
    {
      title: "Software Engineering Certification",
      issuer: "Mayerfeld Consulting",
      year: 2024,
    },
  ],

  contact: {
    email: "mohamedyahyadk@gmail.com",
    phone: "+222 (WhatsApp available)",
    location: "Berlin, Germany / Nouakchott, Mauritania",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/mohamedyahyadk",
        icon: "FaGithub",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohamedyahyadk",
        icon: "FaLinkedin",
      },
      {
        name: "Email",
        url: "mailto:mohamedyahyadk@gmail.com",
        icon: "FaEnvelope",
      },
    ],
  },

  cta: {
    primaryText: "View My Projects",
    secondaryText: "Download CV",
  },
};
