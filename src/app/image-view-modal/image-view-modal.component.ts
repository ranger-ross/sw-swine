import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-view-modal',
  templateUrl: './image-view-modal.component.html',
  styleUrls: ['./image-view-modal.component.scss']
})
export class ImageViewModalComponent implements OnInit {

  title: string;
  imagePath: string;

  constructor(private $activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  close() {
    this.$activeModal.dismiss();
  }
}
