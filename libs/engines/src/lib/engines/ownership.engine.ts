import { Injectable } from '@angular/core';
import { IPrimaryOwner } from '@ng-trade-desk/data-access';
import { FIRM_SEEDS } from '../seeds/firm-seeds';

@Injectable({
  providedIn: 'root'
})
export class OwnershipEngine {
  /**
   * Generates owners for a stock and their performance
  */
  initialize(): IPrimaryOwner[] {
    return FIRM_SEEDS.map((seed: string) => { 
      return {
        name: seed,
        performance: 1
      } 
    });
  }
}