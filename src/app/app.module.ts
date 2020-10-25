import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalosListComponent } from './palos-list/palos-list.component';
import { HomeComponent } from './home/home.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { PalosShopComponent } from './palos-shop/palos-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    PalosListComponent,
    HomeComponent,
    ContactenosComponent,
    CarritoComponent,
    InputIntegerComponent,
    PalosShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
