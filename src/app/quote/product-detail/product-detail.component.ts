import { Component } from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { QuoteModal } from 'src/interface/common';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent {
  quote: QuoteModal;
  constructor(private quoteService: QuoteService) {
    console.log("model is", quoteService.quote);
    this.quote = quoteService.quote;
  }
}
