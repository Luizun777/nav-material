import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatSliderModule,
    MatTabsModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class MaterialsModule { }