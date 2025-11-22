# Angular Portfolio

A personal portfolio website built with Angular, featuring GitHub integration to showcase projects.

## Live Demo
[https://Aabhaas9413.github.io/portfolio/](https://Aabhaas9413.github.io/portfolio/)

## Features
- **Angular 19**: Built with the latest version of Angular.
- **GitHub Integration**: Fetches and displays repositories dynamically using the GitHub API.
- **Responsive Design**: Optimized for all devices.
- **PWA Support**: Progressive Web App capabilities.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

To deploy to GitHub Pages:

```bash
# Build the project
ng build --base-href /portfolio/

# Deploy
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
