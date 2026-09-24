/**
 * Data: Technologies
 * Core technology stack with categories
 */

export const technologies = [
  {
    id: 'csharp',
    name: 'C#',
    icon: '◆',
    category: 'language',
    color: '#239120',
  },
  {
    id: 'dotnet',
    name: '.NET',
    icon: '◆',
    category: 'framework',
    color: '#512BD4',
  },
  {
    id: 'aspnet',
    name: 'ASP.NET Core',
    icon: '◆',
    category: 'framework',
    color: '#512BD4',
  },
  {
    id: 'netcore',
    name: '.NET Core',
    icon: '◆',
    category: 'framework',
    color: '#512BD4',
  },
  {
    id: 'webapi',
    name: 'Web API',
    icon: '◆',
    category: 'framework',
    color: '#512BD4',
  },
  {
    id: 'mvc',
    name: 'MVC',
    icon: '◆',
    category: 'framework',
    color: '#512BD4',
  },
  {
    id: 'minimalapi',
    name: 'Minimal API',
    icon: '◆',
    category: 'framework',
    color: '#512BD4',
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: '◆',
    category: 'framework',
    color: '#DD0031',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '◆',
    category: 'language',
    color: '#F7DF1E',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '◆',
    category: 'language',
    color: '#3178C6',
  },
  {
    id: 'python',
    name: 'Python',
    icon: '◆',
    category: 'language',
    color: '#3776AB',
  },
  {
    id: 'html',
    name: 'HTML',
    icon: '◆',
    category: 'language',
    color: '#E34C26',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '◆',
    category: 'language',
    color: '#1572B6',
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: '◆',
    category: 'framework',
    color: '#DD0031',
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: '◆',
    category: 'infrastructure',
    color: '#FF6B35',
  },
  {
    id: 'ai',
    name: 'AI',
    icon: '◆',
    category: 'tool',
    color: '#FF6F20',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '◆',
    category: 'tool',
    color: '#181717',
  },
  {
    id: 'jira',
    name: 'Jira',
    icon: '◆',
    category: 'tool',
    color: '#0052CC',
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    icon: '◆',
    category: 'tool',
    color: '#0052CC',
  },
  {
    id: 'sql',
    name: 'SQL Server',
    icon: '◆',
    category: 'database',
    color: '#CC2927',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '◆',
    category: 'database',
    color: '#336791',
  },
  {
    id: 'redis',
    name: 'Redis',
    icon: '◆',
    category: 'database',
    color: '#DC382D',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: '◆',
    category: 'infrastructure',
    color: '#2496ED',
  },
];

/**
 * Technology categories for grouping
 */
export const technologyCategories = {
  language: 'Languages',
  framework: 'Frameworks',
  database: 'Databases',
  infrastructure: 'Infrastructure',
  tool: 'Tools',
  architecture: 'Architecture Patterns',
  testing: 'Testing',
};

/**
 * Get technologies by category
 */
export function getTechByCategory(category) {
  return technologies.filter((tech) => tech.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories() {
  return [...new Set(technologies.map((tech) => tech.category))];
}
