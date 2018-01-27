import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';
//import { ChartComponent } from './chart/chart.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HttpClientModule } from '@angular/common/http';

import { JsonpModule } from '@angular/http';
import { CandleStickComponent } from './candle-stick/candle-stick.component';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}
@NgModule({
  declarations: [
    AppComponent,
    CandleStickComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    JsonpModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
