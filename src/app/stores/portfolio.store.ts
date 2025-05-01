import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHolding } from '../models/holding.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioStore {
  portfolio$!: Observable<IHolding[]>;

  constructor() { }

  getPortfolio$(forceRefresh: boolean): Observable<IHolding[]> {
    // if the portfolio has value, return it
    // if it doesn't, get a portfolio from the service
    // 
  }
}
