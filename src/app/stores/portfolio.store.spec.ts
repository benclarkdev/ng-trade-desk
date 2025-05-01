import { TestBed } from '@angular/core/testing';

import { PortfolioStore } from './portfolio.store';

let store: PortfolioStore;

describe('PortfolioStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(PortfolioStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
