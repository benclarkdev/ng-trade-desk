import { Component, OnInit } from '@angular/core';

import { ActionButtonsComponent } from '@ng-trade-desk/features/stock-actions';

import { IPortfolio, PortfolioService } from '@ng-trade-desk/data-access';

@Component({
  selector: 'portfolio',
  standalone: true,
  imports: [
    ActionButtonsComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  portfolio!: IPortfolio;

  constructor(
    private portfolioService: PortfolioService
  ){}

  ngOnInit(): void {
    this.portfolioService.getPortfolio$().subscribe(
      (portfolio: IPortfolio) => {
        this.portfolio = portfolio;
      });
  }
}
