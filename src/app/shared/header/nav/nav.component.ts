import { Component, OnInit } from '@angular/core';
import { FiltrosService } from 'src/app/services/filtros.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navs: any = [
    {
      id: 0,
      nombre: 'Total'
    },
    {
      id: 1,
      nombre: 'Por Renovar'
    },
    {
      id: 2,
      nombre: 'Sin Renovacion Agil'
    },
    {
      id: 3,
      nombre: 'Renovadas'
    }
  ];
  activeLink = this.navs[0].id;

  constructor(
    private filtroSrv: FiltrosService
  ) { }

  ngOnInit(): void {
  }

  cambiar(nav: any) {
    this.filtroSrv.changeNav.emit(nav.id);
    this.activeLink = nav.id;
  }

}
