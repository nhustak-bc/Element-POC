import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-analytics-counter2',
  template: `
    <p>
      analytics-counter2 works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AnalyticsCounter2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
