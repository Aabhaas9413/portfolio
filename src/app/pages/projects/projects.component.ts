import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubService, Repository } from '../../services/github.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  private githubService = inject(GitHubService);
  projects = signal<Repository[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  // Computed signal to sort projects: with description first, without description last
  sortedProjects = signal<Repository[]>([]);

  constructor() {
    this.loadProjects();
  }

  private loadProjects() {
    this.loading.set(true);
    this.githubService.getRepos().subscribe({
      next: (repos) => {
        if (repos.length === 0) {
          this.error.set('Unable to load projects. Please try again later (API Rate Limit likely exceeded).');
        } else {
          this.projects.set(repos);
          this.sortProjects();
          this.fetchLanguages(repos);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('An error occurred while loading projects.');
        this.loading.set(false);
      }
    });
  }

  private sortProjects() {
    const sorted = [...this.projects()].sort((a, b) => {
      // Projects with descriptions come first
      if (a.description && !b.description) return -1;
      if (!a.description && b.description) return 1;
      // If both have or both don't have descriptions, maintain original order
      return 0;
    });
    this.sortedProjects.set(sorted);
  }

  private fetchLanguages(repos: Repository[]) {
    repos.forEach(repo => {
      this.githubService.getLanguages(repo.languages_url).subscribe(languages => {
        this.projects.update(currentRepos => {
          const index = currentRepos.findIndex(r => r.id === repo.id);
          if (index !== -1) {
            const updatedRepos = [...currentRepos];
            updatedRepos[index] = { ...updatedRepos[index], languages: Object.keys(languages) };
            return updatedRepos;
          }
          return currentRepos;
        });
        // Re-sort after updating
        this.sortProjects();
      });
    });
  }
}
