import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IPortfolio } from '@ng-trade-desk/models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolio$(): Observable<IPortfolio> {
    return of();
  }
}
