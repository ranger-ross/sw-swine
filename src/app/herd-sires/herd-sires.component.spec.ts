import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HerdSiresComponent } from './herd-sires.component';

describe('HerdSiresComponent', () => {
  let component: HerdSiresComponent;
  let fixture: ComponentFixture<HerdSiresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdSiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdSiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
