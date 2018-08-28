import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastsprintsComponent } from './pastsprints.component';

describe('PastsprintsComponent', () => {
  let component: PastsprintsComponent;
  let fixture: ComponentFixture<PastsprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastsprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastsprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
