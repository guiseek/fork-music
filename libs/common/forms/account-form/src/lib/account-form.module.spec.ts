import { async, TestBed } from '@angular/core/testing';
import { AccountFormModule } from './account-form.module';

describe('AccountFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountFormModule).toBeDefined();
  });
});
