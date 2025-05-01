import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IOrder } from '../models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderStore {
  order$!: Observable<IOrder[]>;

  constructor() { }

  getPortfolio$(forceRefresh: boolean): Observable<IOrder[]> {
    // if the portfolio has value, return it
    // if it doesn't, get a portfolio from the service
    // 
  }
}
