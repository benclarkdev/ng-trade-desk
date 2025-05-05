import { Injectable } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Observable, of, tap } from 'rxjs';
import { IStock } from '../models/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockStore {
  cache: Map<string, IStock> = new Map<string, IStock>();

  constructor(
    private stockService: StockService
  ) { }

  getStock$(symbol: string): Observable<IStock> {
    const cached = this.cache.get(symbol);
    
    if (cached) {
      return of(cached);
    }

    return this.stockService.getStock$(symbol).pipe(
      tap((stock: IStock)=> this.cache.set(symbol, stock)),
    );
  }
}
