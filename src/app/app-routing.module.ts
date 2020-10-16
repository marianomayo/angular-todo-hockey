import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { HomeComponent } from './home/home.component';
import { PalosListComponent } from './palos-list/palos-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nuestrospalos', component: PalosListComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'contactenos', component: ContactenosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
