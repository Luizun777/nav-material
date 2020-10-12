import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Translate
import { TranslateModule } from '@ngx-translate/core';

// Materials
import { MaterialsModule } from '../materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { ComponentModule } from '../component/component.module';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component'
import { NavComponent } from './header/nav/nav.component'
import { ContenedorFechaComponent } from './header/contenedor-fecha/contenedor-fecha.component';
import { FiltroSelectComponent } from './header/filtro-select/filtro-select.component'

@NgModule({
  imports: [
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TranslateModule,
    ComponentModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    ContenedorFechaComponent,
    FiltroSelectComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    ContenedorFechaComponent
  ]
})
export class SharedModule { }
