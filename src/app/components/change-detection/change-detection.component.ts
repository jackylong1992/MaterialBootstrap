import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {
  userData:any;
  constructor() { }

  ngOnInit() {
    this.userData = {
      id: '123',
      name: 'jacky'
    };
  }

  changeName() {
    // INFO: change by content
    // this.userData.name += "a";
    // INFO: change by reference
    this.userData = {
      ...this.userData,
      // name: this.userData.name += "a" 
    }
  }
}
