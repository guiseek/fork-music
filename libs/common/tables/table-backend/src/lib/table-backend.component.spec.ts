import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBackendComponent } from './table-backend.component';

describe('TableBackendComponent', () => {
  let component: TableBackendComponent;
  let fixture: ComponentFixture<TableBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
