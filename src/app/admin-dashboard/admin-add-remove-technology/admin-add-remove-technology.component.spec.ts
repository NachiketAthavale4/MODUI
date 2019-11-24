import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRemoveTechnologyComponent } from './admin-add-remove-technology.component';

describe('AdminAddRemoveTechnologyComponent', () => {
  let component: AdminAddRemoveTechnologyComponent;
  let fixture: ComponentFixture<AdminAddRemoveTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddRemoveTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddRemoveTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
