import { CountLimitStack } from '../count-limit-stack';

export interface IQuote {
  change?: number;
  last: number;
}

export interface IStock {
  name: string;
  quotes: CountLimitStack<IQuote>;
  index_market: number;
  index_owner: number;
  index_sector: number;
  symbol: string;
}

export interface IPrimaryOwner {
  name: string;
  performance: number;
}

export enum Market {
  DOW_JONES = 'Dow Jones',
  HANG_SENG = 'Hang Seng',
  NASDAQ = 'Nasdaq',
  NIKKEII = 'Nikkei'
}

export enum Sector {
  AIRLINE = 'Airline',
  CONSUMER_GOODS = 'Consumer Goods',
  FINANCE = 'Finance',
  HEALTH = 'Health',
  MANUFACTURING = 'Manufacturing',
  MATERIALS = 'Materials',
  RAILROADS = 'Railroads',
  REAL_ESTATE = 'Real Estate',
  SERVICES = 'Services',
  TECH = 'Tech',
}