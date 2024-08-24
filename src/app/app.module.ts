import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MaterialModule } from './material/material.module';
import { AgGridLocalModule } from './ag-grid/ag-grid.module';
import { NgxFormlyModule } from './ngx-formly/ngx-formly.module';
import { QuoteComponent } from './quote/quote.component';
import { QuoteHeaderComponent } from './quote/quote-header/quote-header.component';
import { ProductDetailComponent } from './quote/product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './quote/product-detail/cart/cart.component';
import { CatalogComponent } from './quote/product-detail/catalog/catalog.component';
import { OrderSummaryComponent } from './quote/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    QuoteComponent,
    QuoteHeaderComponent,
    // CustomerDetailComponent,
    ProductDetailComponent,
    OrderSummaryComponent,
    CartComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MaterialModule,
    AgGridLocalModule,
    NgxFormlyModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ AppRoutingModule ]
})
export class AppModule { }
