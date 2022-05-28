import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HerdSiresComponent} from './herd-sires.component';
import {UpcomingLittersComponent} from "../upcoming-litters/upcoming-litters.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DatabaseService} from "../service/database.service";
import {of} from "rxjs";

describe('HerdSiresComponent', () => {
  let component: HerdSiresComponent;
  let fixture: ComponentFixture<HerdSiresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HerdSiresComponent],
      imports: [
        NgbModule
      ],
      providers: [
        {provide: DatabaseService, useValue: {getHerdSires: () => of([])}}
      ],
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
