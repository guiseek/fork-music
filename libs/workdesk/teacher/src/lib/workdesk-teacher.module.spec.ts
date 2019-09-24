import { async, TestBed } from '@angular/core/testing';
import { WorkdeskTeacherModule } from './workdesk-teacher.module';

describe('WorkdeskTeacherModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WorkdeskTeacherModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WorkdeskTeacherModule).toBeDefined();
  });
});
