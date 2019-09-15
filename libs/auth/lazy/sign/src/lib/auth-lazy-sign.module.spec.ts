import { async, TestBed } from '@angular/core/testing';
import { AuthLazySignModule } from './auth-lazy-sign.module';

describe('AuthLazySignModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthLazySignModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthLazySignModule).toBeDefined();
  });
});
