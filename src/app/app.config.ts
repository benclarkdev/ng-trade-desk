import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { MarketEngine } from '@ng-trade-desk/engines';

import { routes } from './app.routes';

function initializeMarketData(marketEngine: MarketEngine): () => Promise<void> {
  // on the initialization of the application, we need to generate 7 days worth of market data
  return () => marketEngine.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    MarketEngine,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMarketData,
      multi: true,
      deps: [
        MarketEngine
      ]
    },
  ]
};
