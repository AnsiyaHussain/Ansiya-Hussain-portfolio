export const skills = ['Python', 'Django', 'Django REST Framework', 'Flask', 'PostgreSQL', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'Angular', 'Git', 'Docker', 'REST APIs'];

export const projects = [
  {
    id: 'cicada-rise',
    title: 'Cicada Rise',
    desc: 'Full-stack e-commerce platform with product catalog, cart, wishlist, and custom ERP dashboard.',
    longDesc: 'Cicada Rise is a robust, production-ready full-stack e-commerce platform engineered with Python, Django, and PostgreSQL. It features product catalog management, real-time search and filtering, user authentication, customer cart & wishlist, and an integrated ERP admin portal for inventory control and order processing.',
    image: `${import.meta.env.BASE_URL}projects/cicada-rise.png`,
    tags: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'REST APIs'],
    features: [
      'Custom ERP admin portal for inventory, product variants & order management',
      'Secure user authentication with session management and role-based permissions',
      'Dynamic product catalog with multi-category search & real-time filtering',
      'Persistent shopping cart & customer wishlist workflows'
    ],
   
    github: 'https://github.com/AnsiyaHussain/Cicada-Rise.git',
    demo: null
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    desc: 'Database-backed hotel application with room booking, guest tracking, and admin billing controls.',
    longDesc: 'A comprehensive database-driven hotel management system designed to streamline room reservations, guest check-in/check-out, staff allocation, and billing. Built with Django and PostgreSQL, it provides front-desk operators and management with real-time room availability metrics.',
    image: `${import.meta.env.BASE_URL}projects/hotel-management.png`,
    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'PostgreSQL'],
    features: [
      'Interactive room availability calendar and real-time status tracking',
      'Guest reservation management with automated check-in and check-out',
      'Staff role controls for front-desk operators and administrative managers',
      'Automated billing, receipt generation, and revenue summary reports'
    ],
   
    github: 'https://github.com/AnsiyaHussain/hotel-management.git',
    demo: null
  },
  {
    id: 'documind',
    title: 'DocuMind',
    desc: 'AI-assisted document intelligence and analytics portal with automated clause extraction.',
    longDesc: 'DocuMind is an intelligent document analysis and extraction interface built with React, Python, and REST APIs. It parses uploaded PDF/text documents, extracts key contractual clauses and entities using natural language processing patterns, and displays interactive summaries.',
    image: `${import.meta.env.BASE_URL}projects/documind.png`,
    tags: ['React', 'Python', 'Django REST Framework', 'PostgreSQL', 'JavaScript'],
    features: [
      'Automated document text parsing and clause extraction',
      'Interactive confidence score visualization and entity highlights',
      'RESTful backend architecture for document uploads and task queuing',
      'Clean, dark-themed responsive dashboard UI built with React'
    ],
    github: 'https://github.com/AnsiyaHussain',
    demo: null
  }
];

export const experience = [
  { date: 'Jul 2026 — Present', role: 'Software Developer & Co-Founder', company: 'Cicada Rise', place: 'Kerala, India', text: 'Developing a full-stack e-commerce platform using Django, React/JavaScript and PostgreSQL, including authentication, ordering and custom ERP-style modules.' },
  { date: 'Dec 2024 — Feb 2025', role: 'Freelance Full Stack Web Developer', company: 'Independent', place: 'Kerala, India', text: 'Guided Python/Django projects from planning to deployment and worked across backend development, database design and frontend integration.' },
  { date: 'Aug 2024 — Nov 2024', role: 'Web Application Developer', company: 'Grapegenix Technical Solutions Pvt Ltd', place: 'Thrissur, Kerala', text: 'Developed and maintained Python/Django web features, REST APIs, application testing and collaborative feature improvements.' }
];
