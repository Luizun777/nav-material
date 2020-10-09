import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Translate
import { TranslateModule } from '@ngx-translate/core';

// Materials
import { MaterialsModule } from '../materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { ComponentModule } from '../component/component.module';

import { HeaderComponent } from './header/header.component'
import { NavComponent } from './header/nav/nav.component'
import { ContenedorFechaComponent } from './header/contenedor-fecha/contenedor-fecha.component'

@NgModule({
  imports: [
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    ContenedorFechaComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    ContenedorFechaComponent
  ]
})
export class SharedModule { }
