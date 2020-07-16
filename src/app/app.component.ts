import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.setupModalAnimations();
}

  setupModalAnimations() {
    const animateOut = () => {
      let backdrops = document.getElementsByClassName('modal-backdrop');
      let backdrop = backdrops[backdrops.length - 1];
      backdrop?.classList?.remove('show');

      let modals = document.getElementsByClassName('modal');
      let modal = modals[modals.length - 1];
      modal?.classList?.remove('show');
    };

    NgbModalRef.prototype['c'] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      animateOut();
      setTimeout(() => {
        this['c'](reason);
      }, 500);
    };
    NgbModalRef.prototype['d'] = NgbModalRef.prototype.dismiss;
    NgbModalRef.prototype.dismiss = function (reason: string) {
      animateOut();
      setTimeout(() => {
        this['d'](reason);
      }, 500);
    };
  }

}
