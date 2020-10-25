import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Palos } from '../palos-list/palos';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad : number;

  @Input()
  max : number;

  @Output()
  cantidadChange : EventEmitter<number> = new EventEmitter <number>();

  @Output()
  maximoAlcanzado : EventEmitter<number> = new EventEmitter <number>();

  

  ngOnInit(): void {
  }

  restar(): void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  sumar(): void{
    if(this.cantidad<this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maximoAlcanzado.emit(this.max);
    }
    
  }

  enElCambioDeLaCantidad(event): void{
    //compruebo que no sea negativo y en caso de serlo lo vuelvo positivo
    if(event.target.value < 0){
      event.target.value = event.target.value*(-1);
      this.cantidad = event.target.value;
      this.cantidadChange.emit(this.cantidad);
    }
    //se comprueba que la cantidad ingresada no supere el stock
    if(event.target.value > this.max){
      this.cantidad = this.max;
      this.cantidadChange.emit(this.cantidad);
    }
  }

}
