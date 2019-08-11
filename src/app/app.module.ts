import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableOverviewExample } from './components/table/table-overview-example';
import { DemoMaterialModule } from './material-module';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { LoopCheckComponent } from './components/loop-check/loop-check.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { ChildDetectionComponent } from './components/change-detection/child-detection/child-detection.component';
import { GrandChildDetectionComponent } from './components/change-detection/child-detection/grand-child-detection/grand-child-detection.component';
@NgModule({
  declarations: [
    AppComponent,
    TableOverviewExample,
    ContentProjectionComponent,
    LoopCheckComponent,
    ChangeDetectionComponent,
    ChildDetectionComponent,
    GrandChildDetectionComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
