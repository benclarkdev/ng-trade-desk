import { TestBed } from '@angular/core/testing';

import { OrderStore } from './order.store';

let store: OrderStore;

describe('OrderStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(OrderStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
