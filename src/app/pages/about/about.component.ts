import { Component, signal, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { RouterLink } from '@angular/router';

interface Journey {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface Highlight {
  metric: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  portfolioService = inject(PortfolioService);

  // Personal intro
  intro = signal(
    "Hey there! 👋 I'm Aabhaas, a Senior Software Engineer who loves turning complex problems into elegant solutions. With over 7 years of experience, I've journeyed from building underwriting systems in India to architecting cloud-native solutions for banks in London. My code has powered everything from AI models to microservices handling millions of transactions."
  );

  // Career highlights
  highlights = signal<Highlight[]>([
    {
      metric: '7+ Years',
      description: 'Full-Stack Development Experience',
      icon: '💻'
    },
    {
      metric: 'Angular 8→20',
      description: 'Led complete framework upgrade',
      icon: '🚀'
    },
    {
      metric: '40% Faster',
      description: 'Deployment time reduction with DevOps automation',
      icon: '⚡'
    },
    {
      metric: '65%→84%',
      description: 'AI model accuracy improvement',
      icon: '🤖'
    },
    {
      metric: '30-40s→1-2s',
      description: 'Query optimization with ElasticSearch',
      icon: '⚙️'
    },
    {
      metric: '30% Savings',
      description: 'Azure infrastructure cost optimization',
      icon: '💰'
    }
  ]);

  // Journey timeline
  journey = signal<Journey[]>([
    {
      year: '2025',
      title: 'Senior Software Engineer @ ICBC Standard Bank',
      description: 'Leading hybrid cloud architecture, building micro-frontends with Nx, and delivering RAG systems for internal search.',
      icon: '🏦'
    },
    {
      year: '2024',
      title: 'Software Engineer @ Morningstar & Ebury',
      description: 'Automated Azure DevOps pipelines, implemented DDD with CQRS, and built event-sourcing systems.',
      icon: '📈'
    },
    {
      year: '2022',
      title: 'Full Stack Engineer @ Cognizant (JPMorgan Project)',
      description: 'Delivered cutting-edge solutions with .NET 6 and Angular, partnered with Department of Education on digital transformation.',
      icon: '🎓'
    },
    {
      year: '2021-22',
      title: 'MSc in AI @ University of Leeds',
      description: 'Graduated with Merit, dove deep into machine learning and artificial intelligence.',
      icon: '🧠'
    },
    {
      year: '2017-21',
      title: 'Senior Software Engineer @ Coforge',
      description: 'Led teams, mentored developers, and modernized legacy systems while implementing microservices architecture.',
      icon: '👨‍💻'
    }
  ]);

  // Fun facts
  funFacts = signal<string[]>([
    '🎯 Reverse-engineered and documented massive legacy codebases - now the team actually knows how it works!',
    '🔥 Replaced 20+ jQuery DataTables with AG Grid - the users (and the codebase) thanked me',
    '📚 Created knowledge-transfer guides that became the go-to onboarding resource',
    '🌍 Worked across 3 continents: India, UK, and remote collaborations worldwide',
    '⚡ GitHub Copilot power user - reduced manual coding effort by 30%',
    '🎨 Built RAG systems with Streamlit - because developers deserve beautiful internal tools too'
  ]);

  // Current tech stack
  currentTech = signal({
    languages: ['C#', 'TypeScript', 'Python', 'JavaScript'],
    frontend: ['Angular 20', 'React', 'Vue.js', 'Nx Micro-frontends'],
    backend: ['.NET 9', 'Node.js', 'Entity Framework 8'],
    cloud: ['Azure DevOps', 'Azure Functions', 'Docker', 'Bicep'],
    databases: ['SQL Server', 'Oracle', 'BigQuery', 'ElasticSearch'],
    tools: ['Git', 'GitHub', 'Jira', 'SonarQube', 'RabbitMQ']
  });

  // Philosophy
  philosophy = signal(
    "I believe great software is built with a mix of solid engineering principles, continuous learning, and a touch of creativity. Whether I'm optimizing database queries, setting up CI/CD pipelines, or mentoring junior developers, I'm always looking for ways to make things better, faster, and more maintainable. Code should be elegant, systems should be resilient, and documentation should actually help people!"
  );
}
