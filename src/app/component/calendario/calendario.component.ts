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
  }

  ngOnChanges() {
    if (this.limpiar) {
      this.limpiarForm();
    }
  }

  changeFch() {
    if (this.range.valid) {
      this.rangoFechas.emit(this.range.value);
    }
  }

  limpiarForm() {
    this.range.reset({
      start: '',
      end: ''
    });
  }

}
