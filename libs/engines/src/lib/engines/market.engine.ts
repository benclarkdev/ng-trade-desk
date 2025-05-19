import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { PricingEngine } from './pricing.engine';
import { IStockSeed, STOCK_SEEDS } from '../seeds/stock-seeds';

@Injectable({
  providedIn: 'root'
})
export class MarketEngine {
  seeds: IStockSeed[] = [];
  /**
   * This engine generates market performance.
  */
  constructor(
    private pricingEngine: PricingEngine
  ) {}

  initialize(): Promise<void> {
    return of(STOCK_SEEDS).toPromise().then(
      (seeds: IStockSeed[] | undefined) => {
        this.seeds = seeds || [];
      }
    );
  }
}