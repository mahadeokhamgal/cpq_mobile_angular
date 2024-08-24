import { Component } from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { Product } from 'src/interface/common';

@Component({
  selector: 'product-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent {
  products: any[] = [];
  constructor(private quoteService: QuoteService) {
    console.log("model is", quoteService.quote);
    this.fetchProducts();
  }

  fetchProducts() {
    this.quoteService.fetchProducts()
      .then((res) => {
        console.log("res", res);
        this.products = res as any[];
      })
      .catch((err) => {
        console.log("err", err);
      })
  }

  addToCart(product: any) {
    console.log("products is", product, this.quoteService.quote);
    this.quoteService.addProduct(product);
  }

}
