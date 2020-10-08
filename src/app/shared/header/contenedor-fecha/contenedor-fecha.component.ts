import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-fecha',
  templateUrl: './contenedor-fecha.component.html',
  styleUrls: ['./contenedor-fecha.component.scss']
})
export class ContenedorFechaComponent implements OnInit {

  tipoSelect: boolean;
  limpiar: boolean = false;
  nuevaFecha: any;

  constructor() { }

  ngOnInit(): void {
  }

  getFecha(fecha) {
    this.nuevaFecha = fecha;
  }

  btnLimpiar() {
    this.limpiar = true;
    setTimeout(() => this.limpiar = false, 100);
  }

  confirmar() {
    this.tipoSelect = !this.tipoSelect;
  }

}
