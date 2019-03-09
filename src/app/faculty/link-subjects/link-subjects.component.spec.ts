import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSubjectsComponent } from './link-subjects.component';

describe('LinkSubjectsComponent', () => {
  let component: LinkSubjectsComponent;
  let fixture: ComponentFixture<LinkSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
