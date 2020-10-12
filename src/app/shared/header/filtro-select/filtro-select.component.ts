import { Component, OnInit } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filtro-select',
  templateUrl: './filtro-select.component.html',
  styleUrls: ['./filtro-select.component.scss']
})
export class FiltroSelectComponent implements OnInit {

  tipoSelect: boolean;
  allComplete: boolean = false;

  // icon
  iconFiltro = faSlidersH;

  task: any = {
    name: 'Activar Todos los campos',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Contratante', completed: false },
      {name: 'Nombre de Plan', completed: false },
      {name: 'No. Asegurado', completed: false },
      {name: 'Estatus de renovacíon', completed: false },
      {name: 'Inicio de vigencia', completed: false },
      {name: 'Fin de vigencia', completed: false },
      {name: 'Días fin vigencia', completed: false },
      {name: 'Número de póliza', completed: false },
      {name: 'Forma de pago', completed: false },
      {name: 'Conducto de pago', completed: false },
      {name: 'Proma total actual', completed: false },
      {name: 'Proma total a renovar', completed: false },
      {name: '% de incremento', completed: false },
      {name: 'Cliente identificado', completed: false },
      {name: 'Riesgo selecto', completed: false },
      {name: 'Carátula', completed: false }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) { return false; }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) { return; }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}
