import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    '../../assets/home/image_1.jpg',
    '../../assets/home/image_2.jpg',
    '../../assets/home/image_3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
