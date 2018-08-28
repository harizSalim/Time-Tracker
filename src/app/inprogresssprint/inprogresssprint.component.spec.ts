import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogresssprintComponent } from './inprogresssprint.component';

describe('InprogresssprintComponent', () => {
  let component: InprogresssprintComponent;
  let fixture: ComponentFixture<InprogresssprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogresssprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogresssprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
