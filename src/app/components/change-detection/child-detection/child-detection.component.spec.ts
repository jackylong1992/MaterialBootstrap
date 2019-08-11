import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDetectionComponent } from './child-detection.component';

describe('ChildDetectionComponent', () => {
  let component: ChildDetectionComponent;
  let fixture: ComponentFixture<ChildDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
