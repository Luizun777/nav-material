import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Input() texto: string;
  @Input() descativar: boolean = false;
  @Input() btnRelleno: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
