import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrentTrainingComponent } from './admin-current-training.component';

describe('AdminCurrentTrainingComponent', () => {
  let component: AdminCurrentTrainingComponent;
  let fixture: ComponentFixture<AdminCurrentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCurrentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCurrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
