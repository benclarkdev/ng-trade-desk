import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IPortfolio } from '../models/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioStore {
  portfolio$!: Observable<IPortfolio>;

  constructor() { }

  getPortfolio$(forceRefresh: boolean): Observable<IPortfolio> {
    // if the portfolio has value, return it

  }
}
