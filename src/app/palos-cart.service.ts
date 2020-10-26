import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Palos } from './palos-list/palos';


/*Maneja la logica del carrito */
@Injectable({
  providedIn: 'root'
})
export class PalosCartService {

  private _carritoDePalos: Palos[] = [];

  carritoDePalos: BehaviorSubject<Palos[]> = new BehaviorSubject([]);

  constructor() { }

  agregarAlCarro(palos: Palos) {
    let item: Palos = this._carritoDePalos.find((v1) => v1.Modelo == palos.Modelo && v1.Marca == palos.Marca  );
    if(!item){
      this._carritoDePalos.push({ ... palos});
    }else {
      item.cantidadCompra+=palos.cantidadCompra;
    }
    console.table(this._carritoDePalos);
    this.carritoDePalos.next(this._carritoDePalos); //equivale al emit del evento
  }




}
