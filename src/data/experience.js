/**
 * Data: Experience
 * Professional experience timeline - Placeholder data to be replaced
 */

export const experience = [
  {
    id: 'exp-01',
    title: 'Associate Software Engineer',
    company: 'Omnicom Media Group',
    location: 'Kathmandu, Nepal',
    startDate: 'Nov 2024',
    endDate: '', // Current role
    description: 'Backend developer contributing to the Flightdeck Project, building and maintaining APIs, writing complex SQL queries, and ensuring code quality through testing.',
    achievements: [
      'Contributed as a Backend developer in Flightdeck Project (.NET Core, C#, Web API, Minimal API)',
      'Built and maintained existing APIs and services deployed across servers',
      'Wrote complex and dynamic Stored Procedures and SQL queries for data management',
      'Wrote unit tests and Integration tests (Docker) to ensure code quality and reliability',
    ],
  },
  {
    id: 'exp-02',
    title: 'Intern',
    company: 'Omnicom Media Group',
    location: 'Kathmandu, Nepal',
    startDate: 'Aug 2024',
    endDate: 'Oct 2024',
    description: 'Learned fundamentals of web applications, API services, and modern software architectures including security best practices and authentication frameworks.',
    achievements: [
      'Learned the fundamentals of Web Applications and API Services',
      'Learned different Software Architectures including Clean and Vertical Slice Architecture',
      'Studied SQL injection prevention, views, and Stored Procedures',
      'Learned Authentication and Authorization using ASP.NET Identity Framework and Okta as OAuth provider',
      'Built full-stack web application (Work from Home Application) using .NET Core and Angular',
    ],
  },
];

/**
 * Get experience by ID
 */
export function getExperienceById(id) {
  return experience.find((e) => e.id === id);
}

/**
 * Get all experience in chronological order
 */
export function getExperienceChronological() {
  return experience.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
}

/**
 * Check if experience is current
 */
export function isCurrentRole(exp) {
  return !exp.endDate || exp.endDate === '';
}
