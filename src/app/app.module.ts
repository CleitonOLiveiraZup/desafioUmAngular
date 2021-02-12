import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideComponent } from './slide/slide.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { MenuSerieComponent } from './menu-serie/menu-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlideComponent,
    MenuInicioComponent,
    MenuSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
