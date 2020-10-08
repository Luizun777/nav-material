import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit, OnChanges {

  range = new FormGroup({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required])
  });

  @Input() limpiar: boolean = false;
  @Output() rangoFechas: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if (!JSON.parse(localStorage.getItem('fecha-filtro'))) {
      this.limpiarForm();
    } else {
      this.range.setValue({
        start: JSON.parse(localStorage.getItem('fecha-filtro')).start ? JSON.parse(localStorage.getItem('fecha-filtro')).start : '',
        end: JSON.parse(localStorage.getItem('fecha-filtro')).end ? JSON.parse(localStorage.getItem('fecha-filtro')).end : ''
      });
    }
  }

  ngOnChanges() {
    if (this.limpiar) {
      this.limpiarForm();
    }
  }

  changeFch() {
    this.rangoFechas.emit((this.range.value['start'] && this.range.value['end']) ? this.range.value : {});
  }

  limpiarForm() {
    this.range.reset({
      start: '',
      end: ''
    });
    localStorage.setItem('fecha-filtro', JSON.stringify({}));
  }

}
