import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AgGridAngularComponent } from './ag-grid/ag-grid-angular/ag-grid-angular.component';
import { FormlyBasicComponent } from './ngx-formly/formly-basic/formly-basic.component';
import { AggridIntegrationComponent } from './ngx-formly/aggrid-integration/aggrid-integration.component';
import { AgGridBasicGridComponent } from './ag-grid/ag-grid-basic-grid/ag-grid-basic-grid.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'inventory', component: AgGridBasicGridComponent },
  { path: 'aggrid', component: AgGridAngularComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'formly', component: FormlyBasicComponent },
  { path: 'formly_aggrid', component: AggridIntegrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
