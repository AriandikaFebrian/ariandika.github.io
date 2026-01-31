// Experience data for Ari Andika Febrian
// Mobile Developer & Fullstack Developer

export const experienceData = [
  {
    id: 1,
    type: 'client-project',
    position: 'Mobile Developer',
    company: 'Client Project – Education System',
    location: 'Jakarta, Indonesia',
    startDate: 'Feb 2026',
    endDate: 'Present',
    duration: 'Ongoing',
    description: `Developed a mobile activity management app for an educational institution serving 500+ users including teachers, parents, and students (ranging from early childhood education to elementary school levels).

The application features JWT + RBAC authentication supporting 5 distinct user roles, with real-time push notifications via FCM for activity approvals, chats, and system updates. Worked closely with the backend developer to review PHP API endpoints and database structures, ensuring seamless compatibility with the mobile application logic. Delivered an internal demo build (APK) after completing thorough QA testing, with deployment scheduled to begin February 2026 and production release planned for July 2026.`,
    skills: ['React Native', 'Expo', 'FCM', 'JWT', 'RBAC', 'PHP API'],
    achievements: [
      'Served 500+ active users with a secure and scalable authentication system',
      'Successfully implemented 5-role RBAC without any permission conflicts',
      'Delivered internal demo build within a tight timeline',
    ],
  },
  {
    id: 2,
    type: 'internship',
    position: 'Fullstack Developer Intern',
    company: 'PT United Tractors Tbk',
    location: 'Jakarta, Indonesia',
    startDate: 'Mar 2025',
    endDate: 'Jul 2025',
    duration: '5 bulan',
    description: `PT United Tractors Tbk is one of Indonesia's largest heavy equipment companies, a publicly listed company (IDX: UNTR) and the authorized distributor for Komatsu machinery, operating in mining, construction, and energy sectors.

Built an internal OTRS ticket dashboard by extracting data from OTRS, storing it in PostgreSQL, and visualizing it in Power BI for real-time insights.
Designed and implemented database schemas, optimized queries, and integrated APIs using .NET and React (Vite).
Automated CSV-based reports into scheduled dashboards, improving data accessibility and reducing manual reporting tasks.
Authored technical documentation and contributed to early-stage CI/CD pipeline setup in Azure DevOps.
Worked in a 3-person team (mentor, PM, self) covering frontend, backend, and database responsibilities.`,
    skills: ['.NET', 'React', 'Vite', 'PostgreSQL', 'Power BI', 'Azure DevOps', 'OTRS'],
    achievements: [
      'Built real-time OTRS ticket dashboard for internal team',
      'Automated reporting reducing manual work significantly',
      'Successfully integrated multiple systems (.NET, React, Power BI)',
    ],
  },
  {
    id: 3,
    type: 'freelance',
    position: 'Freelance Web Developer',
    company: 'SEO Project',
    location: 'Remote',
    startDate: '2024',
    endDate: '2024',
    duration: 'Project-based',
    description: `Improved online presence and search engine rankings for a web-based business through front-end optimization and strategic content restructuring. Refactored the HTML/CSS layout to achieve faster page load times, improved responsiveness across all devices, and delivered a cleaner, more modern user interface. Enhanced user engagement by implementing intuitive UX features such as WhatsApp contact integration. Implemented technical SEO best practices including meta tags, semantic HTML markup, and structured data, resulting in significantly improved Core Web Vitals and an overall SEO score improvement.`,
    skills: ['React.js', 'SEO', 'Performance Optimization', 'Web Development', 'HTML/CSS', 'Technical SEO'],
    achievements: [
      'Improved SEO score from C to A+',
      'Achieved first-page Google ranking for 5+ keywords',
      'Enhanced website performance and user engagement through UI/UX improvements',
    ],
  },
];
// Helper functions
export const getExperienceByType = (type: string) => {
  return experienceData.filter((exp) => exp.type === type);
};

export const getTotalExperience = () => {
  // Calculate total months of experience
  const months = {
    'Ongoing': 2, // Feb 2026 - Present
    '5 bulan': 5,
    'Project-based': 2,
  };
  return Object.values(months).reduce((a, b) => a + b, 0);
};

