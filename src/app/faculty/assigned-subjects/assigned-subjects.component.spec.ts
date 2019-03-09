import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSubjectsComponent } from './assigned-subjects.component';

describe('AssignedSubjectsComponent', () => {
  let component: AssignedSubjectsComponent;
  let fixture: ComponentFixture<AssignedSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
