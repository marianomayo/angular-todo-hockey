import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Palos } from './palos-list/palos';


/*Maneja la logica del carrito */
@Injectable({
  providedIn: 'root'
})
export class PalosCartService {

  private _carritoDePalos: Palos[] = [];
  _total = 0;
  _quantity = 0; // me sirve para contabilizar la cantidad de productos que hay
  carritoDePalos: BehaviorSubject<Palos[]> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  cartQuantity: BehaviorSubject<number> = new BehaviorSubject(this._quantity);
  constructor() { }
  
  agregarAlCarro(palos: Palos) {
    const item: Palos = this._carritoDePalos.find((v1) => v1.Modelo == palos.Modelo );
    if(!item){
      this._carritoDePalos.push({ ... palos});
      this._quantity++;
    }else {
      item.cantidadCompra+=palos.cantidadCompra;
    }
      this._carritoDePalos.forEach(p => {
      this._total += (p.Precio * p.cantidadCompra);
    });

    this.carritoDePalos.next(this._carritoDePalos); //equivale al emit del evento
    this.cartQuantity.next(this._quantity); // mando a nav bar la cantidad de productos que hay asi lo muestro
    this.total.next(this._total); //envio el total al carrito asi lo publico.
  }
}
