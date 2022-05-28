import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../service/database.service';
import {HerdSire} from '../model/herd-sire.model';

@Component({
  selector: 'app-herd-sires',
  templateUrl: './herd-sires.component.html',
  styleUrls: ['./herd-sires.component.scss']
})
export class HerdSiresComponent implements OnInit {

  imageContext = '../../assets/herd-sires/'
  herdSires: HerdSire[] = [];

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.databaseService.getHerdSires().subscribe(
      data => {
        console.log('Loaded Herd Sires', data);
        this.herdSires = data;
      }
    );
  }

}
