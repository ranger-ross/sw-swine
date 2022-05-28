import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UpcomingLittersComponent} from './upcoming-litters.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DatabaseService} from "../service/database.service";
import {of} from "rxjs";

describe('UpcomingLittersComponent', () => {
  let component: UpcomingLittersComponent;
  let fixture: ComponentFixture<UpcomingLittersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingLittersComponent],
      imports: [
        NgbModule
      ],
      providers: [
        {provide: DatabaseService, useValue: {getUpcomingLitters: () => of([])}}
      ],
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
