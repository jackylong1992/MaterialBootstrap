import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableOverviewExample } from './components/table/table-overview-example';
import { DemoMaterialModule } from './material-module';
@NgModule({
  declarations: [
    AppComponent,
    TableOverviewExample
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
