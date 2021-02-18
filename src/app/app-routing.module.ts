import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSerieComponent } from './components/menu-serie/menu-serie.component';
import { MenuInicioComponent } from './components/menu-inicio/menu-inicio.component';
import { MenuFilmesComponent } from './components/menu-filmes/menu-filmes.component';
import { MenuInfantilComponent } from './components/menu-infantil/menu-infantil.component';


const routes: Routes = [
  {path: '', component: MenuInicioComponent},
  {path: 'menu-inicio', component: MenuInicioComponent},
  {path: 'menu-serie', component: MenuSerieComponent},
  {path: 'menu-filmes', component: MenuFilmesComponent},
  {path: 'menu-infantil', component: MenuInfantilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
