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
      headerCheckboxSelection:true,
      checkboxSelection: true,
    },
    {
      field: 'quotetype',
      headerName: 'Type',
      // filter: CheckboxGenComponent,
      // checkboxSelection: true,
    },
    {
      field: 'quoteid',
      headerName: 'quoteid',
      // filter: CheckboxGenComponent,
    },
    {
      headerName: 'name',
      field: 'name',
    },
    {
      field: 'cfu',
      headerName: 'cfu',
      // filter: CheckboxGenComponent,
      // checkboxSelection: true,
    },
    {
      field: 'custname',
      headerName: 'custname',
      // filter: CheckboxGenComponent,
    },
    {
      headerName: 'opportunity_id',
      field: 'opportunity_id',
    }
  ];

  // 'quotetype',
//     'quoteid',
//     'name',
//     'cfu',
//     'custname',
//     'opportunity_id',
//     'status',
//     'install',
//     'monthly',
//     'createdDate',
//     'updatedDate'

  public themeClass: string =
    "ag-theme-quartz";
  frameworkComponents: any;
  gridOptions: GridOptions<any>;
  rowDataC: any;

  constructor(private http: HttpClient) {
    this.gridOptions = <GridOptions>{
      // enableSorting: true,
      // enable filtering 
      // enableFilter: true,
      columnDefs: this.columnDefs,
      rowSelection:'multiple',
      rowData: [],
    };
    this.http.get('http://localhost:3000/quotes').subscribe(data  => {
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