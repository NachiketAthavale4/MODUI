import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorWelcomeScreenComponent } from './mentor-welcome-screen.component';

describe('MentorWelcomeScreenComponent', () => {
  let component: MentorWelcomeScreenComponent;
  let fixture: ComponentFixture<MentorWelcomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorWelcomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
