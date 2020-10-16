import { Component, OnInit } from '@angular/core';
import { palo } from './palos';
@Component({
  selector: 'app-palos-list',
  templateUrl: './palos-list.component.html',
  styleUrls: ['./palos-list.component.scss']
})
export class PalosListComponent implements OnInit {
  palos: palo[] = [
    {
      Marca: "Grays",
      Modelo: "nano 7",
      Precio: 20000,
      Stock: 10,
      Oferta: false,
      imagen: "assets/img/nano7.jpeg",
      cantidadCompra: 0,
      Compra: 0,
    },{
      Marca: "Vlack",
      Modelo: "Pro Bow",
      Precio: 19000,
      Stock: 8,
      Oferta: false,
      imagen: "assets/img/vlackPro.jpeg",
      cantidadCompra: 0,
      Compra: 0,
    },{
      Marca: "Obo",
      Modelo: "Straing As",
      Precio: 10000,
      Stock:0,
      Oferta: false,
      imagen: "assets/img/oboStraing.jpeg",
      cantidadCompra: 0,
      Compra: 0,
    },{
      Marca: "Vlack",
      Modelo: "Emuli Bow",
      Precio: 15000,
      Stock:6,
      Oferta: false,
      imagen: "assets/img/oboStraing.jpeg",
      cantidadCompra: 0,
      Compra: 0,
    }
  ]

  titleTable = 'Nuestros Palos';
  constructor() { }

  ngOnInit(): void {
  }
  restar(palo: palo): void{
    if(palo.cantidadCompra>0){
      palo.cantidadCompra--;
    }
  }
  sumar(palo: palo): void{
    if(palo.cantidadCompra<palo.Stock)
    palo.cantidadCompra++;
  }

  comprar(palo: palo): void{
    if((palo.cantidadCompra>0)&&(palo.Stock>0)){
      palo.Compra += palo.cantidadCompra;
      palo.Stock = palo.Stock - palo.Compra;
    }
  }

}
