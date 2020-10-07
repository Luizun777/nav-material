import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navs: any = ['Total', 'Por Renovar', 'Sin Renovacion Agil', 'Renovadas'];
  activeLink = this.navs[0];

  constructor() { }

  ngOnInit(): void {
  }

}
