import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageViewModalComponent } from './image-view-modal.component';

describe('ImageViewModalComponent', () => {
  let component: ImageViewModalComponent;
  let fixture: ComponentFixture<ImageViewModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewModalComponent ]
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
