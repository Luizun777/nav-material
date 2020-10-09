import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Input() texto: string;
  @Input() descativar: boolean = false;
  @Input() btnRelleno: boolean = false;
  @Input() icon: FontAwesomeModule = null;

  constructor() { }

  ngOnInit(): void {
  }

}
