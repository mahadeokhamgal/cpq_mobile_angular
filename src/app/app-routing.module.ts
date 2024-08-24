import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AgGridBasicGridComponent } from './ag-grid/ag-grid-basic-grid/ag-grid-basic-grid.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'inventory', component: AgGridBasicGridComponent },
  { path: 'quote', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
