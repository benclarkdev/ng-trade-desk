import { Component, OnInit } from '@angular/core';

import { ActionButtonsComponent } from '@features/stock-actions';

import { IPortfolio } from '../../models/portfolio.interface';
import { PortfolioService } from '../../services/portfolio.service';

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
