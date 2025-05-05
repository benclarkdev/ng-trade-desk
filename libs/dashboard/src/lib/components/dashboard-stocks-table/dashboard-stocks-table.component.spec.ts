import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStocksTableComponent } from './dashboard-stocks-table.component';

let component: DashboardStocksTableComponent;
let fixture: ComponentFixture<DashboardStocksTableComponent>;

describe('DashboardStocksTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStocksTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardStocksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
