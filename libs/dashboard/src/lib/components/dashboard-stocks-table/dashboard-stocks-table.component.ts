import { CommonModule, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ActionButtonsComponent } from '@features/stock-actions';

import { IDashboardStockTableRow } from '../../interfaces/dashboard-stock-table-row.interface';

@Component({
  selector: 'dashboard-stocks-table',
  standalone: true,
  imports: [
    ActionButtonsComponent,
    CommonModule,
    PercentPipe,
    RouterLink,
  ],
  templateUrl: './dashboard-stocks-table.component.html',
  styleUrl: './dashboard-stocks-table.component.scss'
})
export class DashboardStocksTableComponent {
  @Input() isLoading: boolean = true;
  @Input() rows: IDashboardStockTableRow[] = [];
}
