import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridBasicGridComponent } from './ag-grid-basic-grid/ag-grid-basic-grid.component';
import { CheckboxGenComponent } from './checkbox-gen/checkbox-gen.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgGridBasicGridComponent,
    CheckboxGenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule
  ],
  exports: [
    AgGridModule,
    AgGridBasicGridComponent
  ]
})
export class AgGridLocalModule { }
