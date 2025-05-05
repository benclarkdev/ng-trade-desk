import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IPortfolio } from '../models/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolio$(): Observable<IPortfolio> {
    return of();
  }
}
