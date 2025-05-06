import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IPortfolio } from '../models/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioStore {
  portfolio$!: Observable<IPortfolio>;

  constructor() { }

  getPortfolio$(forceRefresh: boolean): Observable<IPortfolio> {
    // if the portfolio has value, return it
    return of({
      holdings: [],
      totalChange: 3.25,
      totalLiquid: 200000,
      totalInvested: 1500000
    });
  }
}
