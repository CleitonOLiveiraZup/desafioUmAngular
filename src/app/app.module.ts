import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { SliderComponent } from './components/slider/slider.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HttpClientModule} from '@angular/common/http';
import { FilmesComponent } from './components/filmes/filmes.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlidesComponent } from './components/slides/slides.component';
import { MenuInicioComponent } from './components/menu-inicio/menu-inicio.component';
import { MenuInfantilComponent } from './components/menu-infantil/menu-infantil.component';
import { MenuFilmesComponent } from './components/menu-filmes/menu-filmes.component';
import { MenuSerieComponent } from './components/menu-serie/menu-serie.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FilmesComponent,
    NavBarComponent,
    SlidesComponent,
    MenuInicioComponent,
    MenuInfantilComponent,
    MenuFilmesComponent,
    MenuSerieComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
