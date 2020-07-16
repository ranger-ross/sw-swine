import { Injectable } from '@angular/core';
import { Litter } from '../model/litter.model';
import { Observable, of, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
