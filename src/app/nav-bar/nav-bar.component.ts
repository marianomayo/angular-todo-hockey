import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PalosCartService } from '../palos-cart.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  cartQuantity$: Observable<number>;
  quantity: number;
  constructor( private cart: PalosCartService,) {
    this.cartQuantity$ = cart.cartQuantity.asObservable();
    this.cartQuantity$.subscribe(value => {
      this.quantity = value;
    });
   }

  ngOnInit(): void {
  }

}
