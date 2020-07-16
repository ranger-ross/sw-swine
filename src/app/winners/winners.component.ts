import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
import { WinnerYear } from '../model/winner-year.model';
import { Winner } from '../model/winner.model';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  winnerContextPath = 'assets/winners/';
  years: WinnerYear[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getWinners().subscribe(years => {
      console.log('Loaded Winners', years);
      this.years = years
    })
  }

  openWinner(winner: Winner) {
    console.log('todo: open winner...', winner);
  }
}
