import { async, TestBed } from '@angular/core/testing';
import { ClassroomsModule } from './classrooms.module';

describe('ClassroomsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClassroomsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClassroomsModule).toBeDefined();
  });
});
