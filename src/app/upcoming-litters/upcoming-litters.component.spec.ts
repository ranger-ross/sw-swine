import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpcomingLittersComponent } from './upcoming-litters.component';

describe('UpcomingLittersComponent', () => {
  let component: UpcomingLittersComponent;
  let fixture: ComponentFixture<UpcomingLittersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingLittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
