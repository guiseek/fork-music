import { async, TestBed } from '@angular/core/testing';
import { FormBackendModule } from './form-backend.module';

describe('FormBackendModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormBackendModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormBackendModule).toBeDefined();
  });
});
