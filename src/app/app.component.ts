import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'mat-table';
  private testBinding: string = "test binding";
  register() {
    window.alert("register");
  }

  ngDoCheck() {
    console.log('do check from main component');
  }
}
