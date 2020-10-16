import { Component, OnInit } from '@angular/core';
import { infohome } from './infohome';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

info: infohome[]=[{
  imagenhome: "assets/img/logohome.jpeg",
}]
  constructor() { }

  ngOnInit(): void {
  }

}
