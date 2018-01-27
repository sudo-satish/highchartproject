import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayChart = false;
  displayCandleStick = false;
  buttonLabel = '';

  ngOnInit() {
    this.setButtonLabel();
    var thisObj = this;
  }
  setButtonLabel() {
    if(this.displayCandleStick) {
      this.buttonLabel = 'Hide Stock Chart';
    } else {
      this.buttonLabel = 'Display Stock Chart';
    }
  }

  toggleChartDisplay() {
    if(this.displayCandleStick) {
      this.displayCandleStick = false;
    } else {
      this.displayCandleStick = true;
    }
    this.setButtonLabel();
  }

}
