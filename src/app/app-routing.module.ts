import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Componentes


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'heroes',component:HeroesComponent},
  //Si pone una ruta incorrecta lo redirigmos al home
  { path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }