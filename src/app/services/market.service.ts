import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

  topFirms$(): Observable<Firm> {
    
  }

  topSectors$(): Observable<Sector> {

  }

  topStocks$(): Observable<Stock> {
    
  }
}
