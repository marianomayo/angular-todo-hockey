import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { HomeComponent } from './home/home.component';
import { PalosShopComponent } from './palos-shop/palos-shop.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nuestrospalos', component: PalosShopComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'contactenos', component: ContactenosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
