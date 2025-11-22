import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  languages_url: string;
  stargazers_count: number;
  updated_at: string;
  languages?: string[]; // Added to store fetched languages
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly API_URL = 'https://api.github.com/users/aabhaas9413/repos?sort=updated&direction=desc';

  constructor(private http: HttpClient) {}

  private getCachedData<T>(key: string): T | null {
    const cached = localStorage.getItem(key);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const now = new Date().getTime();
      // Cache for 4 hours
      if (now - timestamp < 4 * 60 * 60 * 1000) {
        return data;
      }
    }
    return null;
  }

  private setCachedData(key: string, data: any) {
    const cacheEntry = {
      data,
      timestamp: new Date().getTime()
    };
    localStorage.setItem(key, JSON.stringify(cacheEntry));
  }

  getRepos(): Observable<Repository[]> {
    const CACHE_KEY = 'github_repos';
    const cached = this.getCachedData<Repository[]>(CACHE_KEY);

    if (cached) {
      return of(cached);
    }

    return this.http.get<Repository[]>(this.API_URL).pipe(
      tap(repos => this.setCachedData(CACHE_KEY, repos)),
      catchError(error => {
        console.error('GitHub API Error:', error);
        // Return empty array or throw depending on needs, here we return empty to not break UI
        return of([]);
      })
    );
  }

  getLanguages(url: string): Observable<Record<string, number>> {
    const CACHE_KEY = `github_languages_${url}`;
    const cached = this.getCachedData<Record<string, number>>(CACHE_KEY);

    if (cached) {
      return of(cached);
    }

    return this.http.get<Record<string, number>>(url).pipe(
      tap(langs => this.setCachedData(CACHE_KEY, langs)),
      catchError(error => {
        console.error('GitHub API Error:', error);
        return of({});
      })
    );
  }
}
