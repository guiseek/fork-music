import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomScheduleComponent } from './classroom-schedule.component';

describe('ClassroomScheduleComponent', () => {
  let component: ClassroomScheduleComponent;
  let fixture: ComponentFixture<ClassroomScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
