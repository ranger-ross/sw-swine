import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
import { Litter } from '../model/litter.model';

@Component({
  selector: 'app-upcoming-litters',
  templateUrl: './upcoming-litters.component.html',
  styleUrls: ['./upcoming-litters.component.scss']
})
export class UpcomingLittersComponent implements OnInit {

  litters: Litter[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getUpcomingLitters().subscribe(
      data => {
        console.log('Loaded litters', data);
        this.litters = data;
      }
    )
  }

}
