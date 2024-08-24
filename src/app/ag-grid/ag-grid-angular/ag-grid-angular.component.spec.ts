import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridAngularComponent } from './ag-grid-angular.component';

describe('AgGridAngularComponent', () => {
  let component: AgGridAngularComponent;
  let fixture: ComponentFixture<AgGridAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridAngularComponent]
    });
    fixture = TestBed.createComponent(AgGridAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
