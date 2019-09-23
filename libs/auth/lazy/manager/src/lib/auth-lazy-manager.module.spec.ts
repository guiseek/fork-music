import { async, TestBed } from '@angular/core/testing';
import { AuthLazyManagerModule } from './auth-lazy-manager.module';

describe('AuthLazyManagerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthLazyManagerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthLazyManagerModule).toBeDefined();
  });
});
