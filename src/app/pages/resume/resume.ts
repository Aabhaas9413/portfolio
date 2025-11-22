import { Component, signal } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  // Personal Information
  name = signal('Aabhaas Malhotra');
  title = signal('Senior Software Engineer');
  phone = signal('+44 7880194641');
  email = signal('aabhaas9413@gmail.com');
  linkedin = signal('https://www.linkedin.com/in/aabhaas-malhotra');
  github = signal('https://github.com/Aabhaas9413');

  // Profile Summary
  profile = signal(
    'Accomplished Full-Stack Developer with over 7 years of experience in C# .NET Development, managing projects from inception to delivery. Experienced in leading development teams, mentoring team members, and providing technical expertise. Skilled in .NET 9 with C#, MVC pattern, and front-end technologies such as Angular, React, and TypeScript. Proficient in relational databases like SQL Server and ORM technologies such as Entity Framework 8. Extensive experience in database design, programming (SQL), and query optimization. Adept at using source control tools such as TFS, Git, and Azure DevOps to manage ALM tools and delivery pipelines. Continuously staying updated on technological innovations to enhance system performance and project outcomes.'
  );

  // Technical Skills
  technicalSkills = signal<string[]>([
    'Advanced knowledge of C# and .NET Development, including .NET 9',
    'Proficient in full Systems Development Life Cycle (SDLC) including requirements analysis, design, implementation, testing, and deployment',
    'Experienced in the MVC pattern for building scalable web applications',
    'Front-End Technologies: Skilled in Angular, React, TypeScript, and Vue.js for dynamic user interfaces',
    'Database Technologies: Strong expertise in relational databases (SQL Server, Oracle) including database design, SQL programming, and query optimization',
    'ORM Technologies: Proficient in Entity Framework 8 for database interactions',
    'Source Control & DevOps: Experienced with TFS, Git, and Azure DevOps for managing ALM tools, delivery pipelines, and source control',
    'Leadership & Mentoring: Proven track record of managing sprints, backlog allocation, and providing technical mentorship to the development team',
    'Integration: Skilled in integrating front-end and back-end systems using REST APIs',
    'Agile Methodologies: Strong advocate of Agile methodologies, including Scrum and Kanban, for effective project management'
  ]);

  // Experience
  experiences = signal<Experience[]>([
    {
      title: 'Senior Software Engineer',
      company: 'ICBC Standard Bank',
      location: 'London, UK',
      period: 'May 2025 — Present',
      responsibilities: [
        'Led engineering across a hybrid on-prem + Azure cloud environment, working with .NET microservices deployed in Docker containers inside the bank\'s Azure DMZ and integrated with Java-based middleware running on Unix servers',
        'Architected and built micro-frontends using Nx in Angular, enabling modular development across teams and improving deployment independence',
        'Upgraded the entire application from Angular 8 to Angular 20, modernizing the tech stack, eliminating deprecated APIs, and improving page load performance',
        'Replaced 20+ legacy jQuery DataTables with a robust AG Grid implementation, significantly enhancing user experience, performance, and maintainability',
        'Introduced feature flags, enabling safe rollouts, A/B tests, and rapid toggling of new functionalities without code redeployments',
        'Reverse-engineered and stabilized large volumes of legacy code, documenting detailed knowledge-transfer guides, onboarding paths, and architectural overviews on Confluence for new joiners',
        'Established engineering best practices by implementing PR templates, coding guidelines, and workflow improvements—later adopted bank-wide by multiple teams using GitHub and Jira',
        'Delivered a production-ready RAG (Retrieval-Augmented Generation) system for internal document search using Azure and Streamlit in python, improving developer productivity and reducing time spent searching across legacy documentation',
        'Collaborated closely with project managers, architects, and cross-functional teams, participating in Azure ceremonies, architecture discussions, and release planning'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Ebury',
      location: 'London, UK',
      period: 'Jan 2025 — May 2025',
      responsibilities: [
        'Developed core modules using Angular and Python for the Sales Intelligence application using a stateless event-sourcing model to ensure real-time data consistency',
        'Built and orchestrated ETL DAGs with the Data Science team for data cleaning, transformation, and analytics using GCP BigQuery',
        'Implemented Domain-Driven Design (DDD) architecture with CQRS in Python, improving modularity and scalability',
        'Collaborated with cross-functional teams to automate sales workflows, including lead scoring and customer segmentation',
        'Wrote extensive unit and integration tests for both Angular components and Python services, improving reliability and coverage',
        'Deployed applications using Azure App Services, integrated Azure Entra ID for secure authentication, and used Application Insights for observability'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Morningstar Limited',
      location: 'London, UK',
      period: 'Jan 2024 — Present',
      responsibilities: [
        'Automated Azure DevOps pipelines using Bicep and YAML, reducing deployment time by 40% and minimizing manual errors for faster, more reliable releases',
        'Led Agile ceremonies (daily stand-ups, sprint planning, retrospectives) to drive project progress and boost team collaboration',
        'Resolved complex foreign exchange rate discrepancies across five platforms, improving system reliability and client satisfaction',
        'Developed a comprehensive testing strategy including integration, functional, and unit tests to ensure high code quality',
        'Created detailed architecture documentation and presented technical solutions to design authorities',
        'Implemented a Retrieval-Augmented Generation (RAG) solution for internal documentation search',
        'Enhanced application security with Azure App Configuration and Key Vault, successfully executing disaster recovery processes',
        'Integrated SonarQube into CI/CD pipelines for static code analysis',
        'Created reusable NuGet packages for logging and Azure configuration management',
        'Leveraged GitHub Copilot for automated code suggestions and refactoring, reducing manual effort by 30%',
        'Developed a feature-rich boilerplate template for Web APIs',
        'Successfully integrated Zendesk with the in-house Customer 360 application'
      ]
    },
    {
      title: 'Full Stack Engineer',
      company: 'Cognizant Worldwide Limited',
      location: 'London, UK',
      period: 'Oct 2022 — Jan 2024',
      responsibilities: [
        'Key contributor to a high-impact project with JPMorgan Chase, leveraging .NET 6 and Angular',
        'Partnered with the Department of Education to digitize policy and adoption processes',
        'Developed an Angular application from scratch, establishing a complete CI/CD pipeline',
        'Orchestrated the deployment of applications using Azure resources',
        'Led Agile workflows including daily stand-ups, sprint planning, and retrospectives',
        'Solved complex technical issues to enhance team productivity',
        'Resolved a complex payment issue within a legacy application'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Advantage-Go (Coforge Limited)',
      location: 'Gurgaon, India',
      period: 'Jul 2017 — Jul 2021',
      responsibilities: [
        'Led a team of 5 members, delivering key features for an underwriting application',
        'Implemented dynamic data analysis widgets, enhancing data readability and user engagement',
        'Collaborated with architects on technical documentation and system designs',
        'Mentored junior developers, fostering a growth-oriented team',
        'Introduced innovations like adapter patterns and third-party integrations',
        'Implemented RabbitMQ for efficient request management',
        'Upgraded from Angular 6 to 8, modernizing the codebase',
        'Designed a scalable microservice-based system',
        'Enhanced data retrieval with ElasticSearch, reducing query times from 30-40 seconds to 1-2 seconds',
        'Managed code repositories and Agile processes in TFS'
      ]
    },
    {
      title: 'AI Application Software Developer (Part-time)',
      company: 'Lexverify Limited',
      location: 'Birmingham, UK',
      period: 'Feb 2022 — Sep 2022',
      responsibilities: [
        'Engineered a cloud-based Azure application using .NET Core',
        'Set up DevOps pipelines for streamlined CI/CD processes',
        'Boosted AI model accuracy from 65% to 84% using a feedback mechanism',
        'Applied TDD methodologies and implemented microservices architecture',
        'Managed Agile processes with Kanban boards',
        'Optimized Azure resources, reducing cloud infrastructure costs by 30%'
      ]
    }
  ]);

  // Education
  education = signal<Education[]>([
    {
      degree: 'MSc in Advanced Computer Science (Artificial Intelligence)',
      institution: 'University of Leeds',
      location: 'Leeds',
      period: 'Sep 2021 — Sep 2022',
      grade: 'Merit (2:1)'
    },
    {
      degree: 'Bachelor of Technology (Computer Science and Engineering)',
      institution: 'University of Petroleum and Energy Studies',
      location: 'Dehradun',
      period: 'May 2013 — Jun 2017',
      grade: 'Merit (2:1)'
    }
  ]);

  // Voluntary Work
  voluntaryWork = signal({
    title: 'School Representative',
    organization: 'Post Graduate Taught School of Computing, University of Leeds',
    responsibilities: [
      'Represented the School of Computing as a liaison between students and faculty, addressing concerns and facilitating communication',
      'Organised and participated in student-focused events, fostering a collaborative and supportive academic environment'
    ]
  });

  // Collapse states for sections - all collapsed by default
  headerCollapsed = signal(false);
  profileCollapsed = signal(true);
  skillsCollapsed = signal(true);
  experienceCollapsed = signal(true);
  educationCollapsed = signal(true);
  voluntaryCollapsed = signal(true);

  // Toggle methods
  toggleHeader() {
    this.headerCollapsed.update(v => !v);
  }

  toggleProfile() {
    this.profileCollapsed.update(v => !v);
  }

  toggleSkills() {
    this.skillsCollapsed.update(v => !v);
  }

  toggleExperience() {
    this.experienceCollapsed.update(v => !v);
  }

  toggleEducation() {
    this.educationCollapsed.update(v => !v);
  }

  toggleVoluntary() {
    this.voluntaryCollapsed.update(v => !v);
  }
}
