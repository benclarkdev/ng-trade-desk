import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/dashboard/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'stock/:symbol',
    loadComponent: () => import('./components/stock/stock.component').then(m => m.StockComponent),
  },
];
