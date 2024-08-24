import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { QuoteModel, states } from 'src/interface/common';
import * as _ from 'lodash';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.less']
})
export class CustomerDetailComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  quote: QuoteModel;
  constructor(private http: HttpClient) {
    this.quote = new QuoteModel(this.model);
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

  fields: FormlyFieldConfig[] =
    [
      {
        key: 'customer.name',
        type: 'typeahead',
        className: 'col-xs-6',
        props: {
          label: 'Customer Name',
          filter: (term: any) => of(term ? this.filterStates(term) : states.slice()),
        }
      },
      {
        "key": "customer.tier",
        "className": "col-xs-3",
        "type": "select",
        'props': {
          "label": "This is static option Array Field",
          "options": [
            { 'label': 'GOV', 'value': 'GOV' },
            { 'label': 'RETAIL', 'value': 'RETAIL' }
          ]
        }
      },
      {
        key: 'customer.creditState',
        type: 'htmlTemplate',
        'props': {
          'label': 'Credit Status',
          'html': '<h2>Injected html</h2>'
        }
      }
    ];

  filterStates(name: string) {
    return states.filter(state =>
      state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  submit() {
    console.log("this model", this.model);
    if (!this.quote.quoteId) {
      this.http.get('http://localhost:3000/quotes')
      .subscribe((quotes) => {
        console.log("allquotes", quotes);
        let maxIdQuote = _.maxBy(quotes as QuoteModel[], (quote) => {
          return quote.quoteId;
        });
        let nexId = ((maxIdQuote as QuoteModel).quoteId || 0) + 1;
        console.log("maxQuoteId", nexId);
        this.quote.quoteId = nexId;
        this.quote.id = nexId;
        this.http.post(`http://localhost:3000/quotes`, this.quote)
        .subscribe(response => {
          console.log("new quote created");
          
        })
      })
      // this.quote = new QuoteModel(this.model);
      console.log("quote is", this.quote);

    }
  }

}
