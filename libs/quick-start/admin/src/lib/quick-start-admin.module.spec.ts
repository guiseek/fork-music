import { async, TestBed } from '@angular/core/testing';
import { QuickStartAdminModule } from './quick-start-admin.module';

describe('QuickStartAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuickStartAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuickStartAdminModule).toBeDefined();
  });
});
