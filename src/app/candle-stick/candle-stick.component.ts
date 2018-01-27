import { Component, OnInit, AfterViewInit  } from '@angular/core';

declare var Highcharts: any; // To bypass error Highcharts not defined untill highchart.js is not loaded in window.
declare var $: any; // To bypass error Highcharts not defined untill jQuery.js is not loaded in window.

@Component({
  selector: 'app-candle-stick',
  templateUrl: './candle-stick.component.html',
  //template: `<div id="container" style="height: 500px"></div>`
})
export class CandleStickComponent implements OnInit, AfterViewInit {

  constructor() {}
  ngOnInit() {
  }

  ngAfterViewInit() {

    //Using Jquery Ajax for temporary use,
    $.ajax({
      dataType: "json",
      url: 'https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?',
      success: function (data) {
                Highcharts.stockChart('candle-stick-chart', {
                    rangeSelector: {
                        selected: 1
                    },
                    title: {
                        text: 'Bit coin stock'
                    },

                    series: [{
                        type: 'candlestick',
                        name: 'Coin price',
                        data: data,
                        dataGrouping: {
                            units: [
                                [
                                    'week', // unit name
                                    [1] // allowed multiples
                                ], [
                                    'month',
                                    [1, 2, 3, 4, 6]
                                ]
                            ]
                        }
                    }]
                });
       }
    });
  }

}
