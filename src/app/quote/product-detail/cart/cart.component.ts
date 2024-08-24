import { Component, Input } from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { Product, QuoteModal } from 'src/interface/common';

@Component({
  selector: 'product-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent {
  quote: QuoteModal;
  products: Product[];
   constructor(private quoteService: QuoteService) {
    this.quote = quoteService.quote;
    this.products = this.quote.products || [];
  }
}
