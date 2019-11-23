import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWelcomeScreenComponent } from './user-welcome-screen.component';

describe('UserWelcomeScreenComponent', () => {
  let component: UserWelcomeScreenComponent;
  let fixture: ComponentFixture<UserWelcomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWelcomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
