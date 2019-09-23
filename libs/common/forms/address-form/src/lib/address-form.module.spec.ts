import { async, TestBed } from '@angular/core/testing';
import { AddressFormModule } from './address-form.module';

describe('AddressFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AddressFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AddressFormModule).toBeDefined();
  });
});
