import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { QuoteService } from 'src/app/quote.service';
import { ProductCatalog, QuoteModal } from 'src/interface/common';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.less']
})
export class OrderSummaryComponent {
  quote: QuoteModal;
  constructor(private quoteService: QuoteService) {
    this.quote = quoteService.quote;
  }

  getTotal(product: ProductCatalog){
    return (product?.price || 0) * (product?.quntity || 1);
  }
}