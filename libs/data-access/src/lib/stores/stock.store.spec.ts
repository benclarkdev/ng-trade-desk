import { TestBed } from '@angular/core/testing';

import { StockStore } from './stock.store';
import { StockService } from '../services/stock.service';

let store: StockStore;
let stockServiceSpy: jasmine.SpyObj<StockService>;

describe('StockStore', () => {
  beforeEach(() => {
    stockServiceSpy = jasmine.createSpyObj<StockService>('stockService', ['getStock$']);

    TestBed.configureTestingModule({
      providers: [
        { provide: StockService, useValue: stockServiceSpy }
      ]
    });
    store = TestBed.inject(StockStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
