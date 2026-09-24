/**
 * Data: Projects
 * Portfolio projects - Placeholder data to be replaced
 */

export const projects = [
  {
    id: 'project-01',
    number: '01',
    title: 'Work from Home Application',
    description: 'A comprehensive work from home management system enabling employees to submit WFH requests and managers to approve or reject them. Built with Clean Architecture and CQRS pattern for scalable backend design.',
    technologies: ['ASP.NET Core Web API', 'Angular', 'Clean Architecture', 'CQRS', 'JWT', 'Okta'],
    features: [
      'JWT based Authentication with Okta OAuth Provider integration',
      'Employee WFH request submission with status tracking',
      'Manager dashboard for viewing, approving, and rejecting requests',
      'Clean Architecture and CQRS pattern implementation for maintainability',
      'Responsive Angular UI with intuitive user experience',
    ],
    githubUrl: 'https://github.com/',
    demoUrl: '[DEMO_WFH_URL]',
    caseStudyUrl: '[CASE_STUDY_WFH_URL]',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Job Portal',
    description: 'A full-featured job portal platform with role-based authentication supporting three user types: admins, job seekers, and employers. Includes comprehensive job management and search capabilities.',
    technologies: ['ASP.NET Core MVC', 'SQL Server', 'Identity Framework', 'JavaScript'],
    features: [
      'Role-based authentication for Admin, Job Seeker, and Employer roles with distinct privileges',
      'Job posting and application management system',
      'Browse jobs by category and company with advanced filtering',
      'Search functionality for discovering relevant opportunities',
      'Job application tracking for seekers with status visibility',
      'Employer dashboard for managing job postings and applications',
    ],
    githubUrl: 'https://github.com/',
    demoUrl: '[DEMO_JOBPORTAL_URL]',
    caseStudyUrl: '[CASE_STUDY_JOBPORTAL_URL]',
  },
];

/**
 * Get project by ID
 */
export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}

/**
 * Get projects count
 */
export function getProjectsCount() {
  return projects.length;
}
