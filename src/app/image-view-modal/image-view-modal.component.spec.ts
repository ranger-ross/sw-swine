import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ImageViewModalComponent} from './image-view-modal.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('ImageViewModalComponent', () => {
  let component: ImageViewModalComponent;
  let fixture: ComponentFixture<ImageViewModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImageViewModalComponent],
      imports: [
        NgbModule,
      ],
      providers: [
        {provide: NgbActiveModal, useValue: {}}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
