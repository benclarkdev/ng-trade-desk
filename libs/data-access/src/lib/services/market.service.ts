import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

  topFirms$(): Observable<Firm> {
    return of({})
  }

  topSectors$(): Observable<Sector> {
    return of({})
  }

  topStocks$(): Observable<Stock> {
    return of({})
  }
}
