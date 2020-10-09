import { NgModule } from '@angular/core';

// Translate
import { TranslateModule } from '@ngx-translate/core';

// Materials
import { MaterialsModule } from '../materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BotonComponent } from './boton/boton.component'
import { CalendarioComponent } from './calendario/calendario.component'
import { TableComponent } from './table/table.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule
  ],
  declarations: [
    BotonComponent,
    CalendarioComponent,
    TableComponent
  ],
  exports: [
    BotonComponent,
    CalendarioComponent,
    TableComponent
  ]
})
export class ComponentModule { }