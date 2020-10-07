import { Injectable } from '@angular/core';

export interface PeriodicElement {
  name: string;
  nav_id: number;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    nav_id: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H'
  },
  {
    position: 2,
    nav_id: 1,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He'
  },
  {
    position: 3,
    nav_id: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li'
  },
  {
    position: 4,
    nav_id: 1,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be'
  },
  {
    position: 5,
    nav_id: 1,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B'
  },
  {
    position: 6,
    nav_id: 2,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C'
  },
  {
    position: 7,
    nav_id: 2,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N'
  },
  {
    position: 8,
    nav_id: 3,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O'
  },
  {
    position: 9,
    nav_id: 2,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F'
  },
  {
    position: 10,
    nav_id: 1,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne'
  },
];

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor() { }

  getData() {
    return ELEMENT_DATA;
  }
}
