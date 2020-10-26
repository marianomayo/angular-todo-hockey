import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PalosCartService } from '../palos-cart.service';
import { Palos } from '../palos-list/palos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carritoDePalos: Palos[] = [];
  constructor(private cart: PalosCartService) {
    cart.carritoDePalos.subscribe(c => this.carritoDePalos = c);
   }

  ngOnInit(): void {
  }

}
