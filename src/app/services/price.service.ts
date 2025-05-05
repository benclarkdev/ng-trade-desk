import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IStock } from '../models/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  getStockPrice$(symbol: string): Observable<IStock> {
    return of()
  }
}
