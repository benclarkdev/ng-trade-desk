import { Market, Sector } from '../../models/stock.interface';

export interface IStockSeed {
  name: string,
  market: Market,
  sector: Sector,
  symbol: string
}

export const STOCK_SEEDS: IStockSeed[] = [
  // airlines
  { 
    name: 'Buenos Aeros',
    market: Market.DOW_JONES,
    sector: Sector.AIRLINE,
    symbol: 'BUNO'
  },
  {
    name: 'Royal Air',
    market: Market.NIKKEII,
    sector: Sector.AIRLINE,
    symbol: 'ROYL'
  },
  { 
    name: 'Eagle Air',
    market: Market.NASDAQ,
    sector: Sector.AIRLINE,
    symbol: 'EAGL'
  },

  // consumer goods
  {
    name: 'Buck Hardware',
    market: Market.DOW_JONES,
    sector: Sector.CONSUMER_GOODS,
    symbol: 'BUCK'
  },
  {
    name: 'Polybus',
    market: Market.NIKKEII,
    sector: Sector.CONSUMER_GOODS,
    symbol: 'POLY'
  },
  {
    name: 'Oven-Glo',
    market: Market.NASDAQ,
    sector: Sector.CONSUMER_GOODS,
    symbol: 'OGLO'
  },

  // finance
  {
    name: 'Dennison-Hawthorne',
    market: Market.NASDAQ,
    sector: Sector.CONSUMER_GOODS,
    symbol: 'DH'
  },
  {
    name: 'Ericcson Capital',
    market: Market.DOW_JONES,
    sector: Sector.CONSUMER_GOODS,
    symbol: 'ERIC'
  },
  {
    name: 'Yamamoto',
    market: Market.NIKKEII,
    sector: Sector.CONSUMER_GOODS,
    symbol: 'YAMA'
  },

  // health
  {
    name: 'Bernsham Health',
    market: Market.DOW_JONES,
    sector: Sector.HEALTH,
    symbol: 'BH'
  },
  { 
    name: 'Ivory & Lye',
    market: Market.NASDAQ,
    sector: Sector.HEALTH,
    symbol: 'IVLY'
  },

  // manufacturing
  { 
    name: 'Cupmann',
    market: Market.NIKKEII,
    sector: Sector.MANUFACTURING,
    symbol: 'CPMN'
  },
  { 
    name: 'Adieu Industries',
    market: Market.DOW_JONES,
    sector: Sector.MANUFACTURING,
    symbol: 'ADEU'
  },

  // materials
  { 
    name: 'Chicago Steel',
    market: Market.NASDAQ,
    sector: Sector.MATERIALS,
    symbol: 'UKS'
  },
  { 
    name: 'Hashimoto Chemicals',
    market: Market.NIKKEII,
    sector: Sector.MATERIALS,
    symbol: 'IVLY'
  },

  // railroads
  { 
    name: 'M & N Railways',
    market: Market.DOW_JONES,
    sector: Sector.RAILROADS,
    symbol: 'MN'
  },
  { 
    name: 'Tokyo Lines',
    market: Market.NIKKEII,
    sector: Sector.RAILROADS,
    symbol: 'TYOL'
  },
  { 
    name: 'HC Freight',
    market: Market.NASDAQ,
    sector: Sector.RAILROADS,
    symbol: 'HCF'
  },
  
  // real estate
  { 
    name: 'Quentin Glover',
    market: Market.NASDAQ,
    sector: Sector.REAL_ESTATE,
    symbol: 'QG'
  },
  { 
    name: 'Oxford Bell',
    market: Market.DOW_JONES,
    sector: Sector.REAL_ESTATE,
    symbol: 'OB'
  },
  { 
    name: 'Yao Li',
    market: Market.DOW_JONES,
    sector: Sector.REAL_ESTATE,
    symbol: 'YL'
  },
  { 
    name: 'Yellow Road',
    market: Market.NIKKEII,
    sector: Sector.REAL_ESTATE,
    symbol: 'YLRD'
  },

  // services
  {
    name: 'Room & Board',
    market: Market.DOW_JONES,
    sector: Sector.SERVICES,
    symbol: 'RMBD'
  },
  {
    name: 'Gordman Tax',
    market: Market.NASDAQ,
    sector: Sector.SERVICES,
    symbol: 'GT'
  },
  {
    name: 'Tao Ltd.',
    market: Market.NIKKEII,
    sector: Sector.SERVICES,
    symbol: 'TAO'
  },
  {
    name: 'Nekko',
    market: Market.NASDAQ,
    sector: Sector.SERVICES,
    symbol: 'NKO'
  },

  // tech
  {
    name: 'Blue Box',
    market: Market.DOW_JONES,
    sector: Sector.SERVICES,
    symbol: 'BB'
  },
  {
    name: '38 Signs',
    market: Market.NASDAQ,
    sector: Sector.SERVICES,
    symbol: 'SIGN'
  },
  {
    name: 'Ping Media',
    market: Market.NASDAQ,
    sector: Sector.SERVICES,
    symbol: 'PING'
  },
  {
    name: 'Szechuan Ltd.',
    market: Market.NIKKEII,
    sector: Sector.SERVICES,
    symbol: 'ZECH'
  }
];