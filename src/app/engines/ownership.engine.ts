import { Injectable } from '@angular/core';
import { IPrimaryOwner } from '../models/stock.interface';
import { FIRM_SEEDS } from './data/firm-seeds';

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