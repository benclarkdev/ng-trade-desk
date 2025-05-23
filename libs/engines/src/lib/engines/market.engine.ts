import { Injectable } from '@angular/core';

import { combineLatest, of, tap } from 'rxjs';

import { IQuote, IStock, CountLimitStack } from '@ng-trade-desk/models';

import { VariablePerformanceEngine } from './variable-performance.engine';
import { IStockSeed, STOCK_SEEDS } from '../seeds/stock-seeds';

@Injectable({
  providedIn: 'root'
})
export class MarketEngine {
  seeds: IStockSeed[] = [];
  stocks: IStock[] = [];
  
  /**
   * This engine generates market performance.
  */
  constructor(
    private variablePerformanceEngine: VariablePerformanceEngine
  ) {}

  // initialize the market
  initialize(): Promise<void> {
    return of(STOCK_SEEDS).toPromise().then(
      (seeds: IStockSeed[] | undefined) => {
        // convert the stock seeds to stocks
        this.stocks = (seeds || []).map((stockSeed: IStockSeed) => {
          const initialQuote = {

          };
          

          return {
            ...stockSeed,
            // TODO: SEED OWNERS
            index_owner: 1,

            // TODO: SEED QUOTE
            quotes: new CountLimitStack<IQuote>(10, )
          } as IStock;
        });
      }
    ).then(() => {
      combineLatest([
        this.variablePerformanceEngine.firmPerformanceMap$,
        this.variablePerformanceEngine.sectorPerformanceMap$
      ]).pipe(
        tap(([firmPerformanceMap, sectorPerformanceMap]) => {
          // for each stock seed
          this.stocks.map((stock: IStock, index: number) => {
            // get the firm performance
            const firmPerformance = firmPerformanceMap.get(stock.index_owner);
            // get the sector performance
            const sectorPerformance = sectorPerformanceMap.get(stock.index_sector);

            const totalChange = (firmPerformance || 0) + (sectorPerformance || 0);

            // set the stock performance
            const lastQuote = stock.quotes.getLast();

            const newQuote: IQuote = {
              change: totalChange,
              last: lastQuote ? lastQuote?.last + totalChange : totalChange
            };

            stock.quotes.add(newQuote);
          });
        })
      ).subscribe();
    });;
  }
}
