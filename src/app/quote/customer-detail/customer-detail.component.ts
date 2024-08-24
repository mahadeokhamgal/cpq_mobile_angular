import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.less']
})
export class CustomerDetailComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  constructor(private http: HttpClient) {

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
    // {
    //   key: 'day',
    //   type: 'input',
    //   props: {
    //     type: 'date',
    //     label: 'Day of the trip',
    //     required: true,
    //   },
    // },
    // {
    //   key: 'text-area',
    //   type: 'textarea',
    //   className: 'col-xs-4',
    //   props: {
    //     label: 'Text Area',
    //     rows: 5
    //     // ma
    //   }
    // },
    {
      key: 'customer.name',
      type: 'typeahead',
      className: 'col-xs-6',
      props: {
        label: 'Customer Name',
        filter: (term : any) => of(term ? this.filterStates(term) : states.slice()),
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
      key:'customer.creditState',
      type:'htmlTemplate',
      'props':{
        'label': 'Credit Status',
        'html': '<h2>Injected html</h2>'
      }
    },
    // {
    //   key: 'input-basic',
    //   type: 'input',
    //   props: {
    //     label: 'First name',
    //     required: true,
    //   },
    // },
    // {
    //   key: 'date-type-1',
    //   type: 'date',
    //   className: 'col-sm-6',
    //   props: {
    //     label: 'Date of birth',
    //   },
    // },
    // {
    //   key: 'date-type-2',
    //   type: 'input',
    //   className: 'col-sm-6',
    //   props: {
    //     label: 'Date of birth',
    //     type: 'date'
    //   },
    // },
    // {
    //   key: 'age',
    //   type: 'input',
    //   props: {
    //     type: 'number',
    //     label: 'Age',
    //     required: true,
    //   },
    // },
    // {
    //   "type": "section",
    //   'className': "row",
    //   "fieldGroup": [
    //     {
    //       "type": "section",
    //       "className": "col-xs-6",
    //       "fieldGroup": [
    //         {
    //           "key": "select1",
    //           "className": "col-xs-3",
    //           "type": "select",
    //           'props': {
    //             "label": "This is static option Array Field",
    //             "options": [
    //               { 'label': 'option-1', 'value': 'option-2' }
    //             ]
    //           }
    //         },
    //         {
    //           "key": "select2",
    //           "className": "col-xs-3",
    //           "type": "select",
    //           'props': {
    //             "label": "This is dynamic option Array Field",
    //             "options": this.getOptionsObservable(),
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       "type": "fieldset",
    //       'props': {
    //         'label': "Correspondence Address",
    //       },
    //       "fieldGroup": [
    //         {
    //           "type": "section",
    //           "className": "row",
    //           "fieldGroup": [
    //             {
    //               "type": "input",
    //               "key": "correpondence.suburb",
    //               "className": "col-xs-4",
    //               'props': {
    //                 'label':'Suburb',
    //                 'placeholder': 'Suburb'
    //               }
    //             },
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // }
  ];
  
  filterStates(name: string) {
    return states.filter(state =>
      state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];