export interface IStockSeed {
  name: string,
  index_market: number,
  index_sector: number,
  symbol: string
}

export const STOCK_SEEDS: IStockSeed[] = [
  // airlines
  { 
    name: 'Buenos Aeros',
    index_market: 0,
    index_sector: 0,
    symbol: 'BUNO'
  },
  {
    name: 'Royal Air',
    index_market: 3,
    index_sector: 0,
    symbol: 'ROYL'
  },
  { 
    name: 'Eagle Air',
    index_market: 2,
    index_sector: 0,
    symbol: 'EAGL'
  },

  // consumer goods
  {
    name: 'Buck Hardware',
    index_market: 0,
    index_sector: 1,
    symbol: 'BUCK'
  },
  {
    name: 'Polybus',
    index_market: 3,
    index_sector: 1,
    symbol: 'POLY'
  },
  {
    name: 'Oven-Glo',
    index_market: 2,
    index_sector: 1,
    symbol: 'OGLO'
  },

  // finance
  {
    name: 'Dennison-Hawthorne',
    index_market: 2,
    index_sector: 1,
    symbol: 'DH'
  },
  {
    name: 'Ericcson Capital',
    index_market: 0,
    index_sector: 1,
    symbol: 'ERIC'
  },
  {
    name: 'Yamamoto',
    index_market: 3,
    index_sector: 1,
    symbol: 'YAMA'
  },

  // health
  {
    name: 'Bernsham Health',
    index_market: 0,
    index_sector: 3,
    symbol: 'BH'
  },
  { 
    name: 'Ivory & Lye',
    index_market: 2,
    index_sector: 3,
    symbol: 'IVLY'
  },

  // manufacturing
  { 
    name: 'Cupmann',
    index_market: 3,
    index_sector: 4,
    symbol: 'CPMN'
  },
  { 
    name: 'Adieu Industries',
    index_market: 0,
    index_sector: 4,
    symbol: 'ADEU'
  },

  // materials
  { 
    name: 'Chicago Steel',
    index_market: 2,
    index_sector: 5,
    symbol: 'UKS'
  },
  { 
    name: 'Hashimoto Chemicals',
    index_market: 3,
    index_sector: 5,
    symbol: 'IVLY'
  },

  // railroads
  { 
    name: 'M & N Railways',
    index_market: 0,
    index_sector: 6,
    symbol: 'MN'
  },
  { 
    name: 'Tokyo Lines',
    index_market: 3,
    index_sector: 6,
    symbol: 'TYOL'
  },
  { 
    name: 'HC Freight',
    index_market: 2,
    index_sector: 6,
    symbol: 'HCF'
  },
  
  // real estate
  { 
    name: 'Quentin Glover',
    index_market: 2,
    index_sector: 7,
    symbol: 'QG'
  },
  { 
    name: 'Oxford Bell',
    index_market: 0,
    index_sector: 7,
    symbol: 'OB'
  },
  { 
    name: 'Yao Li',
    index_market: 0,
    index_sector: 7,
    symbol: 'YL'
  },
  { 
    name: 'Yellow Road',
    index_market: 3,
    index_sector: 7,
    symbol: 'YLRD'
  },

  // services
  {
    name: 'Room & Board',
    index_market: 0,
    index_sector: 8,
    symbol: 'RMBD'
  },
  {
    name: 'Gordman Tax',
    index_market: 2,
    index_sector: 8,
    symbol: 'GT'
  },
  {
    name: 'Tao Ltd.',
    index_market: 3,
    index_sector: 8,
    symbol: 'TAO'
  },
  {
    name: 'Nekko',
    index_market: 2,
    index_sector: 8,
    symbol: 'NKO'
  },

  // tech
  {
    name: 'Blue Box',
    index_market: 0,
    index_sector: 8,
    symbol: 'BB'
  },
  {
    name: '38 Signs',
    index_market: 2,
    index_sector: 8,
    symbol: 'SIGN'
  },
  {
    name: 'Ping Media',
    index_market: 2,
    index_sector: 8,
    symbol: 'PING'
  },
  {
    name: 'Szechuan Ltd.',
    index_market: 3,
    index_sector: 8,
    symbol: 'ZECH'
  }
];