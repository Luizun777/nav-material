import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-fecha',
  templateUrl: './contenedor-fecha.component.html',
  styleUrls: ['./contenedor-fecha.component.scss']
})
export class ContenedorFechaComponent implements OnInit {

  tipoSelect: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
