import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { FIRM_SEEDS } from '../seeds/firm-seeds';
import { SECTOR_SEEDS } from '../seeds/sector-seeds';

@Injectable({
  providedIn: 'root'
})
export class VariablePerformanceEngine {
  // generates performance for variables used together to determine stock fluctuations
  firmPerformanceSubj = new BehaviorSubject<Map<number, number>>(new Map<number, number>());
  firmPerformanceMap$: Observable<Map<number, number>> = this.firmPerformanceSubj.asObservable();

  sectorPerformanceSubj = new BehaviorSubject<Map<number, number>>(new Map<number, number>());
  sectorPerformanceMap$: Observable<Map<number, number>> = this.sectorPerformanceSubj.asObservable();

  generate(): void {
    this.firmPerformanceSubj.next(this.generateFirmPerformance());
    this.sectorPerformanceSubj.next(this.generateSectorPerformance());
  }

  private generateFirmPerformance(): Map<number, number> {
    let result = new Map<number, number>();

    // for each through the firms
    FIRM_SEEDS.map((firm: string, index: number) => {
      // create a performance value
      const performance = this.generateRandomNumber(-15,15);

      // add it to the map
      result.set(index, performance);
    });

    // return the result
    return result;
  }

  private generateSectorPerformance(): Map<number, number> {
    let result = new Map<number, number>();

    // for each through the sectors
    SECTOR_SEEDS.map((sectorName: string, index: number) => {
      // create a performance value
      const performance = this.generateRandomNumber(-15,15);
      // add it to the map
      result.set(index, performance);
    });

    // return the result
    return result;
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
