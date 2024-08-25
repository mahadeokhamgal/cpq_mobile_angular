import { Component } from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { Product, ProductCatalog } from 'src/interface/common';

@Component({
  selector: 'product-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent {
  products: ProductCatalog[] = [];
  constructor(private quoteService: QuoteService) {
    console.log("model is", quoteService.quote);
    this.fetchProducts();
  }

  fetchProducts() {
    this.quoteService.fetchProducts()
      .then((res) => {
        console.log("res", res);
        this.products = res as ProductCatalog[];
      })
      .catch((err) => {
        console.log("err", err);
      })
  }

  /**
   * 
   * @param product 
   * @param qty 
   */
  addToCart(product: ProductCatalog, qty: string = '1') {
    /**
     * to check if product already added.
     * 
     */
    
    this.quoteService.quote.products = this.quoteService.quote?.products?.filter(p => p.productId != product.productId);
    console.log("products is", product, this.quoteService.quote);
    this.quoteService.addProduct(product, Number(qty));
  }

  addedToCart(productId: string) {
    return this.quoteService.quote.products?.find(p => p.productId == productId);
  }

}
