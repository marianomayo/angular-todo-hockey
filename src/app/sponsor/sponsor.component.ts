import { Component, OnInit } from '@angular/core';
import { infosponsor } from './infosponsor';
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  infosponsor: infosponsor[]=[{
    imagensponsor1: "assets/img/grays.jpg",
    imagensponsor2: "assets/img/obo.jpg",
    imagensponsor3: "assets/img/vlack.jpg",
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
