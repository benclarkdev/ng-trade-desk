import { IHolding } from './holding.interface';

export interface IPortfolio {
  holdings: IHolding[];
  totalChange: number;
  totalLiquid: number;
  totalInvested: number;
}