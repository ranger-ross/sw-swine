import {Component, HostListener, OnInit} from '@angular/core';
import {DatabaseService} from '../service/database.service';
import {WinnerYear} from '../model/winner-year.model';
import {Winner} from '../model/winner.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageViewModalComponent} from '../image-view-modal/image-view-modal.component';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  winnerContextPath = 'assets/winners/';
  years: WinnerYear[] = [];
  batchSize = 4;
  currentBatch = 1;

  constructor(private databaseService: DatabaseService,
              private $modal: NgbModal) {
  }

  ngOnInit(): void {
    this.databaseService.getWinners().subscribe(years => {
      console.log('Loaded Winners', years);
      this.years = years;
    });
  }

  openWinner(winner: Winner) {
    console.log('opening winner', winner);
    const modal = this.$modal.open(ImageViewModalComponent, {
      size: 'xl'
    });
    modal.componentInstance.imagePath = this.winnerContextPath + winner.imagePath;
    if (winner.name && winner.name.trim() != '') {
      modal.componentInstance.title = winner.name;
      if (winner.place && winner.place.trim() != '') {
        modal.componentInstance.title += ' - ' + winner.place;
      }
    } else {
      modal.componentInstance.title = winner.year;
    }
  }

  get tableData() {
    const index = this.batchSize * this.currentBatch;

    if (index >= this.years.length) {
      return this.years;
    } else {
      return this.years.slice(0, index);
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight * 0.9)) {
      if ((this.batchSize * this.currentBatch) < this.years.length) {
        this.currentBatch += 1;
      }
    }
  }


}
