import { async, TestBed } from '@angular/core/testing';
import { TeamFormModule } from './team-form.module';

describe('TeamFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TeamFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TeamFormModule).toBeDefined();
  });
});
