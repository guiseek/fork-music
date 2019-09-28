import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomsLayoutComponent } from './classrooms-layout.component';

describe('ClassroomsLayoutComponent', () => {
  let component: ClassroomsLayoutComponent;
  let fixture: ComponentFixture<ClassroomsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
