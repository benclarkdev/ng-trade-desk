import { CommonModule, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IDashboardTableRow } from '../../interfaces/dashboard-table-row.interface';

@Component({
  selector: 'dashboard-table',
  standalone: true,
  imports: [
    CommonModule,
    PercentPipe
  ],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.scss'
})
export class DashboardTableComponent {
  @Input() isLoading: boolean = true;
  @Input() nameColumnHeaderText: string = 'Name';
  @Input() rows!: IDashboardTableRow[];
  @Input() tableLabel: string = '';
}
