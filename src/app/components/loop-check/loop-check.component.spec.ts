import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopCheckComponent } from './loop-check.component';

describe('LoopCheckComponent', () => {
  let component: LoopCheckComponent;
  let fixture: ComponentFixture<LoopCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
