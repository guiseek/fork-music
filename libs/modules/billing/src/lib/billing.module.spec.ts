import { async, TestBed } from '@angular/core/testing';
import { BillingModule } from './billing.module';

describe('BillingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BillingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BillingModule).toBeDefined();
  });
});
