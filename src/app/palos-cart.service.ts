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
    //cualquiera de las dos formas sirve para calcular el total
    this._total = 0;
    for(let i=0; i<this._carritoDePalos.length; i++){
      this._total += this._carritoDePalos[i].Precio * this._carritoDePalos[i].cantidadCompra;
    }
    //esta linea es la misma que la 31
    this._total = this._carritoDePalos.reduce((a,c) => c.Precio * c.cantidadCompra + a, 0);
    //fun fun function buscar informacion !! 
    //programacion functional javascript ! 
    
    this.carritoDePalos.next(this._carritoDePalos); //equivale al emit del evento
    this.cartQuantity.next(this._quantity); // mando a nav bar la cantidad de productos que hay asi lo muestro
    this.total.next(this._total); //envio el total al carrito asi lo publico.
  }

  private calcularTotal(){

  }
}
