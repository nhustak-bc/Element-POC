import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';
import { createCustomElement } from '@angular/elements';
import { AnalyticsCounter2Component } from './analytics-counter/analytics-counter2.component';

@NgModule({
  declarations: [
    AnalyticsCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AnalyticsCounterComponent]
})
export class AppModule { 
  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(AnalyticsCounterComponent, {injector : this.injector});
  customElements.define('analytics-counter',el);

  const el2 = createCustomElement(AnalyticsCounter2Component, {injector : this.injector});
  customElements.define('analytics-counter2',el2);
  }
}
