import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsLayoutComponent } from './instructors-layout.component';

describe('InstructorsLayoutComponent', () => {
  let component: InstructorsLayoutComponent;
  let fixture: ComponentFixture<InstructorsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
