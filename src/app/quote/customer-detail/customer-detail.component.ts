import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { Customers, QuoteModel } from 'src/interface/common';
import * as _ from 'lodash';
import { QuoteService } from 'src/app/quote.service';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.less']
})
export class CustomerDetailComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  quote: QuoteModel;
  constructor(private http: HttpClient, private quoteService: QuoteService) {
    this.quote = quoteService.quote;
  }

  

  fields: FormlyFieldConfig[] =
    [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Order Name',
          required: true,
        },
      },
      {
        key: 'customer.name',
        type: 'typeahead',
        className: 'col-xs-6',
        props: {
          label: 'Customer Name',
          filter: (term: any) => of(term ? this.filterStates(term) : Customers.slice()),
        }
      },
      {
        "key": "customer.tier",
        "className": "col-xs-3",
        "type": "select",
        'props': {
          "label": "Customer Tier",
          "options": [
            { 'label': 'GOV', 'value': 'GOV' },
            { 'label': 'RETAIL', 'value': 'RETAIL' }
          ]
        }
      },
      // {
      //   key: 'customer.creditState',
      //   type: 'htmlTemplate',
      //   'props': {
      //     'label': 'Credit Status',
      //     'html': '<h2>Injected html</h2>'
      //   }
      // }
    ];

  filterStates(name: string) {
    return Customers.filter(cust =>
      cust.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  submit() {
    console.log("this model", this.quote);
    this.quoteService.save(this.quote)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      
    })
  }

}
