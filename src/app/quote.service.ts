import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCatalog, QuoteModal, QuoteModel } from 'src/interface/common';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quote: QuoteModal;

  constructor(private http: HttpClient) { 
    this.quote = new QuoteModel({} as any);
  }

  getOptionsObservable(): Observable<any> {
    return new Observable(observer => {
      this.http.get('/assets/options.json')
        .subscribe((d: any) => {
          observer.next(d.map((e: any) => { return { 'label': e, 'value': e } }));
          observer.complete();
        }, (err) => {
          observer.error(err.message);
        })
    })
  }

  save(model: QuoteModal) {
    return new Promise((resolve, reject) => {
      if (!model.quoteId) {
        this.http.get('http://localhost:3000/quotes')
          .subscribe((quotes) => {
            console.log("allquotes", quotes);
            let maxIdQuote = _.maxBy(quotes as QuoteModel[], (quote) => {
              return quote.quoteId;
            });
            let nexId = ((maxIdQuote as QuoteModel)?.quoteId || 0) + 1;
            console.log("maxQuoteId", nexId);
            model.quoteId = nexId;
            model.id = String(nexId);
            this.quote = model;
            this.http.post(`http://localhost:3000/quotes`, model)
              .subscribe(response => {
                console.log("new quote created");
                resolve(response);
              })
          },
            (err) => {
              reject(err);
            })
        // this.quote = new QuoteModel(this.model);
        console.log("quote is", model);
      } else {
        this.quote = model;
        let objectToPatch: any = _.cloneDeep(model);
        // delete objectToPatch.id;
        this.http.patch(`http://localhost:3000/quotes/${model.quoteId}`, model)
          .subscribe(response => {
            console.log("new quote created");
            resolve(response);
          },
            (err) => {
              console.log("err", err);
              reject(err);
            })
      }
    })

  }

  fetchProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/products').subscribe(
        (data) => {
          console.log("product data");
          resolve(data);
        },
        (err) => {
          console.log("err", err);
          reject(err);
        }
      )
    })
  }

  
  addProduct(product: ProductCatalog, qty: number = 1): void {
    let temoProd = {
      ...product,
      quntity: qty || 1
    }
    this.quote.products.push(temoProd);
    this.save(this.quote);
  }
}
