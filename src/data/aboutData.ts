// Profile Information - Ari Andika Febrian
export const profileData = {
  name: 'Ari Andika Febrian',
  title: 'Junior Mobile Developer',
  headline: 'React Native & Fullstack Developer',
  summary: `Fullstack Mobile Developer specializing in React Native and backend integration. Experienced in building scalable mobile applications and enterprise systems through real-world client projects and internships. Skilled in API integration, JWT authentication, database optimization, and CI/CD deployment using Azure DevOps.

Focused on delivering maintainable, production-ready applications with strong performance and clean architecture. Developed an education management mobile app serving 500+ users and contributed to enterprise dashboard systems at PT United Tractors Tbk.

Passionate about continuous learning, writing clean code, and creating impactful user experiences through thoughtful design and efficient development practices.`,
  email: 'ariandika1913@gmail.com',
  phone: '+62 899-8991-211',
  location: 'Jakarta, Indonesia',
  github: 'https://github.com/AriandikaFebrian',
  linkedin: 'https://linkedin.com/in/ariandika-febrian',
};

// Skills categorized by type
export const skillsData = {
  Frontend: [
    { name: 'React Native', level: 95, color: '#61dafb' },
    { name: 'React.js', level: 90, color: '#61dafb' },
    { name: 'Expo', level: 90, color: '#000000' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Next.js', level: 80, color: '#000000' },
    { name: 'MUI', level: 85, color: '#007fff' },
  ],
  Backend: [
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: '.NET', level: 75, color: '#512bd4' },
    { name: 'REST API', level: 90, color: '#ff6b6b' },
    { name: 'JWT Auth', level: 85, color: '#ff6b6b' },
    { name: 'RBAC', level: 80, color: '#ff6b6b' },
  ],
  Database: [
    { name: 'PostgreSQL', level: 85, color: '#336791' },
    { name: 'SQL Server', level: 80, color: '#cc2927' },
    { name: 'MySQL', level: 75, color: '#00758f' },
  ],
  DevOps: [
    { name: 'Azure DevOps', level: 75, color: '#0078d4' },
    { name: 'Git', level: 90, color: '#f1502f' },
    { name: 'CI/CD', level: 80, color: '#0078d4' },
    { name: 'Expo Build', level: 85, color: '#000000' },
    { name: 'Postman', level: 90, color: '#ff6c37' },
  ],
  Tools: [
    { name: 'FCM', level: 85, color: '#ffb300' },
    { name: 'Power BI', level: 70, color: '#f2cc1c' },
  ],
};

// Category colors
export const categoryColors = {
  Frontend: '#6366f1', // Indigo
  Backend: '#ec4899',  // Pink
  Database: '#0891b2', // Cyan
  DevOps: '#f59e0b',   // Amber
  Tools: '#10b981',    // Emerald
};

// Category icons (using emoji for simplicity, MUI icons can be added later)
export const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '💾',
  DevOps: '🚀',
  Tools: '🛠️',
};

// Timeline data for experience and education
export const timelineData = [
  {
    type: 'work',
    position: 'Junior Mobile Developer',
    company: 'Tech Solutions Inc.',
    location: 'Jakarta, Indonesia',
    dates: '2023 - Present',
    description: `Developing and maintaining cross-platform mobile applications using React Native and Expo. 
    Implementing RESTful APIs integration, JWT authentication, and FCM for push notifications. 
    Collaborating with backend team using .NET and PostgreSQL.`,
  },
  {
    type: 'work',
    position: 'Junior Frontend Developer',
    company: 'Digital Agency',
    location: 'Remote',
    dates: '2022 - 2023',
    description: `Built responsive web applications using React.js and Material UI. 
    Worked on client projects delivering production-ready code. 
    Implemented CI/CD pipelines using Azure DevOps.`,
  },
  {
    type: 'education',
    position: 'Bachelor of Computer Science',
    company: 'University of Technology',
    location: 'Indonesia',
    dates: '2019 - 2023',
    description: `Graduated with honors. Focused on software engineering and mobile development. 
    Participated in coding competitions and hackathons. Senior project developed a React Native app.`,
  },
  {
    type: 'work',
    position: 'Intern Developer',
    company: 'Startup Hub',
    location: 'Jakarta, Indonesia',
    dates: '2022',
    description: `Assisted in developing features for a fintech mobile application. 
    Learned agile development practices and code review processes.`,
  },
];

// CTA Button data
export const ctaData = {
  text: 'See My Projects',
  link: '/projects',
  description: 'Want to see what I can build? Check out my project portfolio!',
};

