import { Injectable } from '@angular/core';
import { Litter } from '../model/litter.model';
import { Observable, of, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WinnerYear } from '../model/winner-year.model';
import { HerdSire } from '../model/herd-sire.model';
import { Winner } from '../model/winner.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getUpcomingLitters(): Observable<Litter[]> {
    return this.http.get('assets/litters.csv', { responseType: 'text' })
      .pipe(
        mergeMap(data => of(DatabaseService.csvStringToLitters(data)))
      );
  }

  getWinners(): Observable<WinnerYear[]> {
    return this.http.get('assets/winners.csv', { responseType: 'text' })
      .pipe(
        mergeMap(data => of(DatabaseService.csvStringToWinners(data)))
      );
  }

  getHerdSires(): Observable<HerdSire[]> {
    return this.http.get('assets/herd-sires.csv', { responseType: 'text' })
      .pipe(
        mergeMap(data => of(DatabaseService.csvStringToHerdSires(data)))
      );
  }

  private static csvStringToHerdSires(data: string): HerdSire[] {
    return data
      .split('\n')
      .filter(line => !!line && line.trim() != '')
      .map(line => {
        let attributes = line
          .split(',')
          .map(attr => attr.split('^').join(','));
        let sire = new HerdSire();
        sire.name = attributes[0];
        sire.imagePath = attributes[1];
        sire.description = attributes[2];
        sire.link = attributes[3];
        return sire;
      });
  }

  private static csvStringToWinners(data: string): WinnerYear[] {
    let winners = data
      .split('\n')
      .filter(line => !!line && line.trim() != '')
      .map(line => {
        let attributes = line.split(',');
        let winner = new Winner();
        winner.year = Number(attributes[0]);
        winner.imagePath = attributes[1];
        winner.show = attributes[2];
        winner.place = attributes[3];
        winner.name = attributes[4];
        return winner;
      });

    let years: WinnerYear[] = [];
    for (let winner of winners) {
      let year = years.find(y => y.year == winner.year);
      if (!year) {
        year = new WinnerYear();
        year.year = winner.year;
        years.push(year);
      }

      year.winners.push(winner);
    }
    return years;
  }


  private static csvStringToLitters(data: string): Litter[] {
    return data
      .split('\n')
      .map(line => {
        let attributes = line.split(',');
        let litter = new Litter();
        litter.breed = attributes[0];
        litter.litterNumber = Number(attributes[1]);
        litter.sire = attributes[2];
        litter.damSire = attributes[3];
        litter.dob = attributes[4];
        return litter;
      });
  }



}
