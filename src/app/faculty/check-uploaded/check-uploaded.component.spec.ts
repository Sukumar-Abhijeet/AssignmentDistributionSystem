import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUploadedComponent } from './check-uploaded.component';

describe('CheckUploadedComponent', () => {
  let component: CheckUploadedComponent;
  let fixture: ComponentFixture<CheckUploadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUploadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
