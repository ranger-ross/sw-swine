import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DatabaseService } from './service/database.service';
import { UpcomingLittersComponent } from './upcoming-litters/upcoming-litters.component';
import { WinnersComponent } from './winners/winners.component';
import { HerdSiresComponent } from './herd-sires/herd-sires.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ImageViewModalComponent} from "./image-view-modal/image-view-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    WinnersComponent,
    HerdSiresComponent,
    UpcomingLittersComponent,
    AboutComponent,
    ImageViewModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
