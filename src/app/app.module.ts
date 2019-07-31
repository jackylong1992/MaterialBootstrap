import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableOverviewExample } from './components/table/table-overview-example';
import { DemoMaterialModule } from './material-module';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
@NgModule({
  declarations: [
    AppComponent,
    TableOverviewExample,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
