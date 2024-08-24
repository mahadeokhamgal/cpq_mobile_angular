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
      field: 'company',
      headerName: 'Company',
      filter: CheckboxGenComponent,
      checkboxSelection: true,
    },
    {
      field: 'name',
      headerName: 'User Name',
      filter: CheckboxGenComponent,
    },
    {
      headerName: 'Is Service Active',
      field: 'isActive',
    }
  ];

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
      rowData: [],
    };
    this.http.get('http://localhost:3000/orders').subscribe(data  => {
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