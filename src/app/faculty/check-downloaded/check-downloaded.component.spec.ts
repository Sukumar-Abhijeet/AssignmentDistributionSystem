import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDownloadedComponent } from './check-downloaded.component';

describe('CheckDownloadedComponent', () => {
  let component: CheckDownloadedComponent;
  let fixture: ComponentFixture<CheckDownloadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDownloadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDownloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
