import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {WinnersComponent} from './winners/winners.component';
import {HerdSiresComponent} from './herd-sires/herd-sires.component';
import {UpcomingLittersComponent} from './upcoming-litters/upcoming-litters.component';
import {AboutComponent} from './about/about.component';

export class RouteConstants {
  public static readonly HOME = '';
  public static readonly WINNERS = 'winners';
  public static readonly HERD_SIRES = 'herd-sires';
  public static readonly UPCOMING_LITTERS = 'upcoming-litters';
  public static readonly ABOUT = 'about';
}

const routes: Routes = [
  {
    path: RouteConstants.HOME,
    component: HomeComponent
  },
  {
    path: RouteConstants.WINNERS,
    component: WinnersComponent
  },
  {
    path: RouteConstants.HERD_SIRES,
    component: HerdSiresComponent
  },
  {
    path: RouteConstants.UPCOMING_LITTERS,
    component: UpcomingLittersComponent
  },
  {
    path: RouteConstants.ABOUT,
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
