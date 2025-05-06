import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IListing } from '../models/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

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
