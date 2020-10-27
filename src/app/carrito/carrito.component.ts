import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PalosCartService } from '../palos-cart.service';
import { Palos } from '../palos-list/palos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carritoDePalos: Palos[] = [];
  carritoDePalos$: Observable<Palos[]>;
  constructor(private cart: PalosCartService) {
    this.carritoDePalos$ = cart.carritoDePalos.asObservable();
    cart.carritoDePalos.subscribe(c => this.carritoDePalos = c);
   }


  ngOnInit(): void {
  }

}
