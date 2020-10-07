import { Component, OnInit } from '@angular/core';
import { FiltrosService } from 'src/app/services/filtros.service';
import { TablaService } from 'src/app/services/tabla.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];

  constructor(
    private navSrv: FiltrosService,
    private tablaSrv: TablaService
  ) { }

  ngOnInit(): void {
    this.filtarTabla(0);
    this.escucharFiltro();
  }

  escucharFiltro() {
    this.navSrv.changeNav.subscribe((data: any) => {
      this.filtarTabla(data);
    });
  }

  filtarTabla(renovacion: number) {
    if (renovacion !== 0) {
      this.dataSource = this.tablaSrv.getData().filter((tabla: any) => tabla.nav_id === renovacion);
    } else {
      this.dataSource = this.tablaSrv.getData();
    }
  }

}
