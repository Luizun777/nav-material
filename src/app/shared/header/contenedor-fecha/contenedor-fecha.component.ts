import { Component, OnInit } from '@angular/core';
import { FiltrosService } from 'src/app/services/filtros.service';

@Component({
  selector: 'app-contenedor-fecha',
  templateUrl: './contenedor-fecha.component.html',
  styleUrls: ['./contenedor-fecha.component.scss']
})
export class ContenedorFechaComponent implements OnInit {

  tipoSelect: boolean;
  limpiar: boolean = false;
  nuevaFecha: any;

  fechaIn: string;
  fechaFn: string;

  constructor() { }

  ngOnInit(): void {
    this.validarFecha();
  }

  validarFecha() {
    if (!JSON.parse(localStorage.getItem('fecha-filtro'))) {
      localStorage.setItem('fecha-filtro', JSON.stringify({}));
    }
    this.fechaIn = JSON.parse(localStorage.getItem('fecha-filtro')).start ? JSON.parse(localStorage.getItem('fecha-filtro')).start : null;
    this.fechaFn = JSON.parse(localStorage.getItem('fecha-filtro')).end ? JSON.parse(localStorage.getItem('fecha-filtro')).end : null;
  }

  getFecha(fecha) {
    this.nuevaFecha = fecha;
  }

  btnLimpiar() {
    this.limpiar = true;
    setTimeout(() => {
      this.limpiar = false;
      this.tipoSelect = !this.tipoSelect;
      this.validarFecha();
    }, 100);
  }

  confirmar() {
    localStorage.setItem('fecha-filtro', JSON.stringify(this.nuevaFecha));
    this.validarFecha();
    this.tipoSelect = !this.tipoSelect;
  }

}
