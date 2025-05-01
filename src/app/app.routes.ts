import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/market/market.component').then(m => m.MarketComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'stock',
    loadComponent: () => import('./components/stock/stock.component').then(m => m.StockComponent),
  },
];
