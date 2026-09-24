/**
 * Data types and interfaces
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Unique project identifier
 * @property {string} number - Display number (01, 02, etc.)
 * @property {string} title - Project title
 * @property {string} description - Short project description
 * @property {string[]} technologies - Array of tech stack
 * @property {string} [githubUrl] - GitHub repository URL
 * @property {string} [demoUrl] - Live demo URL
 * @property {string} [caseStudyUrl] - Case study URL
 */

/**
 * @typedef {Object} Experience
 * @property {string} id - Unique experience identifier
 * @property {string} title - Job title
 * @property {string} company - Company name
 * @property {string} startDate - Start date (YYYY-MM-DD)
 * @property {string} [endDate] - End date (YYYY-MM-DD), undefined if current
 * @property {string} [description] - Short role description
 * @property {string[]} achievements - List of achievements/responsibilities
 */

/**
 * @typedef {Object} Technology
 * @property {string} name - Technology name
 * @property {string} icon - Icon path or identifier
 * @property {string} category - Category (language, backend, database, etc.)
 * @property {string} [color] - Optional color code
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} platform - Platform name (GitHub, LinkedIn, Email)
 * @property {string} url - URL or contact information
 * @property {string} [label] - Display label
 */
