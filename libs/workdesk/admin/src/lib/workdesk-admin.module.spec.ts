import { async, TestBed } from '@angular/core/testing';
import { WorkdeskAdminModule } from './workdesk-admin.module';

describe('WorkdeskAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WorkdeskAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WorkdeskAdminModule).toBeDefined();
  });
});
