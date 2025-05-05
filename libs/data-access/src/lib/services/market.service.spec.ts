import { TestBed } from '@angular/core/testing';

import { MarketService } from './market.service';
import { PriceService } from './price.service';

let service: MarketService;
let priceServiceSpy: jasmine.SpyObj<PriceService>;

describe('MarketService', () => {
  beforeEach(() => {
    priceServiceSpy = jasmine.createSpyObj<PriceService>('priceServiceSpy')
    TestBed.configureTestingModule({
      providers: [
        { provide: PriceService, useValue: priceServiceSpy }
      ]
    });
    service = TestBed.inject(MarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
