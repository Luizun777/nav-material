import { Component, OnInit } from '@angular/core';
import { FiltrosService } from 'src/app/services/filtros.service';
import { TablaService } from 'src/app/services/tabla.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navs: any = [
    {
      id: 0,
      nombre: 'Total',
      total: 0
    },
    {
      id: 1,
      nombre: 'Por Renovar',
      total: 0
    },
    {
      id: 2,
      nombre: 'Sin Renovacion Agil',
      total: 0
    },
    {
      id: 3,
      nombre: 'Renovadas',
      total: 0
    }
  ];
  activeLink = this.navs[0].id;

  constructor(
    private filtroSrv: FiltrosService,
    private tablaSrv: TablaService
  ) { }

  ngOnInit(): void {
    this.infoTabla();
  }

  infoTabla() {
    this.navs.forEach((e) => e.total = e.id === 0 ? this.tablaSrv.getData().length : this.tablaSrv.getData().filter((tabla: any) => tabla.nav_id === e.id).length);
  }

  cambiar(nav: any) {
    this.filtroSrv.changeNav.emit(nav.id);
    this.activeLink = nav.id;
  }

}
