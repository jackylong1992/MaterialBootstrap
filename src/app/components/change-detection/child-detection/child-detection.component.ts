import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef, AfterViewChecked, ɵConsole } from '@angular/core';
import { of,  } from 'rxjs';
import { delay} from 'rxjs/operators';
interface User {
  id: string;
  name: string;
}

@Component({
  selector: 'app-child-detection',
  templateUrl: './child-detection.component.html',
  styleUrls: ['./child-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildDetectionComponent implements OnInit, DoCheck, OnChanges, AfterViewChecked {
  @Input() data:User;
  tempData = '';
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    // INFO: in OnPush Mode internal change from .subscribe() DOES NOT trigger Change Detection like button click, we have to run the CD manually with markForCheck()
    of(1,2,3).pipe(delay(2000)).subscribe((value)=> {
      console.log(value);
      this.tempData = '' + value;
      // this.ref.markForCheck();
    })
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngOnChanges () {
    console.log('ON CHANGE');
  }

  ngAfterViewChecked () {
    // console.log('---------- After View Checked ----------');
  }

  checkForChange() {
    // this.ref.markForCheck();
    // INFO: OnPush will do nothing if we have internal state and modify it inside the view, or even if you have a button click with empty handler, 
    // the grandchild do check function will still run
    this.tempData += "abc"
  }

}
