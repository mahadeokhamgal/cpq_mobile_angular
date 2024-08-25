import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { CheckboxGenComponent } from '../checkbox-gen/checkbox-gen.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ag-grid-basic-grid',
  templateUrl: './ag-grid-basic-grid.component.html',
  styleUrls: ['./ag-grid-basic-grid.component.less']
})
export class AgGridBasicGridComponent {

  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 30,
    },
    {
      field: 'quoteId',
      headerName: 'Quote Id',
      flex: 0.7,
      // filter: CheckboxGenComponent,
    },
    {
      field: 'products.0.productName',
      headerName: 'Product Name',
      flex: 1,
      // filter: CheckboxGenComponent,
      // checkboxSelection: true,
    },
    // {
    //   headerName: 'Plan Type',
    //   field: 'products.0.productName',
    //   flex: 1.5,
    // },
    {
      field: 'products.0.data',
      headerName: 'Data',
      flex: 1,
      // filter: CheckboxGenComponent,
      // checkboxSelection: true,
    },
    {
      field: 'products.0.price',
      headerName: 'Prices',
      flex: 1,
      // filter: CheckboxGenComponent,
      // checkboxSelection: true,
    },
    {
      field: 'customer.name',
      headerName: 'Customer Name',
      flex: 1.2,
      // filter: CheckboxGenComponent,
    },
    {
      headerName: 'Status',
      field: 'status',
      flex: 1,
    }
  ];
  frameworkComponents: any;
  gridOptions: GridOptions<any>;
  rowDataC: any;

  constructor(private http: HttpClient) {
    this.gridOptions = <GridOptions>{
      // enableSorting: true,
      // enable filtering
      // enableFilter: true,
      headerHeight: 42,
      rowHeight: 38,
      columnDefs: this.columnDefs,
      rowSelection: 'multiple',
      rowData: [],
    };
    this.http.get('http://localhost:3000/quotes').subscribe(data => {
      console.log("data", data);
      this.rowDataC = data;
      this.gridApi?.setRowData(data as any[]);
    })
  }

  onClicked() {
  }
  public rowSelection: 'single' | 'multiple' = 'multiple';


  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.setRowData(this.rowDataC);
  }
}
