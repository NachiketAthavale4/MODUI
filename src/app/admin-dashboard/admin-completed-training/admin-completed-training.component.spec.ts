import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompletedTrainingComponent } from './admin-completed-training.component';

describe('AdminCompletedTrainingComponent', () => {
  let component: AdminCompletedTrainingComponent;
  let fixture: ComponentFixture<AdminCompletedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompletedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompletedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
