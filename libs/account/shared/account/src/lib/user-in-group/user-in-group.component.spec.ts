import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInGroupComponent } from './user-in-group.component';

describe('UserInGroupComponent', () => {
  let component: UserInGroupComponent;
  let fixture: ComponentFixture<UserInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
