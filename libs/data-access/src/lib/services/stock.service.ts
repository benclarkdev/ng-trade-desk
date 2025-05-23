import { Injectable } from '@angular/core';

import { Observable, of, switchMap } from 'rxjs';

import { IStockSeed, STOCK_SEEDS } from '@ng-trade-desk/engines';
import { IStock } from '@ng-trade-desk/models';

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
