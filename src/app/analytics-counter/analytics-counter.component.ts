import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-analytics-counter',
  template: `
    <p>
      analytics-counter works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AnalyticsCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
