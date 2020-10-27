import { Component, OnInit } from '@angular/core';
import { infohome } from './infohome';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

info: infohome[]=[{
  imagenhome1: "assets/img/logohome.jpeg",
  imagenhome2: "assets/img/home2.jpg",
  imagenhome3: "assets/img/home3.jpg",
}]
  constructor() { }

  ngOnInit(): void {
  }

}
