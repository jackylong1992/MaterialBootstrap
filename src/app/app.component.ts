import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-table';
  private testBinding: string = "test binding";
  register() {
    window.alert("register");
  }
}
