import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStatusFormComponent } from './employee-status-form.component';

describe('EmployeeStatusFormComponent', () => {
  let component: EmployeeStatusFormComponent;
  let fixture: ComponentFixture<EmployeeStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
