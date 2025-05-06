import { Injectable } from '@angular/core';
import { PricingEngine } from './pricing.engine';

@Injectable({
  providedIn: 'root'
})
export class MarketEngine {
  /**
   * This engine generates market performance.
  */
  constructor(
    private pricingEngine: PricingEngine
  ) {}

  // TODO: On the initialization of the application, generate 7 days worth of performance.
  initialize(): void {}

  
}