import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {WinnersComponent} from './winners.component';
import {DatabaseService} from "../service/database.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {of} from "rxjs";

describe('WinnersComponent', () => {
  let component: WinnersComponent;
  let fixture: ComponentFixture<WinnersComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WinnersComponent],
      imports: [
        NgbModule
      ],
      providers: [
        {provide: DatabaseService, useValue: {getWinners: () => of([])}}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
