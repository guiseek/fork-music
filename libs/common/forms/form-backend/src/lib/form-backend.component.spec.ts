import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBackendComponent } from './form-backend.component';

describe('FormBackendComponent', () => {
  let component: FormBackendComponent;
  let fixture: ComponentFixture<FormBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
