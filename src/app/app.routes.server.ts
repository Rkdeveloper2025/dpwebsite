import { RenderMode, ServerRoute } from '@angular/ssr';
import { Home } from './home/home';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Server
  },
  {
    path:'calendar',
    renderMode: RenderMode.Client
  },
  {
    path: 'aarti',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'leaders',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'useful-mantra',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
