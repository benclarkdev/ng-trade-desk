import { Injectable } from '@angular/core';
import { OwnershipEngine } from './ownership.engine';

@Injectable({
  providedIn: 'root'
})
export class PricingEngine {
  /**
   * This engine generates prices for a stock, calculated on
   * a few variables.
  */
  constructor(
    private ownershipEngine: OwnershipEngine
  ){}
  
  getStockValue(): number {
    // TODO: How does a stock change?
    // sum of factors: market + sector + ownership
    // max change percentage
  }
}