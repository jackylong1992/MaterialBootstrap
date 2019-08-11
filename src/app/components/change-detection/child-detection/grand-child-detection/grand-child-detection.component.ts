import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-grand-child-detection',
  templateUrl: './grand-child-detection.component.html',
  styleUrls: ['./grand-child-detection.component.scss']
})
export class GrandChildDetectionComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('grand child do check');
  }

}
