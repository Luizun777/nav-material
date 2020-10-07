import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  @Output() changeNav: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
