import { Injectable } from '@angular/core';

import { combineLatest, Observable, of, switchMap } from 'rxjs';

import { IStock } from '../models/stock.interface';
import { IStockSeed, STOCK_SEEDS } from '../../../../../src/app/engines/data/stock-seeds';
import { PriceService } from './price.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private priceService: PriceService
  ) { }

  getStock$(symbol: string): Observable<IStock> {
    const stock: IStockSeed | undefined = STOCK_SEEDS.find((stock) => (stock.symbol === symbol));
  
    if (!stock) {
      throw Error('Stock not found');
    }

    return of(stock).pipe(
      switchMap(() => {
        return this.priceService.getStockPrice$(symbol)
      })
    )
  }
}
