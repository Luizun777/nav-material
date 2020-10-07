import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatSliderModule,
    MatTabsModule
  ],
  exports: [
    MatSliderModule,
    MatTabsModule
  ]
})
export class MaterialsModule { }