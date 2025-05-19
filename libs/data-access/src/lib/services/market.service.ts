import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IListing } from '../models/stock.interface';
import { MarketEngine } from '@ng-trade-desk/engines';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(
    private marketEngine: MarketEngine
  ) { }

  checkInit(): Observable<boolean> {
    return of(this.marketEngine.seeds.length > 0)
  }

  topFirms$(): Observable<IListing> {
    return of({})
  }

  topSectors$(): Observable<IListing> {
    return of({})
  }

  topStocks$(): Observable<IListing> {
    return of({})
  }
}
