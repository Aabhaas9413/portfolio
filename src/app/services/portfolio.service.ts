import { Injectable, signal, computed } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string; // CSS class or URL
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Signals for State
  darkMode = signal<boolean>(true);
  activeSection = signal<string>('home');

  // Data Signals (could be fetched from an API, but hardcoded for now as per typical portfolio)
  projects = signal<Project[]>([
    {
      id: '1',
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online stores with real-time analytics.',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Firebase'],
      imageUrl: 'assets/images/project1.jpg', // Placeholder
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task manager with drag-and-drop functionality.',
      technologies: ['Angular', 'RxJS', 'Tailwind CSS', 'Node.js'],
      imageUrl: 'assets/images/project2.jpg', // Placeholder
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: '3',
      title: 'Weather Forecast PWA',
      description: 'Offline-capable weather application using OpenWeatherMap API.',
      technologies: ['Angular', 'PWA', 'Service Workers', 'SASS'],
      imageUrl: 'assets/images/project3.jpg', // Placeholder
      demoUrl: '#',
      githubUrl: '#'
    }
  ]);

  skills = signal<Skill[]>([
    { name: 'Angular', icon: 'fab fa-angular', category: 'Frontend' },
    { name: 'TypeScript', icon: 'fab fa-js', category: 'Frontend' },
    { name: 'HTML5', icon: 'fab fa-html5', category: 'Frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'Frontend' },
    { name: 'Node.js', icon: 'fab fa-node', category: 'Backend' },
    { name: 'Git', icon: 'fab fa-git-alt', category: 'Tools' }
  ]);

  // Computed values
  frontendSkills = computed(() => this.skills().filter(s => s.category === 'Frontend'));
  backendSkills = computed(() => this.skills().filter(s => s.category === 'Backend'));

  constructor() {
    // Initialize theme from local storage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    } else {
      // Default to dark mode
      this.darkMode.set(true);
    }
    this.updateBodyClass();
  }

  toggleTheme() {
    this.darkMode.update(current => !current);
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.darkMode()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
