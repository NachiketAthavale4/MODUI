import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWelcomeScreenComponent } from './admin-welcome-screen.component';

describe('AdminWelcomeScreenComponent', () => {
  let component: AdminWelcomeScreenComponent;
  let fixture: ComponentFixture<AdminWelcomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWelcomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
