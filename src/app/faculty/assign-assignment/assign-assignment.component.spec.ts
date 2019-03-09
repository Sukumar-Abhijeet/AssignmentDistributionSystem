import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAssignmentComponent } from './assign-assignment.component';

describe('AssignAssignmentComponent', () => {
  let component: AssignAssignmentComponent;
  let fixture: ComponentFixture<AssignAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
