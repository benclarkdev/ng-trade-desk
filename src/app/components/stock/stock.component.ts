import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, Observable, switchMap, tap } from 'rxjs';

import { ActionButtonsComponent } from '@features/stock-actions';

import { IStock } from '../../models/stock.interface';
import { StockStore } from '../../stores/stock.store';

import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'stock',
  standalone: true,
  imports: [
    ActionButtonsComponent,
    ChartComponent
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit {
  symbol!: string;
  stock$!: Observable<IStock>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private stockStore: StockStore
  ){}

  ngOnInit(): void {
    this.stock$ = this.activatedRoute.paramMap.pipe(
      filter(params => !!params),
      switchMap((params) => {
        return params.get('symbol') ?? '';
      }),
      tap((symbol: string) => this.symbol = symbol),
      switchMap((symbol: string) => {
        return this.stockStore.getStock$(symbol);
      })
    );
  }
}
