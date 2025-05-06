export interface IListing {
  
}

export interface IStock {
  name: string;
  last: number;
  market: Market;
  primary: IPrimaryOwner;
  sector: Sector;
  symbol: string;
}

export enum Market {
  DOW_JONES = 'dow',
  HANG_SENG = 'hang',
  NASDAQ = 'nasdaq',
  NIKKEII = 'nikkei'
}

export enum Sector {
  AIRLINE = 'airline',
  CONSUMER_GOODS = 'consumer-goods',
  FINANCE = 'finance',
  HEALTH = 'health',
  MANUFACTURING = 'manufacturing',
  MATERIALS = 'materials',
  RAILROADS = 'railroads',
  REAL_ESTATE = 'real-estate',
  SERVICES = 'services',
  TECH = 'tech',
}

export interface IPrimaryOwner {
  name: string;
  performance: number;
}
