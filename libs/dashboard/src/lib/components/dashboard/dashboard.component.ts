import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { MarketService } from '@ng-trade-desk/data-access';

import { IDashboardTableRow } from '../../interfaces/dashboard-table-row.interface';
import { DashboardTableComponent } from '../dashboard-table/dashboard-table.component';
import { IDashboardStockTableRow } from '../../interfaces/dashboard-stock-table-row.interface';
import { DashboardStocksTableComponent } from '../dashboard-stocks-table/dashboard-stocks-table.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardStocksTableComponent,
    DashboardTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @Input() nameColumnHeaderText: string = 'Name';

  isMarketsTableLoadingSubj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isMarketsTableLoading$: Observable<boolean> = this.isMarketsTableLoadingSubj.asObservable();
  marketTableRows$!: Observable<IDashboardTableRow[]>;

  isSectorsTableLoadingSubj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isSectorsTableLoading$: Observable<boolean> = this.isSectorsTableLoadingSubj.asObservable();
  sectorsTableRows$!: Observable<IDashboardTableRow[]>;

  isFirmsTableLoadingSubj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isFirmsTableLoading$: Observable<boolean> = this.isFirmsTableLoadingSubj.asObservable();
  firmsTableRows$!: Observable<IDashboardTableRow[]>;

  isStocksTableLoadingSubj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isStocksTableLoading$: Observable<boolean> = this.isFirmsTableLoadingSubj.asObservable();
  stocksTableRows$!: Observable<IDashboardStockTableRow[]>;

  constructor(
    private marketService: MarketService
  ){}

  ngOnInit(): void {
    this.marketService.checkInit()
      .pipe(
        tap((isInit: boolean) => {
          console.log('did it work', isInit);
        })
      ).subscribe();
  }
}
