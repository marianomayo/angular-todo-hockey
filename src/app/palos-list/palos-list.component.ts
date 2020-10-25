import { Component, OnInit } from '@angular/core';
import { Palos } from './palos';
@Component({
  selector: 'app-palos-list',
  templateUrl: './palos-list.component.html',
  styleUrls: ['./palos-list.component.scss']
})
export class PalosListComponent implements OnInit {
  palos: Palos[] = [
    {
      Marca: "Grays",
      Modelo: "nano 7",
      Precio: 20000,
      Stock: 10,
      Oferta: false,
      imagen: "assets/img/nano7.jpeg",
      cantidadCompra: 0,
    },{
      Marca: "Vlack",
      Modelo: "Pro Bow",
      Precio: 19000,
      Stock: 8,
      Oferta: false,
      imagen: "assets/img/vlackPro.jpeg",
      cantidadCompra: 0,
    },{
      Marca: "Obo",
      Modelo: "Straing As",
      Precio: 10000,
      Stock:0,
      Oferta: false,
      imagen: "assets/img/oboStraing.jpeg",
      cantidadCompra: 0,
    },{
      Marca: "Vlack",
      Modelo: "Emuli Bow",
      Precio: 15000,
      Stock:6,
      Oferta: false,
      imagen: "assets/img/oboStraing.jpeg",
      cantidadCompra: 0,
    }
  ]
  titleTable = 'Nuestros Palos';
  constructor() { }

  ngOnInit(): void {
  }

  maximoAlcanzado(n: number){
    alert(n);
  }


}