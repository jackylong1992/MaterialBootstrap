import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildDetectionComponent } from './grand-child-detection.component';

describe('GrandChildDetectionComponent', () => {
  let component: GrandChildDetectionComponent;
  let fixture: ComponentFixture<GrandChildDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
