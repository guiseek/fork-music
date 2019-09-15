import { async, TestBed } from '@angular/core/testing';
import { AccountUiModule } from './account-ui.module';

describe('AccountUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountUiModule).toBeDefined();
  });
});
